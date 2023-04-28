import { useNavigate } from "react-router-dom";
import Layout from "./common/Layout";
import { postAdv } from "../api/service";
import { useState } from "react";

function NewAdvertPage({handleLogout, isLogged}) {

  const[inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleNewAdvertButton = () => {
    navigate('/adverts/new');
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);

    console.log(event.target.value);
    console.log(event.target.checked);
  }

  const handleSubmit = event => {
    event.preventDefault();

    let sale = event.target[1].value;
    sale = sale === 'vender' ? true : false;

    let tagsArray = [];
    for(let i=2; i<6; i++){
      if(event.target[i].checked === true){
        tagsArray.push(event.target[i].name);
      }
    }

    const advData = {
      name: event.target.name.value,
      sale: sale,
      price: parseFloat(event.target.prize.value),
      tags: [tagsArray],
      photo: event.target.photo.files[0]
    }

    postAdv(advData).then(response => navigate(`/adverts/${response.id}`));
    
  }

  return (
    <Layout isLogged={isLogged} handleLogout={handleLogout}>
      <div className="container newAdvertContainer">
        <h2>Crear nuevo anuncio</h2>
        <form onSubmit={handleSubmit} /* enctype="multipart/form-data" */>
          <label htmlFor="name">Nombre del producto</label>
            <input value={inputValue} onChange={handleChange} type="text" name='name' id="name" required />
          <label htmlFor="sale">Seleccione compra o venta</label>
            <select onChange={handleChange} name="sale" id="sale" required>
              <option value="comprar">Comprar</option>
              <option value="vender">Vender</option>
            </select>
          <label htmlFor="tags">Tags</label>
            <label htmlFor="lifestyle" id='lifestyle' name='lifestyle' ><input onChange={handleChange} type="checkbox" name="lifestyle" id="lifestyle" />Lifestyle</label>
            <label htmlFor="work" id='work' name='work' ><input onChange={handleChange} type="checkbox" name="work" id="work" />Work</label>
            <label htmlFor="motor" id='motor' name='motor' ><input onChange={handleChange} type="checkbox" name="motor" id="motor" />Motor</label>
            <label htmlFor="mobile" id='mobile' name='mobile' ><input onChange={handleChange} type="checkbox" name="mobile" id="mobile" />Mobile</label>
          <label htmlFor="prize">
            <input onChange={handleChange} type="text" name="prize" id="prize" required/>
          </label>
          <label htmlFor="photo">Fotografía</label>
            <input type="file" name="photo" id="photo" />
          <button type="submit">Crear</button>
        </form>
      </div>
    </Layout>
  );
} 

export default NewAdvertPage;