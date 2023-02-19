import "./card.styles.css";
//  the Card component is responsible for rendering the details of a single monster

const Card = ({ monster }) => {
 // destructure the monster object passed in from card-list-component- get name, id, and email properties
 const { name, id, email } = monster;

 // render a div containing an image, name, and email as a card
 return (
  <div className="card-container" key={id}>
   <img src={`https://robohash.org/${id}?set=set2`} alt="monster" />
   <h2>{name}</h2>
   <p>{email}</p>
  </div>
 );
};

export default Card;
