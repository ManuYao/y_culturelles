import React, { useState, useEffect } from "react";
import Data from "./Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import calendar from '../images/calendar_img.png';
import explore from '../images/explore_img.png';
import title_img from '../images/title_img.png';
import "../Styles/Card.scss";

export function FilterData() {
  const dataEvent = Data();

  const settings = {
    mobile: {
      infinite: true,
      speed: 500,
      slidesToShow: 1.1, //nombre d'élément affiché !
      slidesToScroll: 1,
    },
    tablet: {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    },
    desktop: {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  };
  
  // Condition taille de l'écran 
  const getSettings = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      return settings.desktop;
    } else if (width >= 768) {
      return settings.tablet;
    } else {
      return settings.mobile;
    }
  };

  const [carouselSettings, setCarouselSettings] = useState(getSettings);

  // Met à jour les paramètres lorsque la taille de l'écran change
  useEffect(() => {
    const handleResize = () => {
      setCarouselSettings(getSettings());
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Déclenché une seule fois lors du montage du composant

  //Filtre (festival, art, spectacle ...)
  const festivalsAndMusic = Array.isArray(dataEvent)
    ? dataEvent.filter((event) =>
        event.keywords_fr.includes('festival') || event.keywords_fr.includes('musique')
      )
    : [];

  const cinemaAndMovie = Array.isArray(dataEvent)
    ? dataEvent.filter((event) =>
        event.keywords_fr.includes('art') || event.keywords_fr.includes('exposition')
      )
    : [];

  const theatreAndShow = Array.isArray(dataEvent)
    ? dataEvent.filter((event) =>
        event.keywords_fr.includes('théâtre') || event.keywords_fr.includes('spectacle')
      )
    : [];

  return (
    <div>
      <div key="festivalsAndMusic">
        <div className="title_card">
          <h2>Festivals et Musique</h2>
        </div>
        <Slider {...carouselSettings}>
          {festivalsAndMusic.map((event_fm) => (
            <div key={event_fm.slug} className="card">
              <img src={event_fm.image} alt='img_api_error' className="img_card" />
              <Grid className="card_info">
                <p className="pxxx"><img src={title_img} alt="?" /> {event_fm.title_fr}</p>
                <p className="pxxx"><img src={explore} alt="?" />{event_fm.location_name}</p>
                <p className="pxxx"><img src={calendar} alt="?" />{event_fm.daterange_fr}</p>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>

      <div key="theatreAndShow">
        <div className="title_card">
          <h2>Théâtre et Spectacle</h2>
        </div>
        <Slider {...carouselSettings}>
          {theatreAndShow.map((envent_ts) => (
            <div key={envent_ts.slug} className="card">
              <img src={envent_ts.image} alt='img_api_error' className="img_card" />
              <Grid className="card_info">
                <p className="pxxx"><img src={title_img} alt="?" />{envent_ts.title_fr}</p>
                <p className="pxxx"><img src={explore} alt="?" />{envent_ts.location_name}</p>
                <p className="pxxx"><img src={calendar} alt="?" />{envent_ts.daterange_fr}</p>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>

      <div key="cinemaAndMovie">
        <div className="title_card">
          <h2>Art et Exposition</h2>
        </div>
        <Slider {...carouselSettings}>
          {cinemaAndMovie.map((event_cm) => (
            <div key={event_cm.slug} className="card">
              <img src={event_cm.image} alt='img_api_error' className="img_card"/>
              <Grid className="card_info">
                <p className="pxxx"><img src={title_img} alt="?" />{event_cm.title_fr}</p>
                <p className="pxxx"><img src={explore} alt="?" />{event_cm.location_name}</p>
                <p className="pxxx"><img src={calendar} alt="?" />{event_cm.daterange_fr}</p>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export function FilterDate() {
  const dataEvent = Data();
  const [filterByDate, setFilterByDate] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.1, 
    slidesToScroll: 1
  };

  const handleCheckboxChange = () => {
    const newFilterState = !filterByDate;
    console.log('Nouvel état de filterByDate :', newFilterState);
    setFilterByDate(newFilterState);
  };

  const filteredEvents = Array.isArray(dataEvent)
    ? filterByDate
      ? dataEvent.filter((event) => new Date(event.firstdate_begin) > new Date())
      : dataEvent
    : [];

  return (
    <div>
      <Grid className="title_card1" sx={{ pr: 4 }}>
        <label className="input_style">
          <input 
            type="checkbox"
            checked={filterByDate}
            onChange={handleCheckboxChange}
          /> 
          Filtrer par date
        </label>
      </Grid>

      <Slider {...settings}>
        {filteredEvents.map((event) => (
          <div key={event.slug} className="card">
            <img src={event.image} alt='img_api_error' className="img_card"/>
            <Grid className="card_info">
              <p className="pxxx"><img src={title_img} alt="?" />{event.title_fr}</p>
              <p className="pxxx"><img src={explore} alt="?" />{event.location_name}</p>
              <p className="pxxx"><img src={calendar} alt="?" />{event.daterange_fr}</p>
            </Grid>
          </div>
        ))}
      </Slider>
    </div>
  );
}
