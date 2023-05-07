import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import UserList from "./UserList";
import { Routes, Route } from 'react-router-dom';
import ProductList from "./Products/ProductList";
import NotFound from "./NotFound";
import Login from "./Login";
import CreateProduct from "./Products/CreateProduct";
import ProductDetail from "./Products/ProductDetail";


function AppRoutes() {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products/detail/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}

export default AppRoutes;