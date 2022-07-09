import { lazy } from "react";

const Cart = lazy(() => import("./CartPage/CartPage"));
const Checkout = lazy(() => import("./CheckoutPage/CheckoutPage"));
const Confirmation = lazy(() => import("./ConfirmationPage/ConfirmationPage"));
const Index = lazy(() => import("./IndexPage/IndexPage"));
const Payment = lazy(() => import("./PaymentPage/PaymentPage"));
const Product = lazy(() => import("./ProductPage/ProductPage"));
const Success = lazy(() => import("./SuccessPage/SuccessPage"));

export { Cart, Checkout, Confirmation, Index, Payment, Product, Success };
