import React, {useState} from "react";
import Data from "./Data";
import "../Styles/Card.css"

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

    return (
        <div>
            <div key="festivalsAndMusic">
              <div className="titel_card">
                <h2>Festivals et Musique</h2>
              </div>
                {festivalsAndMusic.map((event_fm) => (
                    <div key={event_fm.slug} className="card">
                        <img src={event_fm.image} alt='img_api_error' className="img_card"/>
                        <p>Titre :{event_fm.title_fr}</p>
                        <p>Condition :{event_fm.conditions_fr}</p>
                        <p>Lieu :{event_fm.location_name}</p>
                        <p>Date :{event_fm.daterange_fr}</p>
                    </div>
                ))}
            </div>

            <div key="theatreAndShow">
                <h2>Théâtre et Spectacle</h2>
                {theatreAndShow.map((envent_ts) => (
                    <div key={envent_ts.slug} className="card">
                        <img src={envent_ts.image} alt='img_api_error'className="img_card" />
                        <p>Titre :{envent_ts.title_fr}</p>
                        <p>Condition :{envent_ts.conditions_fr}</p>
                        <p>Lieu :{envent_ts.location_name}</p>
                        <p>Date :{envent_ts.daterange_fr}</p>
                    </div>
                ))}
            </div>

            <div key="cinemaAndMovie">
                <h2>Art et Exposition</h2>
                {cinemaAndMovie.map((event_cm) => (
                    <div key={event_cm.slug} className="card">
                        <img src={event_cm.image} alt='img_api_error' className="img_card"/>
                        <p>Titre :{event_cm.title_fr}</p>
                        <p>Condition :{event_cm.conditions_fr}</p>
                        <p>Lieu :{event_cm.location_name}</p>
                        <p>Date :{event_cm.daterange_fr}</p>
                    </div>
                ))}
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
        <label>
          <input
            type="checkbox"
            checked={filterByDate}
            onChange={handleCheckboxChange}
          />
          Filtrer par date
        </label>
  
        {filteredEvents.map((event) => (
          <div key={event.slug} className="card">
            <img src={event.image} alt='img_api_error' className="img_card"/>
            <p>Titre : {event.title_fr}</p>
            <p>Condition : {event.conditions_fr}</p>
            <p>Lieu : {event.location_name}</p>
            <p>Date : {event.daterange_fr}</p>
          </div>
        ))}
      </div>
    );
  }  