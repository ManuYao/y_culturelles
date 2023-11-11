  import React, { useState, useEffect } from 'react';

  const App = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost/yCulturelles/YCulturelles.php');
          if (!response.ok) {
            throw new Error('La requête a échoué');
          }
          const data = await response.json();
          console.log(data);
          setEvents(Array.isArray(data) ? data : []); // Check si data est un tableau
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <div>Chargement en cours...</div>;
    }

    if (error) {
      return <div>Une erreur s'est produite : {error}</div>;
    }

    // events est un tableau avant de mapper
    if (!Array.isArray(events)) {
      return <div>Les données ne sont pas au format attendu</div>;
    }

    return (
      //Problème d'affichage
      <div>
        {events.map((event) => (
          <div key={event.slug}>
            <h2>{event.title_fr}</h2>
            <p>{event.category_fr}</p>
          </div>
        ))}
      </div>
    );
  };

  export default App;
