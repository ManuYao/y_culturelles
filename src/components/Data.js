import React, { useState, useEffect } from 'react';

export default function Data() {
  const [dataEvent, setDataEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gestion appel API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/yCulturelles/YCulturelles.php');
        if (!response.ok) {
          throw new Error('La requête a échoué');
        }
        const data = await response.json();

        setDataEvent(Array.isArray(data) ? data : []); // Check si data est un tableau
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Information État API
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite lors de l'appel API : {error}</div>;
  }

  // events est un tableau avant de mapper
  if (!Array.isArray(dataEvent)) {
    return <div>Les données ne sont pas au format attendu []</div>;
  }
  
console.log(dataEvent)

  //Affiche chaque catégories
  const festivalsAndMusic = dataEvent.filter((event_fetiv_music) =>
  event_fetiv_music.keywords_fr.includes('festival') || event_fetiv_music.keywords_fr.includes('musique')
  );
  const cinemaAndMovie = dataEvent.filter((event_cine_movie) =>
  event_cine_movie.keywords_fr.includes('cinéma') || event_cine_movie.keywords_fr.includes('film') || event_cine_movie.keywords_fr.includes('projection')
  );
  const theatreAndShow = dataEvent.filter((event_theatre_show) =>
  event_theatre_show.keywords_fr.includes('théâtre') || event_theatre_show.keywords_fr.includes('spectacle')
  );

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

