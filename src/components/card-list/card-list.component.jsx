import Card from "../card/card.component";
import "./card-list.styles.css";

// pass in props, in this case it's the filtered monster array
const CardList = ({ monsters }) => {
 // map over the monsters array, returns a Card component for each monster in the array. set key to monster.id, each Card component is passed a single monster as a prop
 return (
  <div className="card-list">
   {monsters.map((monster) => {
    return <Card key={monster.id} monster={monster} />;
   })}
  </div>
 );
};

export default CardList;
