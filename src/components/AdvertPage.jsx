import { deleteApiAdv, getApiAdvDetail } from "../reactRedux/actions";
import { getReduxAdvertID } from "../reactRedux/selectors";
import placeholder from "../assets/img/placeholder.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./common/Layout";
import "../styles/AdvertPage.css";

function AdvertDetail() {
  const [deleteProcess, setDeleteProcess] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const advert = useSelector(getReduxAdvertID(id));

  console.log('anuncio: ',advert);

  const handleDelete = () => {
    setDeleteProcess(true);
  };

  const handleDefinitive = () => {
    dispatch(deleteApiAdv(id));
  };

  const handleCancel = () => {
    setDeleteProcess(false);
  };

  useEffect(() => {
    dispatch(getApiAdvDetail(id))
  }, [dispatch, id]);

  //TODO Quitar las ? de los advert. :

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
