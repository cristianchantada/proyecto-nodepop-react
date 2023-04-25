import React, { useEffect, useState } from "react";
import { getAdverts } from "../api/service";

function AdvertsPage({handleLogout}) {

  const [adverts, setAdverts] = useState([]);

  useEffect(()=> {

    getAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return (
    <div className="container AdvertsPage">
      <button onClick={handleLogout}>Logout</button>
      <h2>Anuncios</h2>
      <ul>
        {adverts.map(advert => ( 
          <li key={advert.id}>
            <h3><span>Se {advert.sale ? "vende": "compra"}:</span> {advert.name}</h3>
            <p>{advert.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdvertsPage;