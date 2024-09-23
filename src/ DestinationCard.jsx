 import React from 'React'
 
const DestinationCard = ({ name, image, description }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DestinationCard;
