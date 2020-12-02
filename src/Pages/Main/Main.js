/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled, { StyleSheetManager } from "styled-components";
import Nav from "../../Component/Nav/Nav";
import NavScroll from "../../Component/Nav/NavScroll";
import Footer from "../../Component/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard/ProductCard";
import SearchModal from "./SearchModal/SearchModal";
import CheckBoxBrand from "./CheckBoxBrand/CheckBoxBrand";
import Pagination from "./Pagination/Pagination";
import Loading from "../../Component/Loading/Loading";

const menus = {
  category: ["NEW", "BEST", "스니커즈", "로퍼", "구두", "부츠", "샌들"],
  shipping: ["무료배송", "할인상품만", "품절상품 제외"],
  price: [
    "전체 가격",
    "0 ~ 10,000원",
    "10,000원 ~ 50,000원",
    "50,000원 ~ 100,000원",
    "100,000원 ~ 200,000원",
  ],
  type: ["전체", "하이탑", "로우탑", "슬립온", "러닝화"],
  filter: [
    "추천순",
    "신상품순",
    "베스트순",
    "낮은가격순",
    "높은가격순",
    "높은할인순",
    "베스트리뷰순",
    "베스트하트순",
  ],
};

const brandList = {
  brand: [
    "Wright LLC",
    "Cole-Smith",
    "Coleman Inc",
    "Thompson-Martin",
    "Newman-Anderson",
    "Roman Ltd",
    "Pierce-Smith",
  ],
  count: ["719", "712", "736", "714", "701", "702", "724"],
};

export default function Main() {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isScrollOver, setIsScrollOver] = useState(false);

  const [shoesbrand, setShoesBrand] = useState("");

  const [goPriceFilter, setGoPriceFilter] = useState(true);

  const [shoesType, setShoesType] = useState("");

  const changeNav = () => {
    if (window.scrollY >= 60 && !isScrollOver) {
      setIsScrollOver(true);
      setIsScrolled(true);
    }

    if ((window.scrollY < 60) & isScrollOver) {
      setIsScrollOver(false);
      setIsScrolled(false);
    }
  };

  const history = useHistory();

  const goToProductDetail = () => {
    history.push("/product-detail");
  };

  useEffect(() => {
    fetch("/data/productData.json")
      .then((response) => response.json())
      .then((response) => {
        setProductData(response.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, [isScrollOver]);

  // 가격필터 구현예정
  const filterPrice = (e) => {
    console.log(e);
  };

  const openModal = (e) => {
    setIsModal(true);
  };

  const closeModal = (e) => {
    setIsModal(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.keyCode === 13) {
      console.log("entered");
      setIsSearched(true);
      closeModal();
    }
  };

  let filteredProductData = productData.filter((product) => {
    return product.brand.toLowerCase().includes(search.toLowerCase());
  });

  const handleCheckbox = (e) => {
    setLoading(true);
    setShoesBrand(e.target.name);
    fetch(`http://192.168.0.12:8000/store?brand=${e.target.name}`)
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
    setIsChecked(!isChecked);
  };

  let checkedData = productData.filter((product) => {
    return product.brand.toLowerCase().includes(check.toLowerCase());
  });

  return (
    <>
      <Nav openModal={openModal} closeModal={closeModal} isModal={isModal} />
      <MainWrapper>
        <CategoryOption>
          <CategoryOptionList>
            <h1>남성신발</h1>
            {menus.category.map((item) => {
              return <button>{item}</button>;
            })}
          </CategoryOptionList>
          <OptionFilter>
            <Filter>필터</Filter>
            <Refresh>초기화</Refresh>
          </OptionFilter>
          <div>
            <ProductInfo>
              <div>상품정보</div>
              <CheckBoxWrapper>
                <input type="checkbox" defaultChecked={false} />
                <PriceLabel for="cb1">무료배송</PriceLabel>
              </CheckBoxWrapper>
              <CheckBoxWrapper>
                <input type="checkbox" defaultChecked={false} />
                <PriceLabel for="cb2">할인상품만</PriceLabel>
              </CheckBoxWrapper>
              <CheckBoxWrapper>
                <input type="checkbox" defaultChecked={false} />
                <PriceLabel for="cb3">품절상품 제외</PriceLabel>
              </CheckBoxWrapper>
            </ProductInfo>
            <PriceList>
              <div>가격대</div>
              {menus.price.map((item, idx) => {
                return (
                  <>
                    <PriceWidth>
                      <input
                        type="radio"
                        defaultChecked={false}
                        onClick={filterPrice}
                      />
                      <PriceLabel for="cb1">전체 가격</PriceLabel>
                    </PriceWidth>
                    <PriceWidth>
                      <input type="radio" defaultChecked={false} />
                      <PriceLabel for="cb2">0 ~ 10,000원</PriceLabel>
                    </PriceWidth>
                    <PriceWidth>
                      <input type="radio" defaultChecked={false} />
                      <PriceLabel for="cb3">10,000원 ~ 50,000원</PriceLabel>
                    </PriceWidth>
                    <PriceWidth>
                      <input type="radio" defaultChecked={false} />
                      <PriceLabel for="cb4">50,0000원 ~ 100,0000원</PriceLabel>
                    </PriceWidth>
                    <PriceWidth>
                      <input type="radio" defaultChecked={false} />
                      <PriceLabel for="cb5">100,0000원 ~ 20,0000원</PriceLabel>
                    </PriceWidth>
                  </>
                );
              })}
            </PriceList>
            <BrandListWrapper>
              <BrandsHeading>브랜드</BrandsHeading>
              <SearchBox></SearchBox>

              {/* {checkBoxDataList.map((checkboxData) => {
                return (
                  <div>
                    <Brand
                    type='checkbox'
                    defaultChecked={false}
                    name={item}
                    onClick={handleCheckbox}
                    />
                  <BrandLabel
                    for={`cb${idx}`}
                    name={item}
                  >
                    {item} ({Math.ceil(Math.random() * 700)})
                  </BrandLabel>
                </div>
                )
              })} */}

              {/* <div>
                <Brand
                  type='checkbox'
                  defaultChecked={false}
                  name='나이키'
                  onClick={handleCheckbox}
                  />
                <BrandLabel
                  for='cb1'
                  name='나이키'
                >
                  나이키 (59)
                </BrandLabel>
              </div> */}

              <div>
                <Brand
                  type="checkbox"
                  defaultChecked={false}
                  name="나이키"
                  onClick={handleCheckbox}
                />
                <BrandLabel for="cb1" name="나이키">
                  나이키 (59)
                </BrandLabel>
              </div>
              <div>
                <Brand
                  type="checkbox"
                  defaultChecked={false}
                  name="아디다스"
                  onClick={handleCheckbox}
                />
                <BrandLabel for="cb1" name="아디다스">
                  아디다스 (36)
                </BrandLabel>
              </div>
              <div>
                <Brand
                  type="checkbox"
                  defaultChecked={false}
                  name="뉴발란스"
                  onClick={handleCheckbox}
                />
                <BrandLabel for="cb1" name="뉴발란스">
                  뉴발란스 (88)
                </BrandLabel>
              </div>
              <div>
                <Brand
                  type="checkbox"
                  defaultChecked={false}
                  name="엑셀시오르"
                  onClick={handleCheckbox}
                />
                <BrandLabel for="cb1" name="엑셀시오르">
                  엑셀시오르 (21)
                </BrandLabel>
              </div>
              <div>
                <Brand
                  type="checkbox"
                  defaultChecked={false}
                  name="컨버스"
                  onClick={handleCheckbox}
                />
                <BrandLabel for="cb1" name="컨버스">
                  컨버스 (28)
                </BrandLabel>
              </div>
              <div>
                <Brand
                  type="checkbox"
                  defaultChecked={false}
                  name="캐치볼"
                  onClick={handleCheckbox}
                />
                <BrandLabel for="cb1" name="캐치볼">
                  캐치볼 (18)
                </BrandLabel>
              </div>
              <div>
                <Brand
                  type="checkbox"
                  defaultChecked={false}
                  name="조셉트"
                  onClick={handleCheckbox}
                />
                <BrandLabel for="cb1" name="조셉트">
                  조셉트 (8)
                </BrandLabel>
              </div>
            </BrandListWrapper>
          </div>
        </CategoryOption>
        <CategoryList>
          <ListFilterWrapper>
            <ListFilter>
              <FilterAll>전체</FilterAll>
              <FilterItem>하이탑</FilterItem>
              <FilterItem>로우탑</FilterItem>
              <FilterItem>슬립온</FilterItem>
              <FilterItem>런닝화</FilterItem>
            </ListFilter>
            <ListFilterButton>추천순</ListFilterButton>
          </ListFilterWrapper>
          {isChecked ? (
            <ProductCard product={checkedData[0]} />
          ) : isSearched ? (
            <ProductCard product={filteredProductData[0]} />
          ) : (
            !!productData.length > 0 &&
            productData.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  product={product}
                />
              );
            })
          )}

          <PageChangeWrapper>
            <PageChanges paginate={paginate} />
          </PageChangeWrapper>
        </CategoryList>
      </MainWrapper>
      <Footer />
      {isModal ? (
        <SearchModal
          isModal={isModal}
          openModal={openModal}
          closeModal={closeModal}
          handleSearch={handleSearch}
          handleChange={handleChange}
        />
      ) : (
        ""
      )}
    </>
  );
}

const MainWrapper = styled.div`
  display: flex;
`;

const CategoryOption = styled.div`
  width: 250px;
  margin-left: 50px;
`;

const CategoryOptionList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #000;
  padding-bottom: 40px;

  h1 {
    font-size: 23px;
    font-weight: bold;
    padding: 0 0 20px 0;
    border-bottom: 4px solid #000;
    margin: 20px 0;
  }

  button {
    font-size: 16px;
    line-height: 40px;
    border: none;
    text-align: start;
    font-size: 16px;
    color: #5d5d5d;
  }
`;

const OptionFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const Filter = styled.div`
  font-size: 18px;
`;

const Refresh = styled.div`
  font-size: 14px;
  text-decoration: underline;
  color: #bbb;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

const CheckBoxWrapper = styled.div`
  margin: 10px 0;
  font-weight: normal;
`;

const PriceLabel = styled.label`
  margin-left: 5px;
  font-size: 13px;
`;

const PriceList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 30px 0 20px 0;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
`;

const PriceWidth = styled.div`
  margin: 8px 0;
  font-size: 12px;
  font-weight: normal;
`;

const BrandListWrapper = styled.div`
  margin: 30px 0 60px 0;
  font-size: 16px;
  font-weight: bold;
`;

const BrandsHeading = styled.div`
  margin: 40px 0 20px 0;
`;

const SearchBox = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  margin: 10px 0;
`;

const Brand = styled.input`
  margin: 10px 0;
`;

const BrandLabel = styled.label`
  margin-left: 5px;
  font-size: 13px;
  font-weight: normal;
`;

const CategoryList = styled.div`
  width: 100%;
  margin-right: 100px;
  box-sizing: border-box;
`;

const ListFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  margin: 10px 0px 20px 30px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #bbb;
`;

const ListFilter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterAll = styled.div`
  padding: 0 30px;
  border-right: 1px solid #bbb;
  font-weight: bold;
  color: #000;
`;

const FilterItem = styled(FilterAll)`
  border-right: 1px solid #bbb;
  font-weight: normal;
`;

const ListFilterButton = styled.select`
  border: none;
  text-align: center;
  height: 100%;
  padding: 0 40px;
  border-left: 1px solid #ddd;
`;

const PageChangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const PageChange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 48px;
  margin-right: 20px;
  width: 300px;

  svg {
    font-size: 28px;
  }
`;
