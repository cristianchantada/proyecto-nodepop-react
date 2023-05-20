import { useNavigate, useParams } from "react-router-dom";
import placeholder from "../assets/img/placeholder.png";
import { deleteAdv, getAdv } from "../api/service";
import { useEffect, useState } from "react";
import Layout from "./common/Layout";
import "../styles/AdvertPage.css";

function AdvertDetail() {
  const [advert, setAdvert] = useState({});
  const [deleteProcess, setDeleteProcess] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setDeleteProcess(true);
  };

  const handleDefinitive = () => {
    deleteAdv(id).then(()=> {
      alert("El anuncio ha sido borrado correctamente")
      navigate("/");
    });
  };

  const handleCancel = () => {
    setDeleteProcess(false);
  };

  useEffect(() => {
    getAdv(id)
      .then((advert) => {
        setAdvert(advert);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          return navigate("/404");
        }
      });
  }, [id, navigate]);

  return (
    <Layout>
      <div className="container detailContainer">
        <p>{advert.sale ? "Venta" : "Compra"}</p>
        <h3>{advert.name}</h3>
        <p> Precio {advert.price} €.</p>
        {advert.photo ? (
          <img src={advert.photo} alt={"fotografía de" + advert.name} />
        ) : (
          <img src={placeholder} alt="Anuncio sin fotografía" />
        )}
        <ul>
          {advert.tags
            ? advert.tags.map((tag) => <li key={advert.id + tag}>{tag}</li>)
            : null}
        </ul>
        <br />
        {!deleteProcess ? (
          <button onClick={handleDelete}>Borrar anuncio</button>
        ) : (
          <>
            <button onClick={handleDefinitive}>Borrar definitivamente</button>
            <button onClick={handleCancel}>Cancelar</button>
          </> 
        )}
      </div>
    </Layout>
  );
}

export default AdvertDetail;
