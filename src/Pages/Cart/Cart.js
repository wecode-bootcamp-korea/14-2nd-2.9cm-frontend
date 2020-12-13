// import React from "react";

// export default function Cart() {
//   return <div></div>;
// }

// const CartWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
// `;

// const CartProgressWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 15px;
//   font-weight: bold;
//   margin: 30px 0;https://unsplash.com/photos/mWYhrOiAgmA

// const CartContentsWrapper = styled(CartWrapper)`
//   margin: 50px 0;
// `;

// const CartInfo = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 80px;
//   font-size: 18px;
//   font-weight: bold;
//   border-top: 3px solid black;
//   border-bottom: 1px solid #ccc;
//   margin: 10px 0;
// `;

// const CartInfoCheckBox = styled.input`
//   width: 20px;
//   height: 20px;
//   margin: 0 20px;
// `;

// const CartInfoLabel = styled.div``;

// const ProductInfo = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 600px;
// `;

// const ProductQuantity = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 200px;
// `;

// const ProductPrice = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 200px;
// `;

// const ShippingFee = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 200px;
// `;

// const CartContents = styled.div`
//   display: flex;
//   align-items: center;
//   height: 180px;
//   width: 100%;
//   border-bottom: 1px solid #ddd;
// `;

// const CartContentsCheckBox = styled.input`
//   width: 20px;
//   height: 20px;
//   margin: 0 20px;
// `;

// const CartContentsLabel = styled.div``;

// const ProductDetailWrapper = styled.div`
//   display: flex;
//   border-right: 1px solid #ddd;
//   width: 600px;
//   height: 180px;
// `;

// const ProductInfoImage = styled.img`
//   width: 110px;
//   height: 110px;
//   margin: auto 20px;
// `;

// const ProductDetailContetns = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 35px;
//   line-height: 30px;
// `;

// const ProductInfoDetail = styled.div`
//   display: flex;
//   margin-right: 20px;
// `;

// const CartDeleteButton = styled.div`
//   svg {
//     margin-top: 25px;
//     font-size: 40px;
//     color: #ddd;
//   }
// `;

// const ProductInfoBrand = styled.div`
//   font-size: 12px;
// `;

// const ProductInfoName = styled.div`
//   font-size: 16px;
//   font-weight: bold;
// `;

// const ProductInfoPrice = styled.div`
//   font-size: 13px;
//   color: #303033;
// `;

// const ProductInfoOption = styled.div`
//   font-size: 12px;
//   color: #303033;
// `;

// const ProductQuantityCheckWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   font-size: 30px;
//   height: 100%;
//   border-right: 1px solid #ddd;

//   svg {
//     font-size: 30px;
//     color: #ddd;
//   }
// `;

// const ProductQuantityCheck = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid #ddd;
//   width: 100px;
//   color: #ddd;
// `;

// const InputQuantity = styled.input`
//   text-align: center;
//   width: 30px;
//   height: 40px;
//   border-left: 1px solid #ddd;
//   border-right: 1px solid #ddd;
//   border-top: none;
//   border-bottom: none;
//   margin: 0 10px;
// `;

// const ProductPriceDetail = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   border-right: 1px solid #ddd;
//   height: 100%;
// `;
// const PriceTag = styled.div`
//   font-size: 22px;
//   font-weight: bold;
// `;

// const BuyButton = styled.div`
//   font-size: 14px;
//   background-color: #000;
//   text-align: center;
//   padding: 10px;
//   margin: 10px 0;
//   border-radius: 3px;
//   color: #fff;
// `;

// const SoldOut = styled.div`
//   display: none;
// `;

// const ShippingDetail = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 200px;
//   font-size: 16px;
//   font-weight: bold;
// `;

// const ChooseDeleteWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 1260px;
//   padding: 0 90px;
//   font-size: 15px;
//   margin-bottom: 60px;
// `;

// const SelectDelete = styled.button`
//   width: 130px;
//   height: 40px;
//   border: 1px solid #bbb;
// `;

// const SoldOutDelete = styled(SelectDelete)`
//   margin-left: 10px;
// `;

// const ConfirmPriceWrapper = styled.div`
//   border-top: 3px solid #000;
//   width: 1260px;
//   height: 250px;
// `;

// const PriceHeading = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 30px 0 30px 60px;
//   font-size: 18px;
//   border-bottom: 1px solid #ccc;

//   div {
//     margin: 0 100px;
//   }
// `;

// const CalculatePrice = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 1260px;
//   padding: 60px 20px 10px 60px;
//   font-size: 32px;
//   font-weight: bold;
//   border-bottom: 1px solid #000;

//   div {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     span {
//       margin: 20px 0;
//       font-size: 15px;
//     }
//   }

//   div {
//     svg {
//       transform: rotate(90deg);
//     }
//   }
// `;

// const ChooseShopping = styled.div`
//   margin-bottom: 100px;
// `;

// const ContinueShoppingButton = styled.button`
//   width: 400px;
//   height: 72px;
//   margin-top: 80px;
//   background-color: #fff;
//   font-weight: bold;
//   font-size: 26px;
// `;

// const CheckoutButton = styled(ContinueShoppingButton)`
//   margin-left: 10px;
//   color: #fff;
//   background-color: #000;
// `;
