import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import { Customer } from "./Pages/Customer/Customer";
import { Category } from "./Pages/Categories/Category";
import { Sales } from "./Pages/Sales/Sales";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { SellerMyPage } from "./Pages/Seller/SellerMyPage";
import Review from "./Pages/Review/Review";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Category/:itemName" element={<Category />} />
            <Route path="/Customer" element={<Customer />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/buy" element={<Customer />} />
            <Route path="/seller-my-page" element={<SellerMyPage />} />
            <Route path="/review-write" element={<Review/>} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <Footer />
    </>
  );
};

export default App;
