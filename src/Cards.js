import React from 'react';

const Card = ({ image, heading, subheading, rating, logo, noOfClasses, price, catagory, shortDesc, groupIcon }) => {

  return (
    <div className="card"  >
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <p className='main-heading'>{heading}</p>
        <p className='sub-heading'>{subheading}</p>
        <p className="rating">Rating: {rating}</p>
        <img src={logo} alt="Logo" className="card-logo" />
        <p className='no-of-classes'>{noOfClasses}</p>
        <p className='price'>{price}</p>
        <p className='catagory'>{catagory}</p>
        <p className='short-desc'>{shortDesc}</p>
        <p className='group-icon'>{groupIcon}</p>
        
      </div>
      {/* </div> */}
    </div>
  );
};

export default Card;