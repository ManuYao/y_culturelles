import React, { useState, useEffect } from 'react';

export default function Data() {

    const [dataEvent, setDataEvent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //const [selectedCategory, setSelectedCategory] = useState(null);
    
    //Gestion appele API
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost/yCulturelles/YCulturelles.php');
          if (!response.ok) {
            throw new Error('La requête a échoué');
          }
          const data = await response.json();
          
         // console.log(data);
          setDataEvent(Array.isArray(data) ? data : []); // Check si data est un tableau
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      fetchData();
    }, []);
    
    //Information Etat API
    if (loading) {
      return <div>Chargement en cours...</div>;
    }
    
    if (error) {
      return <div>Une erreur s'est produite l'ors de l'appel API : {error}</div>;
    }
    
    // events est un tableau avant de mapper
    if (!Array.isArray(dataEvent)) {
      return <div>Les données ne sont pas au format attendu {"[]"}</div>;
    }



  return ( //Affichage information event api
    <div>
    {dataEvent.map((data_event) => (
      <div key={data_event.slug}>
        <p>{data_event.title_fr}</p>
        <p>{data_event.uids}</p>
        <img src={data_event.image} alt='img_api_error' />
      </div>
    ))}
  </div>
  )
}


