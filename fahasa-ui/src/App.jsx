import { Route, Routes } from "react-router-dom";
import LayoutMain from "./layout/LayoutMain";
import BookDetailPage from "./pages/BookDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import FlashSalePage from "./pages/FlashSalePage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutMain></LayoutMain>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/forget-password"
            element={<ForgetPasswordPage></ForgetPasswordPage>}
          ></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route
            path="/flash-sale"
            element={<FlashSalePage></FlashSalePage>}
          ></Route>
          <Route
            path="/detail-book"
            element={<BookDetailPage></BookDetailPage>}
          ></Route>
          <Route
            path="/order-success"
            element={<OrderSuccessPage></OrderSuccessPage>}
          ></Route>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
