import React from 'react';
import Email from '../assets/Images&Icons/con_mail.svg'
import PurArrow from '../assets/Images&Icons/Pur-right-arrow.svg'
import Career from '../assets/Images&Icons/con_career.svg'

const ContactOptions = () => (
  <div className="cont-opt">
    <div className="cont-con">
      <img className="con-icons" src={Email} alt="Email Icon"/>
      <div>
        <h3>Email us</h3>
        <p>Please feel free to drop us a line. We will respond as soon as possible</p>
        <a href="#" className="links">
          Leave a message
          <img className="arrows" src={PurArrow} alt="Arrow" />
        </a>
      </div>
    </div>

    <div className="cont-career">
      <img className="con-icons" src={Career} alt="Career Icon" />
      <div>
        <h3>Careers</h3>
        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
        <a href="#" className="links">
          Send an application
          <img className="arrows" src={PurArrow} alt="Arrow" />
        </a>
      </div>
    </div>
  </div>
);

export default ContactOptions;
