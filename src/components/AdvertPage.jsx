import { useNavigate, useParams } from "react-router-dom";
import placeholder from '../assets/img/placeholder.png';
import { deleteAdv, getAdv } from "../api/service";
import { useEffect, useState } from "react";
import Confirm from './common/Confirm'
import Button from "./common/Button";


function AdvertDetail(){

  const[advert, setAdvert] = useState({});
  const[deleteProcess, setDeleteProcess] = useState(false);



  console.log()

  const navigate = useNavigate();
  const {id} = useParams();

  const handleDelete = () => {
    setDeleteProcess(true);
  }
  
  const handleDefinitiveDelete = () => {
        deleteAdv(id).then(alert('El anuncio ha sido borrado correctamente'));
        navigate('/');
  }

  const handleCancel = () =>{
    setDeleteProcess(false);
  }

  useEffect(() => {

    getAdv(id).then(advert => {
      setAdvert(advert)
    }).catch(error => {
      if (error.response.status === 404) {
        return navigate('/404');
      }
    });;

  }, [id, navigate])
  
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
      {!deleteProcess ? 
        <Button handleButtonClick={handleDelete} title={'Borrar anuncio'}/>
        :
        <Confirm handleDefinitiveDelete={handleDefinitiveDelete} handleCancel={handleCancel} />
      } 
    </div>
  );
}

export default AdvertDetail;