import React from 'react';

const Subcategory = ({ subcategory, filterResult2 }) => {
    return (
        <div className='f-filterDiv'>
            <div className="f-buttons">
                <button className='f-button' onClick={() => filterResult2()}>Ver Todos.</button>
                {
                    subcategory.map((subcategory) => (
                        <button
                            className='f-button'
                            onClick={() => filterResult2(subcategory.titlesubcategory)}
                            key={subcategory._id}>
                            {subcategory.titlesubcategory}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Subcategory;