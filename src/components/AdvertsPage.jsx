import React, { useEffect, useState } from "react";
import { getAdverts } from "../api/service";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";
import AdvertDetail from "./AdvertDetail"

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
              <Link to={`/adverts/${advert.id}`}> 
                <h3><span>Se {advert.sale ? "vende": "compra"}:</span> {advert.name}</h3>
                <p>{advert.price}</p>
              </Link> 
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default AdvertsPage;