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
  return dataEvent; 
} 
  {/*
  
  A corriger plus tard Affichage de l'état actuelle du chargemnt de la data ! 
  
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
}
*/}