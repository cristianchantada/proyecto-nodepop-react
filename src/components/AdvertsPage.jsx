import React, { useEffect, useState } from "react";
import { getAdvs } from "../api/service";

function AdvertsPage() {

  const [adverts, setAdverts] = useState([  {
    id: "75ad6f75-f68c-4cbd-92fc-d79577b98e6c",
    createdAt: "2023-04-23T18:34:12.000Z",
    name: "Pantalones vaqueros",
    sale: true,
    price: 50,
    tags: [
      "lifestyle"
    ],
    photo: null
  }]);

  useEffect(()=>{
    
    async function fetchAdvs() {
      const response = await getAdvs();
      setAdverts(response);
      console.log(adverts);
    }

    fetchAdvs();
    } , []
  );

  return (
    <div className="container AdvertsPage">

        <h2>Anuncios</h2>
        <ul>
          {adverts.map(advert => {
            <li>{advert}</li>
            })
          }
        </ul>
    </div>
  )
}

export default AdvertsPage;