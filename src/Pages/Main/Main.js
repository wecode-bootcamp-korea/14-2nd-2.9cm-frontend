import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../Component/Nav/Nav';
import NavScroll from '../../Component/Nav/NavScroll';
import Footer from '../../Component/Footer/Footer';
import ProductCard from './ProductCard/ProductCard';
import SearchModal from './SearchModal/SearchModal';
import Pagination from './Pagination/Pagination';
import Loading from '../../Component/Loading/Loading';
import { STORE_API, PRICE_FILTER_API } from '../../config';
import axios from 'axios';

export default function Main() {
  const [productData, setProductData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollOver, setIsScrollOver] = useState(false);
  const [shoesbrand, setShoesBrand] = useState('');

  const changeNav = () => {
    if (window.scrollY >= 60 && isScrollOver === false) {
      setIsScrollOver(true);
      setIsScrolled(true);
    }

    if (window.scrollY < 60 && isScrollOver === true) {
      setIsScrollOver(false);
      setIsScrolled(false);
    }
  };

  const history = useHistory();

  const goToProductDetail = id => {
    history.push(`/product-detail/${id}`);
  };

  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openModal = e => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const getStore = async () => {
      try {
        const response = await axios.get(STORE_API);
        setProductData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getStore();
    setLoading(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, [isScrollOver]);

  const filterPrice = e => {
    setLoading(true);
    const priceFilter = async () => {
      try {
        const response = await axios.get(PRICE_FILTER_API);
        setProductData(response.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    priceFilter();
    setIsChecked(!isChecked);
    goToTop();
  };

  const filterSearch = e => {
    const SEARCH_FILTER_API = `${STORE_API}?search=${search}`;
    if (e.keyCode === 13) {
      setLoading(true);
      const searchFilter = async () => {
        try {
          const response = await axios.get(SEARCH_FILTER_API);
          setProductData(response.data.result);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      searchFilter();
      closeModal();
    }
  };

  const filterCheckbox = e => {
    const CHECKBOX_FILTER_API = `${STORE_API}?brand=${e.target.name}`;
    setShoesBrand(e.target.name);
    setLoading(true);
    const checkboxFilter = async () => {
      try {
        const response = await axios.get(CHECKBOX_FILTER_API);
        setProductData(response.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    checkboxFilter();
    setIsChecked(!isChecked);
    goToTop();
  };

  const paginate = e => {
    const PAGINATE_API = `${STORE_API}?page=${e.target.innerText}`;
    setLoading(true);
    const changePages = async () => {
      try {
        const response = await axios.get(PAGINATE_API);
        setProductData(response.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    changePages();
    goToTop();
  };

  // 쿼리 중복 필터로 어떻게 순서없이 맥이는지 현지 선생님한테 질문
  const filterType = e => {
    setLoading(true);

    let API = '';

    if (e.target.innerText === '전체') {
      API = `${STORE_API}`;
    } else {
      if (shoesbrand) {
        API = `${STORE_API}?brand=${shoesbrand}&type=${e.target.innerText}`;
      } else {
        API = `${STORE_API}?type=${e.target.innerText}`;
      }
    }

    const typeFilter = async () => {
      try {
        const response = await axios.get(API);
        setProductData(response.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    typeFilter();
  };

  const filterFree = () => {
    setLoading(true);
    const filterFree = async () => {
      try {
        const response = await axios.get(STORE_API);
        setProductData(response.data.result);
        setLoading(false);
      } catch (error) {}
    };

    filterFree();
    goToTop();
  };

  return (
    <>
      {isScrollOver ? (
        <NavScroll
          openModal={openModal}
          closeModal={closeModal}
          isModal={isModal}
          isScrolled={isScrolled}
        />
      ) : (
        <Nav openModal={openModal} closeModal={closeModal} isModal={isModal} />
      )}
      <MainWrapper>
        <CategoryOption>
          <CategoryOptionList>
            <h1>남성신발</h1>
            {menus.category.map(item => {
              return <button>{item}</button>;
            })}
          </CategoryOptionList>
          <OptionFilter>
            <Filter>필터</Filter>
            <Refresh onClick={filterFree}>초기화</Refresh>
          </OptionFilter>
          <div>
            <ProductInfo>
              <div>상품정보</div>
              {menus.shipping.map((item, idx) => {
                return (
                  <>
                    <CheckBoxWrapper>
                      <input type='checkbox' defaultChecked={false} />
                      <PriceLabel for={`cb${idx + 1}`}>{item}</PriceLabel>
                    </CheckBoxWrapper>
                  </>
                );
              })}
            </ProductInfo>
            <PriceList>
              <div>가격대</div>
              {menus.price.map((item, idx) => {
                return (
                  <PriceWidth>
                    <input
                      type='radio'
                      defaultChecked={false}
                      onClick={filterPrice}
                    />
                    <PriceLabel for={`cb${idx + 1}`}>{item}</PriceLabel>
                  </PriceWidth>
                );
              })}
            </PriceList>
            <BrandListWrapper>
              <BrandsHeading>브랜드</BrandsHeading>
              {brandList.brand.map((item, idx) => {
                return (
                  <div>
                    <Brand
                      type='checkbox'
                      defaultChecked={false}
                      name={item}
                      onClick={filterCheckbox}
                    />
                    <BrandLabel for={`cb${idx}`} name={item}>
                      {item} ({Math.ceil(Math.random() * 700)})
                    </BrandLabel>
                  </div>
                );
              })}
            </BrandListWrapper>
          </div>
        </CategoryOption>
        <CategoryList>
          <ListFilterWrapper>
            <ListFilter>
              {menus.type.map(item => {
                return <FilterItem onClick={filterType}>{item}</FilterItem>;
              })}
            </ListFilter>
            <ListFilterButton>
              {menus.filter.map((item, idx) => {
                return <option value={'$(idx)'}>{item}</option>;
              })}
            </ListFilterButton>
          </ListFilterWrapper>
          <ProductCard
            goToProductDetail={goToProductDetail}
            product={productData}
          />
          <PageChangeWrapper>
            <PageChanges paginate={paginate} />
          </PageChangeWrapper>
        </CategoryList>
      </MainWrapper>
      <Footer />
      {isModal && (
        <SearchModal
          closeModal={closeModal}
          filterSearch={filterSearch}
          handleChange={handleChange}
        />
      )}
      {loading && <Loading />}
    </>
  );
}

const menus = {
  category: ['NEW', 'BEST', '스니커즈', '로퍼', '구두', '부츠', '샌들'],
  shipping: ['무료배송', '할인상품만', '품절상품 제외'],
  price: [
    '전체 가격',
    '0 ~ 10,000원',
    '10,000원 ~ 50,000원',
    '50,000원 ~ 100,000원',
    '100,000원 ~ 200,000원',
  ],
  type: ['전체', '하이탑', '로우탑', '슬립온', '러닝화'],
  filter: [
    '추천순',
    '신상품순',
    '베스트순',
    '낮은가격순',
    '높은가격순',
    '높은할인순',
    '베스트리뷰순',
    '베스트하트순',
  ],
};

const brandList = {
  brand: [
    'Wright LLC',
    'Cole-Smith',
    'Coleman Inc',
    'Thompson-Martin',
    'Newman-Anderson',
    'Roman Ltd',
    'Pierce-Smith',
  ],
  count: ['719', '712', '736', '714', '701', '702', '724'],
};

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
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
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
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
`;

const PriceLabel = styled.label`
  margin-left: 5px;
  font-size: 13px;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
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

const Brand = styled.input`
  margin: 10px 0;
`;

const BrandLabel = styled.label`
  margin-left: 5px;
  font-size: 13px;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
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
  justify-content: center;
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
  &:hover {
    cursor: pointer;
  }
`;

const ListFilterButton = styled.select`
  border: none;
  text-align: center;
  height: 100%;
  padding: 0 40px;
  border-left: 1px solid #ddd;
  outline: none;
`;

const PageChangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const PageChanges = styled(Pagination)`
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
