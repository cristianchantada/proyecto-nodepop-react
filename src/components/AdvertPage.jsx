import { useEffect, useState } from "react";
import { getAdv } from "../api/service";
import { useParams } from "react-router-dom";
import Button from "./common/button";
import { deleteAdv } from "../api/service";
import { useNavigate } from "react-router-dom";
import placeholder from '../assets/img/placeholder.png'



function AdvertDetail(){

  const[advert, setAdvert] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();

  const handleDelete = () => {
    deleteAdv(id).then(alert('El anuncio ha sido borrado correctamente'));
    navigate('/');
  }

  useEffect(() => {

    getAdv(id).then(advert => {
      setAdvert(advert)
    });

  }, [id])
  
  return (
    <div className='container detailContainer'>
      <h3><span>Se {advert.sale ? "vende": "compra"}:</span> {advert.name}</h3>
      <p>{advert.price}</p>
      {advert.photo? <img src={advert.photo} alt={'fotografía de' + advert.name} /> :
        <img src={placeholder} alt="Anuncio sin fotografía"/>}
      <ul>
        {advert.tags ? advert.tags.map(tag => 
          <li key={advert.id}>{tag}</li>) : null}
      </ul>
      <br />
      <Button handleButtonClick={handleDelete} title={'Borrar anuncio'}/>
    </div>
  );
}

export default AdvertDetail;