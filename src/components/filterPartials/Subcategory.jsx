import React from 'react';

const Subcategory = ({ subcategory, changeChecked }) => {
    return (
        <div className='f-filterDiv'>
            <div className="f-checkboxes">
                {
                    subcategory.map((sub) => (
                        <div className="f-checkbox" key={sub._id}>
                            <label htmlFor={sub.titlesubcategory} className='f-filterLabel'>{sub.titlesubcategory}</label>
                            <input type="checkbox" className='f-check' checked={sub.checked} onChange={() => changeChecked(sub._id)} name={sub.titlesubcategory} id={sub.titlesubcategory} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Subcategory;