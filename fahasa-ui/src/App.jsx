import { Route, Routes } from "react-router-dom";
import LayoutAccount from "./layout/LayoutAccount";
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutMain from "./layout/LayoutMain";
import Dashboard from "./modules/admin/Dashboard";
import AuthorAddNew from "./modules/admin/author/AuthorAddNew";
import ManageAuthor from "./modules/admin/author/ManageAuthor";
import BookAddNew from "./modules/admin/book/BookAddNew";
import BookUpdate from "./modules/admin/book/BookUpdate";
import ManageBook from "./modules/admin/book/ManageBook";
import CategoryAddNew from "./modules/admin/category/CategoryAddNew";
import CategoryUpdate from "./modules/admin/category/CategoryUpdate";
import ManageCategory from "./modules/admin/category/ManageCategory";
import ManageComment from "./modules/admin/comment/ManageComment";
import ViewBookComment from "./modules/admin/comment/ViewBookComment";
import GenresAddNew from "./modules/admin/genres/GenresAddNew";
import GenresUpdate from "./modules/admin/genres/GenresUpdate";
import ManageGenres from "./modules/admin/genres/ManageGenres";
import ManageNews from "./modules/admin/news/ManageNews";
import NewsAddNew from "./modules/admin/news/NewsAddNew";
import NewsUpdate from "./modules/admin/news/NewsUpdate";
import ManageOrder from "./modules/admin/order/ManageOrder";
import OrderDetail from "./modules/admin/order/OrderDetail";
import ManagePublisher from "./modules/admin/publisher/ManagePublisher";
import PublisherAddNew from "./modules/admin/publisher/PublisherAddNew";
import UpdatePublisher from "./modules/admin/publisher/UpdatePublisher";
import StorageBook from "./modules/admin/storage/StorageBook";
import ManageSupplier from "./modules/admin/supplier/ManageSupplier";
import SupplierAddNew from "./modules/admin/supplier/SupplierAddNew";
import SupplierUpdate from "./modules/admin/supplier/SupplierUpdate";
import ManageUser from "./modules/admin/user/ManageUser";
import UpdateUser from "./modules/admin/user/UpdateUser";
import ManageVoucher from "./modules/admin/voucher/ManageVoucher";
import VoucherAddNew from "./modules/admin/voucher/VoucherAddNew";
import VoucherUpdate from "./modules/admin/voucher/VoucherUpdate";
import AccountAddress from "./modules/client/AccountAddress";
import AccountInfo from "./modules/client/AccountInfo";
import AccountOrder from "./modules/client/AccountOrder";
import AddAccountAddress from "./modules/client/AddAccountAddress";
import DashBoardClient from "./modules/client/DashBoardClient";
import Notification from "./modules/client/Notification";
import BookDetailPage from "./pages/BookDetailPage";
import BookPageEN from "./pages/BookPageEN";
import BookPageVI from "./pages/BookPageVI";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmPaypal from "./pages/ConfirmPaypal";
import FlashSalePage from "./pages/FlashSalePage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import PayPalSuccess from "./pages/PayPalSuccess";
import PaypalFailed from "./pages/PaypalFailed";
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
          <Route
            path="/bookpage-vi"
            element={<BookPageVI></BookPageVI>}
          ></Route>
          <Route
            path="/bookpage-en"
            element={<BookPageEN></BookPageEN>}
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
              path="/account-notification"
              element={<Notification></Notification>}
            ></Route>
            <Route
              path="/new/account-address"
              element={<AddAccountAddress></AddAccountAddress>}
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
          <Route
            element={<PayPalSuccess></PayPalSuccess>}
            path="/paypal-success"
          ></Route>
          <Route
            element={<PaypalFailed></PaypalFailed>}
            path="/paypal-fail"
          ></Route>
          <Route
            element={<ConfirmPaypal></ConfirmPaypal>}
            path="/paypal-confirm"
          ></Route>
        </Route>
        <Route element={<LayoutAdmin></LayoutAdmin>}>
          <Route
            element={<ManageBook></ManageBook>}
            path="/manage/book"
          ></Route>
          <Route
            element={<BookAddNew></BookAddNew>}
            path="/manage/add-book"
          ></Route>
          <Route
            path="/manage/add-news"
            element={<NewsAddNew></NewsAddNew>}
          ></Route>
          <Route
            path="/manage/news"
            element={<ManageNews></ManageNews>}
          ></Route>
          <Route
            path="/manage/update-news"
            element={<NewsUpdate></NewsUpdate>}
          ></Route>
          <Route
            element={<BookUpdate></BookUpdate>}
            path="/manage/update-book"
          ></Route>
          <Route
            element={<ManageSupplier></ManageSupplier>}
            path="/manage/supplier"
          ></Route>
          <Route
            element={<SupplierAddNew></SupplierAddNew>}
            path="/manage/add-supplier"
          ></Route>
          <Route
            element={<SupplierUpdate></SupplierUpdate>}
            path="/manage/update-supplier"
          ></Route>
          <Route
            element={<ManageVoucher></ManageVoucher>}
            path="/manage/voucher"
          ></Route>
          <Route
            element={<VoucherAddNew></VoucherAddNew>}
            path="/manage/add-voucher"
          ></Route>
          <Route
            element={<VoucherUpdate></VoucherUpdate>}
            path="/manage/update-voucher"
          ></Route>
          <Route
            element={<ManageUser></ManageUser>}
            path="/manage/users"
          ></Route>
          <Route
            element={<UpdateUser></UpdateUser>}
            path="/manage/update-user"
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
            element={<GenresAddNew></GenresAddNew>}
            path="/manage/add-genres"
          ></Route>
          <Route
            element={<AuthorAddNew></AuthorAddNew>}
            path="/manage/add-author"
          ></Route>
          <Route
            element={<ManageOrder></ManageOrder>}
            path="/manage/order"
          ></Route>
          <Route
            element={<OrderDetail></OrderDetail>}
            path="/manage/order-detail"
          ></Route>
          <Route
            element={<ManageAuthor></ManageAuthor>}
            path="/manage/author"
          ></Route>
          <Route
            element={<StorageBook></StorageBook>}
            path="/manage/storage"
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
            element={<CategoryUpdate></CategoryUpdate>}
            path="/manage/update-category"
          ></Route>
          <Route
            element={<ManagePublisher></ManagePublisher>}
            path="/manage/publisher"
          ></Route>
          <Route
            element={<PublisherAddNew></PublisherAddNew>}
            path="/manage/add-publisher"
          ></Route>
          <Route
            element={<UpdatePublisher></UpdatePublisher>}
            path="/manage/update-publisher"
          ></Route>
          <Route
            element={<ManageComment></ManageComment>}
            path="/manage/comment"
          ></Route>
          <Route
            element={<ViewBookComment></ViewBookComment>}
            path="/manage/comment-book"
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
