import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ isOpen, onClose, content }) => {
  function renderIcon(item) {
    if (item === "Laptop") {
      return <FontAwesomeIcon icon={faLaptop} />;
    }
    if (item === "Internet") {
      return <FontAwesomeIcon icon={faGlobe} />;
    }
    if (item === "Zoom") {
      return <FontAwesomeIcon icon={faGlobe} />;
    }
    if (item === "English") {
      return <FontAwesomeIcon icon={faGlobe} />;
    }
    return null; // Return null for cases where no icon is found
  }




  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={onClose}>
              &times;
            </span>
            <div className='modal-container'>
              <div className='modal-left' >
                <p className='card-heading'>{content?.heading}</p>
                <p className='card-short-desc'>{content?.popupData.shortDesc}</p>
                <div className='div-content'>
                  <div className='card-border course-fee'>
                    <p><span><FontAwesomeIcon icon={faCircle} /></span><span><FontAwesomeIcon icon={faUsers} /> Group</span><span>{content?.popupData.groupPrice}<i>/ Class</i></span></p>
                    <p><span><FontAwesomeIcon icon={faCircle} /></span><span><FontAwesomeIcon icon={faUser} /> 1on1</span><span>{content?.popupData["1on1Price"]}<i>/ Class</i></span></p>
                    <p><span><FontAwesomeIcon icon={faCircle} /></span><span><FontAwesomeIcon icon={faUser} /> Demo</span><span>Free</span></p>
                  </div>
                  <h3>Instructor</h3>
                  <div className='card-border'>
                    <p><b>{content?.popupData.instructor.name}</b></p>
                    <p><img className='instructor-img' src={content?.popupData.instructor.image} alt='img' /></p>
                    <p>{content?.popupData.instructor.about}</p>
                    <ul><li className='tags'><b># Tags :</b></li>{content?.popupData.instructor.tags.map(item => <li className='tags'># {item}</li>)}</ul>
                  </div>
                  <h3>Requirements</h3>
                  <div className='card-border'>
                    {/* <ul>{content?.popupData.requirements.map(item=><li><FontAwesomeIcon icon={faLaptop} />{item}<FontAwesomeIcon icon={faGlobe} /></li>)}</ul> */}
                    <ul>
                      {content?.popupData.requirements.map(item => (
                        <li key={item}>
                          {renderIcon(item)}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3>Course Structure</h3>
                  <div className='card-border'>
                    <p className='course-details'>
                      <FontAwesomeIcon icon={faClock} /> {content?.popupData.perClass} Class &nbsp;&nbsp;&nbsp;
                      <FontAwesomeIcon icon={faCalendar} /> {content?.popupData.yearsOld} Per Class &nbsp;&nbsp;&nbsp;
                      <FontAwesomeIcon icon={faPerson} /> {content?.popupData.yearsOld} Years olds
                    </p>
                    {content?.popupData.courseStructure.map((item, i) =>
                      <p className='course-structure'><FontAwesomeIcon icon={faCheck} /> <b>Class {i + 1} :</b> {item.conceptlearnt}
                      </p>)}

                  </div>
                </div>
                <button className="register-link">Register here</button>
              </div>
              <div className='model-left model-left-img'>
                <img src={content?.image} alt='img' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
