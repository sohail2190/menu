
import PropTypes from 'prop-types'; // Import PropTypes

const Categories = ({ categories, filterItem }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          type='button'
          className='filter-btn'
          key={index}
          onClick={() => filterItem(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired, // Validate 'categories' prop as an array
  filterItem: PropTypes.func.isRequired // Validate 'filterItem' prop as a function
};

export default Categories;
