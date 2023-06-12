import { getReduxAdverts } from "../reactRedux/selectors";
import { addAdvertsSuccess } from "../reactRedux/actions";
import placeholder from "../assets/img/placeholder.png";
import { useDispatch, useSelector } from "react-redux";
import { getApiAdverts } from "../reactRedux/actions";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./common/Layout";
import "../styles/AdvertsPage.css";

function AdvertsPage() {
	const [nonFilterAdverts, setNonFilterAdverts] = useState(false);
	const dispatch = useDispatch();
	const adverts = useSelector(getReduxAdverts);

	useEffect(() => {
		dispatch(getApiAdverts(adverts));
	}, [dispatch, adverts]);

	const handleFilterSubmit = event => {
		event.preventDefault();

		let minPrize = parseFloat(event.target.minPrize.value);
		let maxPrize = parseFloat(event.target.maxPrize.value);

		if (isNaN(minPrize)) {
			minPrize = 0;
		}

		if (isNaN(maxPrize)) {
			maxPrize = Infinity;
		}

		const radioBuy = event.target[2].checked;
		const radioSell = event.target[3].checked;
		let operation = null;

		if (radioBuy) {
			operation = false;
		} else if (radioSell) {
			operation = true;
		}

		let filterAdverts = adverts.filter(
			advert => advert.price >= minPrize && advert.price <= maxPrize
		);

		if (operation === true) {
			filterAdverts = filterAdverts.filter(advert => advert.sale === operation);
		} else if (operation === false) {
			filterAdverts = filterAdverts.filter(advert => advert.sale === false);
		}

		filterAdverts.length === 0
			? setNonFilterAdverts(true)
			: dispatch(addAdvertsSuccess(filterAdverts));
	};

	return (
		<Layout>
			{!nonFilterAdverts ? (
				<div className="container AdvertsPage">
					<div className="title-container">
						<h2>Anuncios</h2>
					</div>
					{adverts.length ? (
						<>
							<div className="container adverts">
								<ul className="advertsList">
									{adverts.map(advert => (
										<li
											className="advertItem"
											key={advert.id}
										>
											<Link to={`/adverts/${advert.id}`}>
												<p>{advert.sale ? "Venta" : "Compra"}</p>
												<h3> {advert.name}.</h3>
												<h4>Precio {advert.price} € .</h4>
												{advert.photo ? (
													<img
														src={advert.photo}
														alt={"fotografía de" + advert.name}
													/>
												) : (
													<img
														src={placeholder}
														alt="Anuncio sin fotografía"
													/>
												)}
												<ul>
													{advert.tags.map(tag => (
														<li key={advert.id + tag}>{tag}</li>
													))}
												</ul>
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="container filterContainer">
								<h3>Seleccione los filtros a aplicar:</h3>
								<form onSubmit={handleFilterSubmit}>
									<div>
										<div className="inputs-price-container">
											<p>Seleccione el rango de precios: </p>
											<div>
												<div className="input-minPrize-container">
													<label htmlFor="minPrize">Precio mínimo: </label>
													<input
														type="text"
														pattern="[0-9]+"
														id="minPrize"
														name="minPrize"
													/>
												</div>
												<div className="input-maxPrize-container">
													<label htmlFor="maxPrize">Precio máximo: </label>
													<input
														type="text"
														pattern="[0-9]+"
														id="maxPrize"
														name="maxPrize"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="title-checks-container">
										<p>Seleccione tipo de operación: </p>
										<div className="inputs-operation-container">
											<input
												type="radio"
												id="buy"
												name="radio"
												value="buy"
											/>
											<label htmlFor="buy">Compra</label>
											<input
												type="radio"
												id="sell"
												name="radio"
												value="sell"
											/>
											<label htmlFor="sell">Venta</label>
											<input
												type="radio"
												id="buySell"
												name="radio"
												value="buySell"
												defaultChecked
											/>
											<label htmlFor="buySell">Compra y venta</label>
										</div>
									</div>
									<div className="button-filter-container">
										<button type="submit">Filtrar</button>
										<Link to={"/"}>
											<button>Restablece anuncios</button>
										</Link>
									</div>
								</form>
							</div>
						</>
					) : (
						<div className="nonAdvertsContainer">
							<h3>Todavía no existe ningún anuncio</h3>
							<Link to={"/adverts/new"}>
								<button>Sea usted el primero en publicar</button>
							</Link>
						</div>
					)}
				</div>
			) : (
				<div className="mismatchContainer">
					<p>Lo sentimos, su búsqueda no ha devuelto ninguna coincidencia</p>
					<Link to={"/"}>
						<button>Volver</button>
					</Link>
				</div>
			)}
		</Layout>
	);
}

export default AdvertsPage;
