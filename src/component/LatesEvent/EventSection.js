// EventSection.js
import React from 'react';
import Slider from "../Slider/Slider";
import styles from './EventSection.module.css'; // Import the CSS module

const EventSection = () => {
  return (
    <section style={{ height: "60vh", backgroundColor: "#053750" }}>
      <div className={`container d-flex justify-content-between text-light ${styles.container}`}>
        <div style={{ width: "50%" }} className="d-flex flex-column">
          <div className="d-flex flex-row " style={{ width: "100%" }}>
            <div className="flex-grow-1 text-center">
              <h3>Latest Events</h3>
            </div>
            <div>
              <button>❮</button>
              <button>❯</button>
            </div>
          </div>

          <div className={`d-flex mt-5 justify-content-evenly overflow-hidden ${styles.sliderWrapper}`}>
            <Slider />
          </div>
        </div>

        <div style={{ width: "40%" }} className="text-center m-5">
          <h3 className="my-4">Come on Join Us</h3>
          <iframe
            width="418" height="235"
            src="https://www.youtube.com/embed/h6NjRfoJFEU"
            title="RSCP building Pharmacy career with excellent opportunity to our students..."
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
