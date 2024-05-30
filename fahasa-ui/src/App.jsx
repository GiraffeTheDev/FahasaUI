import { Route, Routes } from "react-router-dom";
import LayoutAccount from "./layout/LayoutAccount";
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutMain from "./layout/LayoutMain";
import Dashboard from "./modules/admin/Dashboard";
import ManageAuthor from "./modules/admin/author/ManageAuthor";
import ManageBook from "./modules/admin/book/ManageBook";
import CategoryAddNew from "./modules/admin/category/CategoryAddNew";
import ManageCategory from "./modules/admin/category/ManageCategory";
import ManageComment from "./modules/admin/comment/ManageComment";
import GenresAddNew from "./modules/admin/genres/GenresAddNew";
import GenresUpdate from "./modules/admin/genres/GenresUpdate";
import ManageGenres from "./modules/admin/genres/ManageGenres";
import ManageOrder from "./modules/admin/order/ManageOrder";
import ManageSupplier from "./modules/admin/supplier/ManageSupplier";
import ManageUser from "./modules/admin/user/ManageUser";
import ManageVoucher from "./modules/admin/voucher/ManageVoucher";
import AccountAddress from "./modules/client/AccountAddress";
import AccountInfo from "./modules/client/AccountInfo";
import AccountOrder from "./modules/client/AccountOrder";
import DashBoardClient from "./modules/client/DashBoardClient";
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
          <Route element={<LayoutAccount></LayoutAccount>}>
            <Route
              path="/account-client"
              element={<DashBoardClient></DashBoardClient>}
            ></Route>
            <Route
              path="/account-information"
              element={<AccountInfo></AccountInfo>}
            ></Route>
            <Route
              path="/account-address"
              element={<AccountAddress></AccountAddress>}
            ></Route>
            <Route
              path="/account-order"
              element={<AccountOrder></AccountOrder>}
            ></Route>
          </Route>
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
        <Route element={<LayoutAdmin></LayoutAdmin>}>
          <Route
            element={<ManageBook></ManageBook>}
            path="/manage/book"
          ></Route>
          <Route
            element={<ManageSupplier></ManageSupplier>}
            path="/manage/supplier"
          ></Route>
          <Route
            element={<ManageVoucher></ManageVoucher>}
            path="/manage/voucher"
          ></Route>
          <Route
            element={<ManageUser></ManageUser>}
            path="/manage/users"
          ></Route>
          <Route
            element={<ManageGenres></ManageGenres>}
            path="/manage/genres"
          ></Route>
          <Route
            element={<GenresUpdate></GenresUpdate>}
            path="/manage/update-genres"
          ></Route>
          <Route
            element={<ManageOrder></ManageOrder>}
            path="/manage/order"
          ></Route>
          <Route
            element={<ManageAuthor></ManageAuthor>}
            path="/manage/author"
          ></Route>
          <Route
            element={<ManageCategory></ManageCategory>}
            path="/manage/category"
          ></Route>
          <Route
            element={<CategoryAddNew></CategoryAddNew>}
            path="/manage/add-category"
          ></Route>
          <Route
            element={<ManageComment></ManageComment>}
            path="/manage/comment"
          ></Route>
          <Route
            element={<GenresAddNew></GenresAddNew>}
            path="/manage/add-genres"
          ></Route>

          <Route element={<Dashboard></Dashboard>} path="/dashboard"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
