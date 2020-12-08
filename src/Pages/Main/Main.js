import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { StyleSheetManager } from "styled-components";
import Nav from '../../Component/Nav/Nav';
import NavScroll from '../../Component/Nav/NavScroll';
import Footer from '../../Component/Footer/Footer';
import { FaArrowRight } from 'react-icons/fa';
import ProductCard from './ProductCard/ProductCard';
import SearchModal from './SearchModal/SearchModal';
import CheckBoxBrand from './CheckBoxBrand/CheckBoxBrand';
import Pagination from './Pagination/Pagination';
import Loading from '../../Component/Loading/Loading';

const menus = {
  category: ['NEW', 'BEST', '스니커즈', '로퍼', '구두', '부츠', '샌들'],
  shipping: ['무료배송', '할인상품만', '품절상품 제외'],
  price: ['전체 가격', '0 ~ 10,000원', '10,000원 ~ 50,000원', '50,000원 ~ 100,000원', '100,000원 ~ 200,000원'],
  type: ['전체', '하이탑', '로우탑', '슬립온', '러닝화'],
  filter: ['추천순', '신상품순', '베스트순', '낮은가격순', '높은가격순', '높은할인순', '베스트리뷰순', '베스트하트순'],
}

const brandList = {
  brand: ['Wright LLC',
    'Cole-Smith',
    'Coleman Inc',
    'Thompson-Martin',
    'Newman-Anderson',
    'Roman Ltd',
    'Pierce-Smith'
  ],
  count: [
    '719', '712', '736', '714', '701', '702', '724'
  ]
}

export default function Main() {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const [loading, setLoading] = useState(true);
  
  const [search, setSearch] = useState('');
  const [check, setCheck] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [isScrollOver, setIsScrollOver] = useState(false)
  
  const [shoesbrand, setShoesBrand] = useState('');

  const [goPriceFilter, setGoPriceFilter] = useState(true);

  const [shoesType, setShoesType] = useState('');

  const changeNav = () => {

    if(window.scrollY >= 60 && !isScrollOver){
      setIsScrollOver(true);
      setIsScrolled(true);
    }

    if(window.scrollY < 60 & isScrollOver){
      setIsScrollOver(false);
      setIsScrolled(false);
    }
  }

  const history = useHistory();

  const goToProductDetail = () => {
    history.push("/product-detail");
  }

  useEffect(() => {
    setLoading(true);
    fetch("http://192.168.0.12:8000/store")
    .then((response) => response.json())
    .then((response) => {
      setProductData(response.result);
      setLoading(false);
    })
   
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav)
  },[isScrollOver])
  
  // 가격필터 구현예정 
  const filterPrice = (e) => {
    console.log('>>>>>>>>>>>>>',e);
    console.log(e.target.value);

    setLoading(true);
    fetch(
      `http://192.168.0.12:8000/store?min_price=50000&max_price=100000` ,
    )
    .then((response) => response.json())
    .then((result) => {
      setProductData(result.result)
      setLoading(false);
      }
    )
    .catch((error) => console.log('error', error));
    setIsChecked(!isChecked);
    goToTop();
  }

  const openModal = (e) => {
    setIsModal(true);
  }

  const closeModal = (e) => {
    setIsModal(false);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const goToTop = () => window.scrollTo({top:0, behavior:'smooth'});

  const handleSearch = (e) => {
    setLoading(true);
    if(e.keyCode === 13) {
      setLoading(true);
      fetch(
        `http://192.168.0.12:8000/store?search=${search}`,
    )
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.result)
        setLoading(false)}
      )
      .catch((error) => console.log('error', error));

      closeModal();
    }
  }

  const handleCheckbox = (e) => {
    setLoading(true);
    setShoesBrand(e.target.name);
    fetch(
      `http://192.168.0.12:8000/store?brand=${e.target.name}` ,
    )
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.result)
        setLoading(false);
        }
      )
      .catch((error) => console.log('error', error));
    setIsChecked(!isChecked);
    goToTop();

  }

  const paginate = (e) => {
    setLoading(true);
    fetch(
      `http://192.168.0.12:8000/store?page=${e.target.innerText}`,
    )
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.result)
        setLoading(false)
        }
      )
      .catch((error) => console.log('error', error));

      goToTop();

  }

  const filterType = (e) => {

    setLoading(true);
    
    let api = '';

    if(e.target.innerText === '전체') {
      api = `http://192.168.0.12:8000/store`
    } else {
      if(shoesbrand) {
        api = `http://192.168.0.12:8000/store?brand=${shoesbrand}&type=${e.target.innerText}`
      } else {
        api = `http://192.168.0.12:8000/store?type=${e.target.innerText}`
      }
    }

    // 절대지우지마!
    // const api = e.target.innerText === '전체' ? `http://192.168.0.12:8000/store` : `http://192.168.0.12:8000/store?brand=${shoesbrand}&type=${e.target.innerText}`;
    
    fetch(
      api,
    )
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.result)
        setLoading(false)
      }
      )
      .catch((error) => console.log('error', error));
  }

  const filterFree = (e) => {
    setLoading(true);
    const api = e.target.innerText === '초기화' &&  `http://192.168.0.12:8000/store`
    fetch(
      api,
    )
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.result)
        setLoading(false)
        setGoPriceFilter(false)
      }
      )
      .catch((error) => console.log('error', error));

      goToTop();
  }

  return (
    <>
      {isScrollOver ? <NavScroll
        openModal={openModal}
        closeModal={closeModal}
        isModal={isModal}
        isScrolled={isScrolled}
      /> : <Nav 
        openModal={openModal}
        closeModal={closeModal}
        isModal={isModal}
      />}
      <MainWrapper>
        <CategoryOption>
          <CategoryOptionList>
            <h1>남성신발</h1>
            {menus.category.map((item) => {
              return (
              <button>{item}</button>
              )
            })}
          </CategoryOptionList>
            <OptionFilter>
              <Filter>필터</Filter>
              <Refresh onClick={filterFree} >초기화</Refresh>
            </OptionFilter>
          <div>
            <ProductInfo>
              <div>상품정보</div>
              {menus.shipping.map((item, idx) => {
                return (
              <>
                <CheckBoxWrapper>
                <input
                type='checkbox'
                defaultChecked={false}
                />
                <PriceLabel
                  for={`cb${idx+1}`}
                >
                  {item}
                </PriceLabel>
                </CheckBoxWrapper>
              </>
                )
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
                onClick={goPriceFilter ? filterPrice : ''}
                // onClick={filterPrice}
                />
                <PriceLabel
                  for={`cb${idx+1}`}
                >
                  {item}
                </PriceLabel>
              </PriceWidth>
                )
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
              })}
            </BrandListWrapper>
          </div>
        </CategoryOption>
        <CategoryList>
          <ListFilterWrapper>
            <ListFilter>
              {menus.type.map((item) => {
                return (
                  <FilterItem onClick={filterType}>
                    {item}
                  </FilterItem>
                )
              })}
            </ListFilter>
            <ListFilterButton>
              {menus.filter.map((item, idx) => {
                return (
                  <option value={'$(idx)'}>{item}</option>    
                )
              })}
            </ListFilterButton>
          </ListFilterWrapper>
            <ProductCard product={productData}/>
          <PageChangeWrapper>
            <PageChanges paginate={paginate}/>
          </PageChangeWrapper>
        </CategoryList>
      </MainWrapper>
      <Footer />
      {isModal && 
        <SearchModal 
          isModal={isModal}
          openModal={openModal}
          closeModal={closeModal}
          handleSearch={handleSearch}
          handleChange={handleChange}
        />
      }
      { loading && <Loading />}
    </>
  )
}

const MainWrapper = styled.div`
  display: flex;

`

const CategoryOption = styled.div`
  width: 250px;
  margin-left: 50px;


`

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
    color: #5D5D5D;

    &:hover {
    font-weight: bold;
    cursor: pointer;
    }
  }

`

const OptionFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;

`

const Filter = styled.div`
  font-size: 18px;

`

const Refresh = styled.div`
  font-size: 14px;
  text-decoration: underline;
  color: #bbb;

  &:hover {
    cursor: pointer;
    }

`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;

`

const CheckBoxWrapper = styled.div`
  margin: 10px 0;
  font-weight: normal;

  &:hover {
    cursor: pointer;

  }

`

const PriceLabel = styled.label`
  margin-left: 5px;
  font-size: 13px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`

const PriceList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 30px 0 20px 0;
  font-weight: bold;
  border-bottom: 1px solid #ccc;

`

const PriceWidth = styled.div`
  margin: 8px 0;
  font-size: 12px;
  font-weight: normal;

`

const BrandListWrapper = styled.div`
  margin: 30px 0 60px 0;
  font-size: 16px;
  font-weight: bold;

`

const BrandsHeading = styled.div`
  margin: 40px 0 20px 0;

`

const Brand = styled.input`
  margin: 10px 0;

`

const BrandLabel = styled.label`
  margin-left: 5px;
  font-size: 13px;
  font-weight: normal;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`

const CategoryList = styled.div`
  width: 100%;
  margin-right: 100px;
  box-sizing: border-box;

`

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

`

const ListFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FilterAll = styled.div`
  padding: 0 30px;
  border-right: 1px solid #bbb;
  font-weight: bold;
  color: #000;

`

const FilterItem = styled(FilterAll)`
  border-right: 1px solid #bbb;
  font-weight: normal;

  &:hover {
    cursor: pointer;  
  }

`

const ListFilterButton = styled.select`
  border: none;
  text-align: center;
  height: 100%;
  padding: 0 40px;
  border-left: 1px solid #ddd;
  outline: none;

`

const PageChangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  
`

const PageChanges = styled(Pagination)`
  display:flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 48px;
  margin-right: 20px;
  width: 300px;

  svg {
    font-size: 28px;
  }

`