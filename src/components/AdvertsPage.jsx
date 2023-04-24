import React, { useEffect, useState } from "react";
import { getAdverts } from "../api/service";

function AdvertsPage() {

  const [adverts, setAdverts] = useState([]);

  useEffect(()=> {

    getAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return (
    <div className="container AdvertsPage">
      <h2>Anuncios</h2>
      <ul>
        {adverts.map(advert => ( 
          <li key={advert.id}>{advert.a}</li>
        ))}
      </ul>
    </div>
  )
}

export default AdvertsPage;