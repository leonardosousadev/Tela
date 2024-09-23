'import React from react'
import DestinationCard from '../components/DestinationCard';

const Home = () => {
  const destinations = [
    { name: 'Paris', image: '/images/paris.jpg', description: 'Cidade do amor.' },
    { name: 'Tokyo', image: '/images/tokyo.jpg', description: 'A combinação de tradição e tecnologia.' },
  ];

  return (
    <div>
      <h1>Destinos Populares</h1>
      <div className="destination-list">
        {destinations.map((dest) => (
          <DestinationCard key={dest.name} {...dest} />
        ))}
      </div>
    </div>
  );
};

export default Home;
