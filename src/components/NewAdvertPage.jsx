import { useNavigate } from "react-router-dom";
import Layout from "./common/Layout";
import { postAdv } from "../api/service";

function NewAdvertPage({handleLogout}) {

  const navigate = useNavigate();

  const handleNewAdvertButton = () => {
    navigate('/adverts/new');

  }

  const handleSubmit = event => {
    event.preventDefault();

    console.log(event);

    let sale = event.target[1].value;
    sale = sale === 'vender' ? true : false;

    let tagsArray = [];
    for(let i=2; i<6; i++){
      if(event.target[i].checked === true){
        tagsArray.push(event.target[i].name);
      }
    }

    console.log(event);

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
    <Layout handleNewAdvertButton={handleNewAdvertButton} handleLogout={handleLogout}>
      <div className="container newAdvertContainer">
        <h2>Crear nuevo anuncio</h2>
        <form onSubmit={handleSubmit} /* enctype="multipart/form-data" */>
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

export default NewAdvertPage;