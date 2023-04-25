import React, { useEffect, useState } from "react";
import { getAdverts } from "../api/service";
import Layout from "./Layout";

function AdvertsPage({handleLogout, isLogged}) {

  const [adverts, setAdverts] = useState([]);

  useEffect(()=> {

    getAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return (
    <Layout isLogged={isLogged} handleLogout={handleLogout}>
      <div className="container AdvertsPage">
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
    </Layout>
  )
}

export default AdvertsPage;