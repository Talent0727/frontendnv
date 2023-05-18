import React from 'react';

const Tripletecategory = ({ tripletecategory, filterResult3 }) => {
  return (
    <div className='f-filterDiv'>
      <div className="f-buttons">
        <button className='f-button' onClick={() => filterResult3()}>Ver Todos.</button>
        {
          tripletecategory.map((tripletecategory, index) => (
            <button
              className='f-button'
              onClick={() => filterResult3(tripletecategory.titletripletecategory)}
              key={index}>
              {tripletecategory.titletripletecategory}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Tripletecategory;