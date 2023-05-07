import { useState } from "react";
import axios from '../utils/axios';
import { useNavigate } from "react-router-dom";

function CreateProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({brand: "", model: '', price: '' , inStock: false, discount: '', image: ""})
const [success, setSuccess] = useState(false);
    const onChange = (e) => {

        const newState = {...product, [e.target.name]: e.target.value};
        setProduct(newState);
    }

    const onFileChange = (e) => {

        const newState = {...product, image: e.target.files[0]}

        setProduct(newState);
    }

const onSave = async () => {

try {

    const productToSave = {...product};
    productToSave.inStock = !!productToSave.inStock;

const frm = new FormData();
frm.append('brand', productToSave.brand);
frm.append('model', productToSave.model);
frm.append('price', productToSave.price);
frm.append('inStock', productToSave.inStock);
frm.append('discount', productToSave.discount);
frm.append('image', productToSave.image);


 await   axios().post('/api/products', frm );
// navigate('/products');
setSuccess(true);
setProduct({brand: "", model: '', price: '' , inStock: false, discount: '',image:''});
} catch (err) { console.log(err);
    
}

}

return (
    <div className="w-1/2 m-8">

        {success?<div className="bg-green-700 text-white w-1/2 text-center p-2">Product addedd successfully</div>:null}
        <h1 className="m-4"><b>Add Product</b></h1>
<input name="brand" value={product.brand} onChange={onChange} className="shadow appearance-none m-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="brand" />
<input name="model" value={product.model}  onChange={onChange} className="shadow appearance-none m-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="model" />
<input name="price" value={product.price}  onChange={onChange} className="shadow appearance-none m-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="price" />
<input name="discount" value={product.discount}  onChange={onChange} className="shadow appearance-none  m-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="discount" />

<label className="block ml-2 text-gray-700 text-sm font-bold mb-2">
<span>In Stock</span>
<input name="inStock"  onChange={onChange} className="ml-2" type="checkbox" />
      </label>

      <input onChange={onFileChange} type="file" />
<button onClick={onSave} value={product.inStock} className="bg-green-800 text-white ml-4 p-4 rounded-full ">Save</button>


    </div>


)
};

export default CreateProduct;