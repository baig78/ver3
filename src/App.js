import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import cardsData from './cardsData.json';
import Modal from './Modal';
import Footer from './Footer';



function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [cardData, setCardPopupData] = useState(false);

  const openModal = (card) => {

    console.log('Opening modal', card); // Add this line
    setModalOpen(true);
    setCardPopupData(card);
  };

  const closeModal = () => {
    console.log('Closing modal'); // Add this line
    setModalOpen(false);
  };

  return (

    <div className="App">


      <Header />
      <div className='container'>
        <label className='trending-header'>Trending Now</label>
        <div className='cards-main'>
          {cardsData.filter(x => x.catagory === "tech").map((card, index) => (
            <div onClick={() => { openModal(card) }}>
              <Cards
                key={index}
                image={card.image}
                heading={card.heading}
                subheading={card.subheading}
                rating={card.rating}
                logo={card.logo}
                noOfClasses={card.noOfClasses}
                price={card.price}
                groupIcon={card.groupIcon}
                
              />
             
            </div>
            
          ))}
        </div>
      </div>
      <div className='container'>
        <label className='trending-header'>Arts & Crafts</label>
        <div className='cards-main'   >
          {cardsData.filter(x => x.catagory === "Craft").map((card, index) => (
            <div onClick={() => { openModal(card) }}>
              <Cards
                key={index}
                image={card.image}
                heading={card.heading}
                subheading={card.subheading}
                rating={card.rating}
                logo={card.logo}
                noOfClasses={card.noOfClasses}
                price={card.price}
              />
            </div>
          ))}
        </div>
      </div>


      <Modal isOpen={isModalOpen} onClose={closeModal} content={cardData} />

{/* 
      <h1>Top 1% of educators</h1>
      <h1>10X Skill Catalog</h1>
      <p>
        Art & Craft,
        Digital Arts,
        Coding and Technology, Digital Arts, Life Skills, Performing Arts
      </p> */}
       <Footer/>
    </div>

  );
}

export default App;
