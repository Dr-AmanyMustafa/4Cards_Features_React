import "./Cards.css"
import Card1 from "/Imgs/icon-supervisor.svg"
import Card2 from "/Imgs/icon-team-builder.svg"
import Card3 from "/Imgs/icon-karma.svg"
import Card4 from "/Imgs/icon-calculator.svg"
import CardsItem from "../CardsItem/CardsItem"

function Cards() {

  const ArrayOfObjects = [
    { id:1, CardsTitle:"Supervisor", CardsDescription: "Monitors activity to identify project roadblocks", 
      CardsImg: Card1, color: "cyan"},
    { id:2, CardsTitle:"Team Builder", CardsDescription: "Scans our talent network to create the optimal team for your project", 
      CardsImg: Card2, color: "red"},
     { id:3, CardsTitle:"Karma", CardsDescription: "Regularly evaluates our talent to ensure quality", 
      CardsImg: Card3, color: "orange"},
    { id:4, CardsTitle:"Calculator", CardsDescription: "Uses data from past projects to provide better delivery estimates", 
      CardsImg: Card4, color: "blue"},
];
return (
    <div>
        {ArrayOfObjects.map((item) => {
            return (
                <CardsItem
                key={item.id}
                CardsTitle={item.CardsTitle}
                CardsDescription={item.CardsDescription}
                CardsImg={item.CardsImg}
                color={item.color}
                />
                
            );
        })}
    
    </div>
);
}

  export default Cards

  