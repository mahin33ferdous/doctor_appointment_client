import React from 'react';
import Review from './Review';
import quote from '../../../img/quot.png'

import p1 from '../../../img/people1.png'
import p2 from '../../../img/people2.png'
import p3 from '../../../img/people3.png'
const Reviews = () => {
    const reviews=[
        {
            id:1,
            name:" Nick Morgan",
            feedback : "Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.",
            pic: p1
        },
        {
            id:2,
            name:" Antony Rozario",
            feedback : "Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.",
            pic: p2
        },
        {
            id:3,
            name:" Eva jonson",
            feedback : "Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.",
            pic: p3
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between' >
                <div >
                   <h4 className='text-primary text-xl font-bold'> Review</h4>
                   <h2 className='text-4xl'>What our patients says</h2>
                </div>
                <div>
                  <figure>
                  <img src={quote} className="w-24 lg:w-48" />
                  </figure>
                </div>
            </div>
            <div className='grid lg:grid-cols-3'>
            {
                reviews.map(review=><Review
                 key={review.id}
                 review={review}
                ></Review>)
            }
            </div>
        </section>
    );
};

export default Reviews;