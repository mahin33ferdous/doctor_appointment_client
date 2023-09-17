import React from 'react';

const Review = ({review}) => {

    const{name,pic,feedback}=review
    return (
        <div className=' '>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{feedback}</p>
    <div className="flex items-center">
    <div className="avatar mr-6">
  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={pic}/>
  </div>
</div>
<div>
     <h4>{name}</h4>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;