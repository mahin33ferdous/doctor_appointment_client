import React from 'react';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cards=[
        {
            id:1,
            title : "FIND A DOCTOR",
            details:"Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie."
           },
           {
            id:2,
            title : "BOOK A VISIT",
            details:"Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie."
           },
           {
            id:3,
            title : "OPENING HOURS",
            details:"Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie."
           }
    ]
    return (
        <div>
            {
                cards.map(card=><InfoCard
                   key={card.id}
                   card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;