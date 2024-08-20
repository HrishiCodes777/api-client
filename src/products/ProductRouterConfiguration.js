import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import Home from "./ProductHome";
import ProductDetails from "./ProductDetails";
import NavigationComponent from "./NavigationComponent";
import AddProductComponent from "./AddProduct";
import SearchProductByCategory from "./SearchProductByCategory";
import { AboutUs, History, OurServices } from "../NestedRoutePages/AboutUs";

const RouterConfiguration = () => {
  return (
    <BrowserRouter>
        <NavigationComponent/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="products/aboutus" element={<AboutUs/>}>
              <Route path="history" element={<History/>}/>
              <Route path="ourservices" element={<OurServices/>}/>
            </Route>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/products/add" element={<AddProductComponent/>}/>
            <Route path="/products/search" element={<SearchProductByCategory/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterConfiguration;