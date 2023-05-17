/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShopFilter from './ShopFilter';
import ShopProducts from '../products/ShopProducts';
import Search from './Search';
import Empty from './Empty';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShopMainPart = () => {

    const [products, setProducts] = useState([]); //default is empty, no Products
    const [category, setCategory] = useState([]); //default is empty, no Category
    const [subcategory, setSubcategory] = useState([]);    //default is empty, no Subcategory
    const [tripletecategory, setTripletecategory] = useState([]);    //default is empty, no Tripletecategory
    const [selectedPrice, setSelectedPrice] = useState([0, 9999000]); //range from 0 - 9999000

    const [list, setList] = useState(products) //get all products when fetch products

    const [inputSearch, setInputSearch] = useState(''); //for search is empty default
    const [resultsFound, setResultsFound] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedSubcategory, setselectedSubcategory] = useState();
    const [selectedTripletecategory, setselectedTripletecategory] = useState();

    //value when i click on button -> catItem
    const filterResult = (catItem) => {
        setSelectedCategory(catItem);
    }

    const filterResult2 = (catItem) => {
        setselectedSubcategory(catItem);
    }

    const filterResult3 = (catItem) => {
        setselectedTripletecategory(catItem);
    }

    // change value for price
    const handleChangePrice = (value) => {
        setSelectedPrice(value);
    }

    useEffect(() => {
        //FIltering Products
        const applyFilters = () => {
            let updateProductList = products;

            //Category Filters
            if (selectedCategory) {
                updateProductList = updateProductList.filter((item) => item.categoryOptions === selectedCategory);
            }

            // SubCategory Filters
            if (selectedSubcategory) {
                updateProductList = updateProductList.filter((item) => item.subcategoryOptions === selectedSubcategory);
            }

            // Tripletecategory Filters
            if (selectedTripletecategory) {
                updateProductList = updateProductList.filter((item) => item.tripletecategoryOptions === selectedTripletecategory);
            }

            // Price Filter
            const minPrice = selectedPrice[0]; //0 is index
            const maxPrice = selectedPrice[1]; //1 is index

            updateProductList = updateProductList.filter((item) => item.price >= minPrice && item.price <= maxPrice);

            // Search Filter
            if (inputSearch) {
                updateProductList = updateProductList.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1);
            }

            setList(updateProductList);

            !updateProductList.length ? setResultsFound(false) : setResultsFound(true);
        }
        applyFilters();
    }, [inputSearch, products, selectedCategory, selectedSubcategory, selectedTripletecategory, selectedPrice]);

    useEffect(() => {
        //fetch all products from db
        const fetchData = async () => {
            const resultProducts = await axios.get('/api/products/all');

            const resultProductsData = resultProducts.data;

            //show first latest products
            const sortResultProductsData = resultProductsData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

            console.log(sortResultProductsData);
            setProducts(sortResultProductsData);

            //fetch all category
            const resultCategory = await axios.get('/api/category/all');
            console.log(resultCategory.data);
            setCategory(resultCategory.data);

            //fetch all subcategory
            const resultSubcategory = await axios.get('/api/subcategory/all');
            console.log(resultSubcategory.data);
            setSubcategory(resultSubcategory.data);

            //fetch all Tripletecategory
            const resultTripletecategory = await axios.get('/api/tripletecategory/all');
            console.log(resultTripletecategory.data);
            setTripletecategory(resultTripletecategory.data);
        }

        fetchData();

    }, []);

    return (
        <>
            <div className="b-example-divider" style={{ marginTop: '0%' }}></div>
            {/*== Start Page Header ==*/}
            <div id="page-header-wrapper">
                <div className="container">
                    <div className="row">
                        {/* Page Title Area Start */}
                        <div className="col-6">
                            <div className="page-title-wrap">
                                <h1>
                                    <FontAwesomeIcon icon={faBagShopping} />  PRODUCTOS.
                                </h1>
                            </div>
                        </div>
                        {/* Page Title Area End */}
                        {/* Page Breadcrumb Start */}
                        <div className="col-6 m-auto">
                            <nav className="page-breadcrumb-wrap">
                                <ul className="nav justify-content-end">
                                    <li>
                                        <a href="/" rel="noopener noreferrer">
                                            INICIO.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/shop" className="current" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faBagShopping} />  PRODUCTOS.
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Page Breadcrumb End */}
                    </div>
                </div>
            </div>
            {/*== End Page Header ==*/}
            <div id="cart-page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='f-group'>
                                <span className="f-groupTitle">B&#250;scar. :*</span>
                                <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)} />
                            </div>
                            <div className='f-group'>
                                <ShopFilter filterResult={filterResult} filterResult2={filterResult2} filterResult3={filterResult3} category={category} subcategory={subcategory} tripletecategory={tripletecategory} selectedPrice={selectedPrice} changePrice={handleChangePrice} />
                            </div>
                            {/* Cart Table Area */}
                        </div>
                    </div>
                </div>
            </div>
            <div id="cart-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <div className='card card-ecommerce'>
                                {resultsFound ? (<ShopProducts list={list} />) : (<Empty />)}
                            </div>
                            {/* Cart Table Area */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopMainPart;