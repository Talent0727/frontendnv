import React from 'react';

const Category = ({ category, filterResult }) => {
  return (
    <div className='f-filterDiv'>
      <div className="f-buttons">
        <button className='f-button' onClick={() => filterResult()}>Ver Todos.</button>
        {
          category.map((category) => (
            <button
              className='f-button'
              onClick={() => filterResult(category.titlecategory)}
              key={category._id}>
              {category.titlecategory}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Category;