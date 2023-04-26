import { useNavigate } from "react-router-dom";
import Layout from "./common/Layout";
import { useState } from "react";
import { postAdv } from "../api/service";

function NewAdvert({handleLogout}) {

  const [action, setAction] = useState(false)

  const navigate = useNavigate();

  const handleNewAdvertButton = () => {
    navigate('/adverts/new');
    setAction(false);
  }

  const handleSubmit = event => {
    event.preventDefault();

    let sale = event.target[1].value;
    
    if (sale === 'comprar'){
      sale = true;
    } else {
      sale = false;
    }
    
    // (event.target.sale.value === 'comprar' ? event.target.sale.value = true : event.target.sale.value = false);
    
    const tagsChecked = {
      lifestyle: event.target[2].checked,
      work: event.target[3].checked,
      motor: event.target[4].checked,
      mobile: event.target[5].checked,
    }
    
    console.log(event);
    console.log(tagsChecked);

    const advData = {
      name: event.target.name.value,
      sale: sale,
      price: event.target.prize.value,
      tags: event.target.tags.value,
      photo: event.target.photo.value,
    }

    console.log(advData);

    postAdv(advData).then(response => console.log(response));

  }

  return (
    <Layout handleNewAdvertButton={handleNewAdvertButton} handleLogout={handleLogout}>
      <div className="container newAdvertContainer">
        <h2>Crear nuevo anuncio</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del producto</label>
            <input type="text" name='name' id="name" required />
          <label htmlFor="sale">Seleccione compra o venta</label>
            <select name="sale" id="sale" required>
              <option value="comprar">Comprar</option>
              <option value="vender">Vender</option>
            </select>
          <label htmlFor="tags">Tags</label>
            <label htmlFor="lifestyle" id='lifestyle' name='lifestyle' ><input type="checkbox" name="lifestyle" id="lifestyle" />Lifestyle</label>
            <label htmlFor="work" id='work' name='work' ><input type="checkbox" name="work" id="work" />Work</label>
            <label htmlFor="motor" id='motor' name='motor' ><input type="checkbox" name="motor" id="motor" />Motor</label>
            <label htmlFor="mobile" id='mobile' name='mobile' ><input type="checkbox" name="mobile" id="mobile" />Mobile</label>
          <label htmlFor="prize">
            <input type="text" name="prize" id="prize" required/>
          </label>
          <label htmlFor="photo">Fotografía</label>
            <input type="file" name="photo" id="photo" />
          <button type="submit">Crear</button>
        </form>
      </div>
    </Layout>
  );
} 

export default NewAdvert;