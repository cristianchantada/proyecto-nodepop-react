import React, { useEffect, useState } from "react";
import { getAdverts } from "../api/service";
import Layout from "./common/Layout";
import { Link, useNavigate } from "react-router-dom";
import Button from "./common/button";

function AdvertsPage({handleLogout, isLogged}) {

  const [adverts, setAdverts] = useState([]);
  const navigate = useNavigate();

  console.log(adverts);

  const handleNewAdvertButton = () => {
    navigate('/adverts/new');
  }

  useEffect(()=> {

    getAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return (
    <Layout isLogged={isLogged} handleLogout={handleLogout} handleNewAdvertButton={handleNewAdvertButton}>
      <div className="container AdvertsPage">
        <h2>Anuncios</h2>
        { adverts.length ?
          <>
            <div className='container adverts'>
              <ul>
                {adverts.map(advert => (
                  <li key={advert.id}>
                    <Link to={`/adverts/${advert.id}`}> 
                      <h3><span>Se {advert.sale ? "vende": "compra"}:</span> {advert.name}</h3>
                      <p>{advert.price}</p>
                      {advert.photo? <img src={advert.photo} alt={'fotografía de' + advert.name} /> : <img src='http://localhost:3000/public/placeholder.png' alt="Anuncio sin fotografía"/> }
                      <ul>
                        {advert.tags.map(tag => 
                          <li key={advert.id}>{tag}</li>)}
                      </ul>
                    </Link> 
                  </li>
                ))}
              </ul> 
            </div>
            <div className="container filterContainer">

            </div> 
          </>    
            :
            <>
              <p>Todavía no existe ningún anuncio</p>
              <Button handleButtonClick={handleNewAdvertButton} title={'Sea usted el primero en publicar'}/>
            </>
        }
      </div>
    </Layout>
  )
}

export default AdvertsPage;