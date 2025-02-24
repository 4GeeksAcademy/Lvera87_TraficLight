import React, { useState } from "react";

//creaUnico componente llamado Home
const Home = () => {

	// uso de useState.
	const [rojo, setRojo] = useState("secondary")
	const [amarillo, setAmarillo] = useState("secondary")
	const [azul, setAzul] = useState("secondary")
	const [shadow, setShadow] = useState("")

	// Funciones de Activacion de colores.
	const onrojo = () => {
		setRojo("danger")
		setAmarillo("secondary")
		setAzul("secondary")
		setShadow("0 0 20px red")
	}
	const onAmarillo = () => {
		setRojo("secondary")
		setAmarillo("warning")
		setAzul("secondary")
		setShadow("0 0 20px yellow")
	}
	const onAzul = () => {
		setRojo("secondary")
		setAmarillo("secondary")
		setAzul("success")
		setShadow("0 0 20px green")
	}

	return (
		<div className="text-center container bg-dark p-2 mt-2 border border-secondary roubd rounded" style={{ width: "135px" }}>
			<div onClick={onrojo} className={`bg-${rojo} rounded-circle m-2`} style={{ height: "100px", width: "100px", boxShadow: rojo === "danger" ? shadow : "" }}></div>
			<div onClick={onAmarillo} className={`bg-${amarillo} rounded-circle m-2`} style={{ height: "100px", width: "100px", boxShadow: amarillo === "warning" ? shadow : "" }}></div>
			<div onClick={onAzul} className={`bg-${azul} rounded-circle m-2`} style={{ height: "100px", width: "100px", boxShadow: azul === "success" ? shadow : "" }}></div>
		</div>
	);
};

export default Home;