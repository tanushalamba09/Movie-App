import React from 'react';
const AddFavourite = () => {
    return (
        <>
          <span className>Add to Favourites</span>
          <svg
          width = '1em'
          height= '1em'
          viewBox = '0 0 16 16'
          class='bi bi-heart-fill'
          fill='currentColor'
          xmlns='https://www.w3.org/2000/svg'>
            <path
               fill-rule='evenodd'
            />
          </svg>
        </>
    );
};
export default AddFavourite;
