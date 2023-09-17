import React from 'react';
import InfoCard from './InfoCard';
import clock from '../img/clock2.png'
import find from '../img/find.png'
import book from '../img/calendar.png'


const InfoCardss = () => {
    const cards=[
        {
            id:1,
            title : "FIND A DOCTOR",
            details:"Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.",
            img: find,
            bg_colour: "bg-primary #8ed1fc" 
           },
           {
            id:2,
            title : "BOOK A VISIT",
            details:"Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.",
            img:book,
            bg_colour: "bg-primary" 
           },
           {
            id:3,
            title : "OPENING HOURS",
            details:"Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.",
            img:clock,
            bg_colour: "bg-primary" 
           }
    ]

    return (
        <div className='mt-8'> 
            <div className='text-center'>
        <h1>DISCOVER THE ONLINE APPOINTMENT! </h1>
        <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne mel.</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center mt-9'>
             {
                cards.map(card=><InfoCard
                   key={card.id}
                   card={card}
                ></InfoCard>)
            }
        </div>
        </div>
    );
};

export default InfoCardss;