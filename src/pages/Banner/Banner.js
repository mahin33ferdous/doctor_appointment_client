import React from 'react';
import b from '../../img/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={b} className="w-1/2 h-96 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn  bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;