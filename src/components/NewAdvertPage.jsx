import { advertCreated, getApiTags } from "../reactRedux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getReduxTags } from "../reactRedux/selectors";
import { useState, useEffect } from "react";
import Layout from "./common/Layout";
import "../styles/NewAdvertPage.css";

function NewAdvertPage() {
	const [advData, setAdvData] = useState({
		name: "",
		sale: false,
		price: "",
		tags: [],
		photo: null
	});

	const dispatch = useDispatch();
	const tags = useSelector(getReduxTags);

	useEffect(() => {
		dispatch(getApiTags());
	}, [dispatch]);

	const handleChange = event => {
		if (event.target.name === "name") {
			setAdvData({ ...advData, name: event.target.value });
		}
		if (event.target.name === "sale") {
			setAdvData({ ...advData, sale: event.target.value });
		}
		if (event.target.name === "price") {
			setAdvData({ ...advData, price: event.target.value });
		}
		if (event.target.name === "photo") {
			setAdvData({ ...advData, photo: event.target.files[0] });
		}
		if (tags.includes(event.target.name)) {
			let newAdvDataTags = advData.tags;
			if (event.target.checked === true) {
				newAdvDataTags.push(event.target.name);
				setAdvData({ ...advData, tags: newAdvDataTags });
			} else {
				newAdvDataTags = advData.tags.filter(tag => tag !== event.target.name);
				setAdvData({ ...advData, tags: newAdvDataTags });
			}
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();
		dispatch(advertCreated(advData));
	};

	const buttonDisabled =
		!advData.name || !advData.price || advData.tags.length === 0;

	return (
		<Layout>
			<div className="container newAdvertContainer">
				<h2>Crear nuevo anuncio</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Nombre del producto</label>
					<input
						value={advData.name}
						onChange={handleChange}
						type="text"
						name="name"
						id="name"
						required
					/>
					<label htmlFor="sale">Seleccione compra o venta</label>
					<select
						value={advData.sale}
						onChange={handleChange}
						name="sale"
						id="sale"
						required
					>
						<option value={false}>Comprar</option>
						<option value={true}>Vender</option>
					</select>
					<label htmlFor="tags">
						Tags:
						{tags.map(tag => (
							<label
								htmlFor={tag}
								id={tag}
								name={tag}
								key={tag}
							>
								&nbsp;
								<input
									checked={advData.tags.lifestyle}
									onChange={handleChange}
									type="checkbox"
									name={tag}
									id={tag}
								/>
								{tag}
							</label>
						))}
					</label>
					<label htmlFor="price">Precio</label>
					<input
						value={advData.price}
						onChange={handleChange}
						type="text"
						name="price"
						id="price"
						required
					/>
					<label htmlFor="photo">Subir una fotografía</label>
					<input
						type="file"
						name="photo"
						id="photo"
						onChange={handleChange}
					/>
					<button
						type="submit"
						disabled={buttonDisabled}
					>
						Crear
					</button>
				</form>
			</div>
		</Layout>
	);
}

export default NewAdvertPage;
