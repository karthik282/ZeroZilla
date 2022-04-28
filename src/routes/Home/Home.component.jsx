import  { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBox from '../../components/search-box/search-box.component';
import CardList from '../../components/card-list/card-list.component'
import Directory from './../../components/directory/directory.component';

const Home = () => {

  const navigate = useNavigate();
  const [searchField, setSearchField] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState(products);

  const [categoryItemArray, setCategoryItemArray ] = useState([]);

  const getProductList = (title) => {
    fetch('https://fakestoreapi.com/products/category/'+title)
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((categories) => {
        const category = categories.map((category) => {
            const categoryListSetting = {
                title: category
            }
            return categoryListSetting
        })
        setCategoryItemArray(category)
      });
  }, []);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return product.title.toLocaleLowerCase().includes(searchField);
    });

    setFilterProducts(newFilteredProducts);
  }, [products, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const getProductDetails = (id) => {
    navigate('/product-details',{state: {id: id}});
  }

    return (
        <Fragment>
            <SearchBox
                className='products-search-box'
                onChangeHandler={onSearchChange}
                placeholder='search Products'
            />
            <Directory categories={categoryItemArray} getProductList={getProductList}/>
            <CardList products={filteredProducts}  getProductDetails={getProductDetails}  />
        </Fragment>
    )
}

export default Home;