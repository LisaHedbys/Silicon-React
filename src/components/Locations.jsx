import React from 'react';
import Map from '../assets/Images&Icons/map.svg'
import Location from '../assets/Images&Icons/lo-lo.svg'
import Phone from '../assets/Images&Icons/lo-phone.svg'
import Time from '../assets/Images&Icons/lo-time.svg'
import Facebook from '../assets/Images&Icons/lo-fb.svg'
import Twitter from '../assets/Images&Icons/lo-tw.svg'
import Instagram from '../assets/Images&Icons/lo-in.svg'
import YouTube from '../assets/Images&Icons/lo-yt.svg'

const Locations = () => (
  <div className="container loc-con">
    <div className="location">
      <div className="map">
        <img src={Map} alt="Map"/>
      </div>
      <div className="centers">
        <div>
          <h4>Medical Center 1</h4>
          <p><img src={Location} alt="" />457 Washington Ave, Manchester, Kentucky 39495</p>
          <p><img src={Phone} alt="" />Phone: (406) 555-0120</p>
          <p><img src={Time} alt="" />Mon - Fri: 9:00 am - 22:00 pm<br />Sat - Sun: 9:00 am - 20:00 pm</p>
        </div>
        <div>
          <h4>Medical Center 2</h4>
          <p><img src={Location}  alt="" />2464 Royal Ln, Mesa, New Jersey 45463</p>
          <p><img src={Phone} alt="" />Phone: (406) 544-0123</p>
          <p><img src={Time} alt="" />Mon - Fri: 9:00 am - 22:00 pm<br />Sat - Sun: 9:00 am - 20:00 pm</p>
        </div>
        <div className="apps">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
          <img src={YouTube} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Locations;
