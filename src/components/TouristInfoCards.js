import React from "react";

const cities = [
  {
    cityPicture:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c7/ab/93/the-university-of-glasgow.jpg?w=300&h=-1&s=1",
    cityName: "Glasgow",
    cityInfo:
      "As Scotland’s largest city, Glasgow is famed for its culture, shopping and people. Spend your day exploring a wide range of fascinating free museums and galleries, enjoying the UK’s best shopping outside of London, and taking advantage of tips from friendly local people on the city’s hidden gems — then choose from 130+ weekly musical events for a special night out. Glasgow is also the perfect base for exploring more of Scotland, with great connections to the Highlands and the islands.",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    cityPicture:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=300&h=-1&s=1",
    cityName: "Manchester",
    cityInfo:
      "Famed for its soccer team and music scene, which has produced the likes of The Smiths and Oasis, this centre for sports and the arts is a down-to-earth and friendly city. The so-called Capital of the North has overcome industrial decline and bombing (in WWII and by the IRA) to become a confident and cosmopolitan city of over two million people. It is well served by a bus and light rail network, a boon for visitors on sightseeing expeditions.",
    link: "https://www.visitmanchester.com/"
  },
  {
    cityPicture:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/8d/60/eb/tower-bridge.jpg?w=300&h=-1&s=1",
    cityName: "London",
    cityInfo:
      "London is layered with history, where medieval and Victoriancomplement a rich and vibrant modern world. The Tower of London andWestminster neighbour local pubs and markets, and time-worn rituals like the changing of the guards take place as commuters rush to catch the Tube. It’s a place where travellers can time-hop through the city, and when they’re weary, do as Londoners do and grab a“cuppa” tea.",
    link: "https://visitlondon.com/"
  }
];
const TouristInfoCards = () => {
  return (
    <div className="cards">
      {cities.map(city => (
        <div key={city.cityName} className="card">
          <img
            src={city.cityPicture}
            alt={city.cityName}
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="infoTitle">{city.cityName}</h2>
            <p className="infoText">{city.cityInfo}</p>
            <a href={city.link} target="_blank" className="btn btn-primary">
              Go {city.cityName}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
