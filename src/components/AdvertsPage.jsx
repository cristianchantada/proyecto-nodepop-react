import placeholder from '../assets/img/placeholder.png';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getAdverts } from "../api/service";
import Button from "./common/Button";
import Layout from "./common/Layout";
import '../styles/AdvertsPage.css'

function AdvertsPage({handleLogout, isLogged, handleNewAdvertButton}) {

  const [adverts, setAdverts] = useState([]);
  const [nonFilterAdverts, setNonFilterAdverts] = useState(false);

  const handleFilterSubmit = (event) => {
    event.preventDefault();

    let minPrize = parseFloat(event.target.minPrize.value);
    let maxPrize = parseFloat(event.target.maxPrize.value);

    if(isNaN(minPrize)){
      minPrize = 0;
    }

    if(isNaN(maxPrize)){
      maxPrize = Infinity;
    }

    const radioBuy = event.target[2].checked; 
    const radioSell = event.target[3].checked; 
    let operation = null;

    if(radioBuy){
      operation = false
    } else if(radioSell) {
      operation = true
    }

    let filterAdverts = adverts.filter(advert => advert.price >= minPrize && advert.price <= maxPrize);

    if(operation === !null){
      filterAdverts = filterAdverts.filter(advert => advert.sale === operation );
    }
    
    (filterAdverts.length === 0) ? setNonFilterAdverts(true) : setAdverts(filterAdverts);

  }

  const handleReturn = () => setNonFilterAdverts(false)

  useEffect(()=> {

    getAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return (
    <Layout isLogged={isLogged} handleLogout={handleLogout} handleNewAdvertButton={handleNewAdvertButton}>
      {!nonFilterAdverts ? 
        <div className="container AdvertsPage">
          <h2>Anuncios</h2>
          { adverts.length ?
            <>
              <div className='container adverts'>
                <ul className="advertsList">
                  {adverts.map(advert => (
                    <li className="advertItem" key={advert.id}>
                      <Link to={`/adverts/${advert.id}`}> 
                        <h3><span>Se {advert.sale ? "vende": "compra"}:</span> {advert.name}</h3>
                        <p>{advert.price}</p>
                        {advert.photo? <img src={advert.photo} alt={'fotografía de' + advert.name} /> : <img src={placeholder} alt="Anuncio sin fotografía"/> }
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
                <p>Seleccione los filtros a aplicar</p>
                <form onSubmit={handleFilterSubmit}>
                  <div>
                    <label htmlFor="minPrize">Precio mínimo</label>
                    <input type="text" id="minPrize" name="minPrize" />
                    <label htmlFor="maxPrize">Precio máximo</label>
                    <input type="text" id="maxPrize" name="maxPrize" />
                  </div>
                  <div>
                    <p>Seleccione tipo de operación</p>
                    <input type="radio" id="buy" name="radio" value="buy" />
                    <label htmlFor="buy">Compra</label>
                    <input type="radio" id="sell" name="radio" value="sell" />
                    <label htmlFor="sell">Venta</label>
                    <input type="radio" id="buySell" name="radio" value="buySell" defaultChecked /> 
                    <label htmlFor="buySell">Compra y venta</label>
                  </div>
                  <button type="submit">Filtrar</button>
                </form>
              </div> 
            </>    
              :
              <>
                <p>Todavía no existe ningún anuncio</p>
                <Button handleButtonClick={handleNewAdvertButton} title={'Sea usted el primero en publicar'}/>
              </>
          }
        </div>
        :
        <>
          <p>Lo sentimos, su búsqueda no ha devuelto ninguna coincidencia</p>
          <Button handleButtonClick={handleReturn} title={'Volver'}/>
        </>
      } 
    </Layout>
  )
}

export default AdvertsPage;