import CategoryItem from './../category-item/category-item.component';
import './directory.styles.scss'

const Directory = ({ categories, getProductList}) => {
    return(
        <div className='directory-container'>
        {categories.map((category) => (
            <CategoryItem key={category.id} getProductList={getProductList}  category={category} />
        ))}
     </div>
    )
}

export default Directory