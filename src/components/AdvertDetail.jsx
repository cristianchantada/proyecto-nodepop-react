import { useEffect, useState } from "react";
import { getAdv } from "../api/service";
import { useParams } from "react-router-dom";


function AdvertDetail(){

  const[advert, setAdvert] = useState({});
  const {id} = useParams();

  console.log(advert);

  useEffect(() => {

    getAdv(id).then(advert => {
      setAdvert(advert)
    });

  }, [id])
  
  return (
    <div className='container detailContainer'>
      <h3><span>Se {advert.sale ? "vende": "compra"}:</span> {advert.name}</h3>
      <p>{advert.price}</p>
    </div>
  );
}

export default AdvertDetail;