import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

function ProductDetail() {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    
    useEffect(() => {

        axios().get(`/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(console.log);
    }, []);



return (
    <div>
<h1>Product Details</h1>
    <ProductItem product={product}/>
    </div>
)

}

export default ProductDetail;