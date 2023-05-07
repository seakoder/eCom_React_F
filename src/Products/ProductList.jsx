import axios from '../utils/axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from './ProductItem';
import { Link, useNavigate } from 'react-router-dom';
import ShouldRender from '../ShouldRender';


function ProductList() {
    // const navigate = useNavigate();
    // const [hasError, setError] = useState(false);

    const [response, setResponse] = useState({
        metadata: {},
        data: []
    });

    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(10);
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [dir, setDir] = useState('');
    const [unauthorized, setUnauthorized] = useState(false)


    useEffect(() => {
       
       
        axios().get(`/api/products/page/${page}/limit/${limit}?search=${search}&sort=${sort}&direction=${dir}`)
            .then(res => setResponse(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate('/login');
                } else {

                }

            });

    }, [page, search, sort, dir]);

    const onFirst = () => setPage(1);
    const onPrev = () => {
        if (page !== 1) {
            setPage(page - 1);
        }
    }
    const onNext = () => {
        if (page < response.metadata.pages) {
            setPage(page + 1);
        };

    }
    const onLast = () => {
        setPage(response.metadata.pages);
    }
    const onSearch = (e) => {
        e.preventDefault();
        setSearch(searchText);
        setPage(1);

    }

    const onSearchText = (e) => {
        setSearchText(e.target.value);

    };

    const onSortChange = (e) => {
const value = e.target.value;
if(value){
    const tokens= value.split(':')
    setSort(tokens[0]);
    setDir(tokens[1]);
} else {
    setSort('');
    setDir('');
}

    };

    const onProductDelete = (status) => {
        if (status ===403) {
            setUnauthorized(true);
        } else {
            axios().get(`/api/products/page/${page}/limit/${limit}?search=${search}&sort=${sort}&direction=${dir}`)
            .then(res => setResponse(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate('/login');
                }
            });
        };

        }
    

    return (
        <div>
            {unauthorized? <h1 className="p-2 bg-red-800 text-white m-2">You dont have permission</h1>:null}


            <button onClick={onFirst} className='px-2 py-1 mx-3 border border-green-400  hover:bg-green-800 hover:text-white'>First</button>
            <button onClick={onPrev} className='px-2 py-1 m-2 border border-green-400  hover:bg-green-800 hover:text-white'>Prev</button>
            <span className='border border-gray-200 p-1 text-gray-500'>Page {page} of {response.metadata.pages} (Total Items {response.metadata.count}) </span>
            <button onClick={onNext} className='px-2 py-1 m-2 border border-green-400  hover:bg-green-800 hover:text-white'>Next</button>
            <button onClick={onLast} className='px-2 py-1 m-2 border border-green-400  hover:bg-green-800 hover:text-white'>Last</button>

<select className='bg-purple-600 text-white p-2 ' onChange={onSortChange}>
<option value="">Sort By</option>
<option value="price:asc">Price Low to High</option>
<option value="price:desc">Price High to Low</option>
<option value="brand:asc">name asc</option>
<option value="brand:desc">name dsc</option>
<option value="discount:asc">discount low to high</option>
<option value="discount:desc">discount high to low</option>

</select>

<Link to="/products/create" className='ml-4 bg-purple-600 p-2 text-white'>Create Product</Link>
           <form onSubmit={onSearch} className='w-1/2 m-auto mt-4'>
                <label HTMLfor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={onSearchText}type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>


            {response.data.map(product => 
            // <Link to={`/products/detail/${product._id}`}>
                <ProductItem product={product} onDelete={onProductDelete} />,
                {/* </Link> */}
        )}
        </div>

    )
}

export default ProductList;