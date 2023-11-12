import React from "react";
import Data from "./Data";

export default function FilterData () {
    
    const dataEvent = Data();
    console.log(dataEvent);

    // Vérifie si dataEvent est un tableau avant d'appliquer filter
    const festivalsAndMusic = Array.isArray(dataEvent) ? dataEvent.filter((event_fetiv_music) =>
        event_fetiv_music.keywords_fr.includes('festival') || event_fetiv_music.keywords_fr.includes('musique')
    ) : [];

    const cinemaAndMovie = Array.isArray(dataEvent) ? dataEvent.filter((event_cine_movie) =>
        event_cine_movie.keywords_fr.includes('cinéma') || event_cine_movie.keywords_fr.includes('film') || event_cine_movie.keywords_fr.includes('projection')
    ) : [];

    const theatreAndShow = Array.isArray(dataEvent) ? dataEvent.filter((event_theatre_show) =>
        event_theatre_show.keywords_fr.includes('théâtre') || event_theatre_show.keywords_fr.includes('spectacle')
    ) : [];

    return (
        <div>
            <div key="festivalsAndMusic">
                <h2>Festivals et Musique</h2>
                {festivalsAndMusic.map((event_fm) => (
                    <div key={event_fm.slug}>
                        <p>{event_fm.title_fr}</p>
                        <p>{event_fm.uids}</p>
                        <img src={event_fm.image} alt='img_api_error' />
                    </div>
                ))}
            </div>

            <div key="theatreAndShow">
                <h2>Théâtre et Spectacle</h2>
                {theatreAndShow.map((envent_ts) => (
                    <div key={envent_ts.slug}>
                        <p>{envent_ts.title_fr}</p>
                        <p>{envent_ts.uids}</p>
                        <img src={envent_ts.image} alt='img_api_error'/>
                    </div>
                ))}
            </div>

            <div key="cinemaAndMovie">
                <h2>Cinema et projection</h2>
                {cinemaAndMovie.map((event_cm) => (
                    <div key={event_cm.slug}>
                        <p>{event_cm.title_fr}</p>
                        <p>{event_cm.uids}</p>
                        <img src={event_cm.image} alt='img_api_error'/>
                    </div>
                ))}
            </div>
        </div>
    );
}
