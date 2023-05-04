import React from 'react';

const Tripletecategory = ({ tripletecategory, changeTripleteChecked }) => {
  return (
    <div className='f-filterDiv'>
      <div className="f-checkboxes">
        {
          tripletecategory.map((tri) => (
            <div className="f-checkbox" key={tri._id}>
              <label htmlFor={tri.titletripletecategory} className='f-filterLabel'>{tri.titletripletecategory}</label>
              <input type="checkbox" className='f-check' checked={tri.checked} onChange={() => changeTripleteChecked(tri._id)} name={tri.titletripletecategory} id={tri.titletripletecategory} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Tripletecategory;