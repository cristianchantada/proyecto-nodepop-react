import { NavLink } from "react-router-dom";
import "../../styles/Error404.css";
import Layout from "./Layout";

function Error404() {
	return (
		<Layout>
			<div className="container404">
				<h2>Error 404</h2>
				<p>
					Lo siento, la página que estás buscando no se encuentra disponible.
				</p>
				<NavLink to="/">
					<button>Volver a NodePop</button>
				</NavLink>
			</div>
		</Layout>
	);
}

export default Error404;
