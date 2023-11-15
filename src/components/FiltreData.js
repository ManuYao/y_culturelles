import React, {useState} from "react";
import Data from "./Data";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import calendar from '../images/calendar_img.png';
import explore from '../images/explore_img.png';
import handshake from '../images/handshake_img.png';
import title_img from '../images/title_img.png';
import  "../Styles/Card.scss";
import { Grid } from "@mui/material";

export function FilterData () {
    const dataEvent = Data();
    //console.log(dataEvent);

    // Vérifie si dataEvent est un tableau avant d'appliquer filter
    const festivalsAndMusic = Array.isArray(dataEvent) ? dataEvent.filter((event_fetiv_music) =>
        event_fetiv_music.keywords_fr.includes('festival') || event_fetiv_music.keywords_fr.includes('musique')
    ) : [];

    const cinemaAndMovie = Array.isArray(dataEvent) ? dataEvent.filter((event_cine_movie) =>
        event_cine_movie.keywords_fr.includes('art') || event_cine_movie.keywords_fr.includes('exposition')
    ) : [];

    const theatreAndShow = Array.isArray(dataEvent) ? dataEvent.filter((event_theatre_show) =>
        event_theatre_show.keywords_fr.includes('théâtre') || event_theatre_show.keywords_fr.includes('spectacle')
    ) : [];

    const settings = { //Style Slider
      infinite: true,
      speed: 500,
      slidesToShow: 1.1, 
      slidesToScroll: 1
    };

    return (
        <div>
            <div key="festivalsAndMusic">
        <div className="title_card">
          <h2>Festivals et Musique</h2>
        </div>
        <Slider {...settings} >
          {festivalsAndMusic.map((event_fm) => (
            <div key={event_fm.slug} className="card">
              <img src={event_fm.image} alt='img_api_error' className="img_card" />
              <Grid className="card_info">
                <p>Titre :{event_fm.title_fr}</p>
                <p>Lieu :{event_fm.location_name}</p>
                <p>Date :{event_fm.daterange_fr}</p>
              </Grid>
            </div>
          ))}
        </Slider>
            </div>

            <div key="theatreAndShow">
            <div className="title_card">
                <h2>Théâtre et Spectacle</h2>
            </div>
            <Slider {...settings}>
                {theatreAndShow.map((envent_ts) => (
                    <div key={envent_ts.slug} className="card">
                        <img src={envent_ts.image} alt='img_api_error'className="img_card" />
                        <Grid className="card_info">
                          <p>Titre :{envent_ts.title_fr}</p>
                          <p>Lieu :{envent_ts.location_name}</p>
                          <p>Date :{envent_ts.daterange_fr}</p>
                        </Grid>
                    </div>
                ))}
                </Slider>
            </div>

            <div key="cinemaAndMovie">
            <div className="title_card">
                <h2>Art et Exposition</h2>
            </div>
            <Slider {...settings}>
                {cinemaAndMovie.map((event_cm) => (
                    <div key={event_cm.slug} className="card">
                        <img src={event_cm.image} alt='img_api_error' className="img_card"/>
                        <Grid className="card_info">
                          <p>Titre :{event_cm.title_fr}</p>
                          <p>Lieu :{event_cm.location_name}</p>
                          <p>Date :{event_cm.daterange_fr}</p>
                        </Grid>
                    </div>
                ))}
            </Slider>
            </div>

        </div>
    );
}

/**
 * Fr Fonction permetant d'afficher un filtre par date 
 * En ...
 */
export function FilterDate() {
    const dataEvent = Data();
    const [filterByDate, setFilterByDate] = useState(false);

    const settings = { //Style Slider
      infinite: true,
      speed: 500,
      slidesToShow: 1.1, 
      slidesToScroll: 1
    };
  
    //Clic Event
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
  
   // console.log('Événements filtrés :', filteredEvents);
  
    return (
      <div> 
        <div className="title_card1">
        <label className="input_style">
          <input 
            type="checkbox"
            checked={filterByDate}
            onChange={handleCheckboxChange}
          /> 
          Filtrer par date
        </label>
        </div>

      <Slider {...settings}>
        {filteredEvents.map((event) => (
          <div key={event.slug} className="card">
            <img src={event.image} alt='img_api_error' className="img_card"/>
            <Grid className="card_info">
              <p>Titre : {event.title_fr}</p>
              <p>Lieu : {event.location_name}</p>
              <p>Date : {event.daterange_fr}</p>
            </Grid>
          </div>
        ))}
      </Slider>
      </div>
    );
  }  