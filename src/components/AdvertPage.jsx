import { getReduxAdvertID } from "../reactRedux/selectors";
import { useNavigate, useParams } from "react-router-dom";
import placeholder from "../assets/img/placeholder.png";
import { deleteAdv } from "../api/service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./common/Layout";
import "../styles/AdvertPage.css";
import { getApiAdvDetail } from "../reactRedux/actions";

function AdvertDetail() {
  const [deleteProcess, setDeleteProcess] = useState(false);
  const dispatch = useDispatch

  const navigate = useNavigate();
  const { id } = useParams();
  const advert = useSelector(getReduxAdvertID(id));
  

  const handleDelete = () => {
    setDeleteProcess(true);
  };

  const handleDefinitive = () => {
    deleteAdv(id).then(()=> {
      alert("El anuncio ha sido borrado correctamente");

      //TODO falta inyectar el router para hacer un reouter.navigate y no depender del useNavigate();
      navigate("/");
    });
  };

  const handleCancel = () => {
    setDeleteProcess(false);
  };

  useEffect(() => {
    dispatch(getApiAdvDetail(id))
  }, [dispatch, id]);

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
