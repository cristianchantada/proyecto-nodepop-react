import { useNavigate } from "react-router-dom";
import { postAdv } from "../api/service";
import Layout from "./common/Layout";
import { useState } from "react";

function NewAdvertPage({handleLogout, isLogged}) {

  const[advData, setAdvData] = useState({
    name: '',
    sale: false,
    price: '',
    tags: [],
    photo: ''
  });

  console.log(advData.tags)

  const navigate = useNavigate();

  const handleChange = (event) => {

    if(event.target.name === 'name'){
      setAdvData({...advData, name: event.target.value})
    }
    if(event.target.name === 'sale'){
      setAdvData({...advData, sale: event.target.value})
    }
    if(event.target.name === 'price'){
      setAdvData({...advData, price: event.target.value})
    }
    if(event.target.name === 'photo'){
      setAdvData({...advData, photo: event.target.photo.files[0]})
    }
    if(event.target.name === 'lifestyle' || event.target.name === 'motor' || event.target.name === 'work' || event.target.name === 'mobile'){
      
      let newAdvDataTags = advData.tags
      if(event.target.checked === true){

        console.log(newAdvDataTags);
        newAdvDataTags.push(event.target.name);
        setAdvData({...advData, tags: newAdvDataTags});

      } else {
        
        newAdvDataTags = advData.tags.filter((tag) => tag !== event.target.name )
        setAdvData({...advData , tags: newAdvDataTags});
      }

     }
  }

  const handleSubmit = event => {
    event.preventDefault();
    postAdv(advData).then(response => navigate(`/adverts/${response.id}`));
  }

  const desabilitation = !advData.name || !advData.price || advData.tags.length === 0;

  return (
    <Layout isLogged={isLogged} handleLogout={handleLogout}>
      <div className="container newAdvertContainer">
        <h2>Crear nuevo anuncio</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del producto</label>
            <input value={advData.name} onChange={handleChange} type="text" name='name' id="name" required />
          <label htmlFor="sale">Seleccione compra o venta</label>
            <select value={advData.sale} onChange={handleChange} name="sale" id="sale" required>
              <option value={false}>Comprar</option>
              <option value={true}>Vender</option>
            </select>
          <label htmlFor="tags">Tags</label>
            <label htmlFor="lifestyle" id='lifestyle' name='lifestyle' ><input checked={advData.tags.lifestyle} onChange={handleChange} type="checkbox" name="lifestyle" id="lifestyle" />Lifestyle</label>
            <label htmlFor="work" id='work' name='work' ><input checked={advData.tags.work} onChange={handleChange} type="checkbox" name="work" id="work" />Work</label>
            <label htmlFor="motor" id='motor' name='motor' ><input checked={advData.tags.motor} onChange={handleChange} type="checkbox" name="motor" id="motor" />Motor</label>
            <label htmlFor="mobile" id='mobile' name='mobile' ><input checked={advData.tags.mobile} onChange={handleChange} type="checkbox" name="mobile" id="mobile" />Mobile</label>
          <label htmlFor="price">
            <input value={advData.price} onChange={handleChange} type="text" name="price" id="price" required/>
          </label>
          <label htmlFor="photo">Fotografía</label>
            <input type="file" name="photo" id="photo" />
          <button type="submit" disabled={desabilitation}>Crear</button>
        </form>
      </div>
    </Layout>
  );
} 

export default NewAdvertPage;