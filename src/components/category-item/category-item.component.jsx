import './category-item.styles.scss';

const CategoryItem = ({ category, getProductList }) => {
  const { title } = category;
  return (
    <div className='category-container'>
      <div className='category-body-container' onClick={() => getProductList(title)}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;