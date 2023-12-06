import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import cardsData from './cardsData.json';
import Modal from './Modal';
import Footer from './Footer';
import { Collapse } from 'antd';
// const { Panel } = Collapse;
import Loader from './Loader';




function App() {

 

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds (you can replace this with your actual data fetching logic)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);
  const { Panel } = Collapse;


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
        <div className='cards-main'>
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



      {/* 
      <h1>Top 1% of educators</h1>
      <h1>10X Skill Catalog</h1>
      <p>
        Art & Craft,
        Digital Arts,
        Coding and Technology, Digital Arts, Life Skills, Performing Arts
      </p> */}

      <div className='container'>
        <label className='trending-header'>FAQ's</label>
        <Collapse className='collapse-section' >
          <Panel header="How do I join the session?" key="1">
            <p className="panel-content"> The link will be available the day of the class. When it’s time to log on, you can click “Join Session” right on the page of “My courses” , or from the reminder email you received. </p>
          </Panel>
          <Panel header="What if I can’t make the time? Will this be recorded? " key="2">
            <p className="panel-content"> Yes! All of our Live sessions are recorded and the encore will be published to the course page on the website after the session.The recordings will be available for 30 days only. Follow your profile to check the course! </p>
          </Panel>
          <Panel header="What about the refund of the course?" key="3" >
            <p className="panel-content"> The refund policy will be based on the sessions attended. The refund will be given max within 2 sessions only. Refund policy won't be applicable if more than 2 sessions are attended. REFUND will be available for courses with 3 or more sessions. </p>
          </Panel>
        </Collapse>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={cardData} />
      <Loader isLoading={isLoading} />
      <Footer />
    </div>

  );
}

export default App;
