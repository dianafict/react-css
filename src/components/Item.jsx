import { useState } from "react";

export function Item({ emoji }) {
	const [zoomed, setZoomed] = useState(false);

	return (
		<li className='item'>
			<span className={`emoji ${zoomed ? "zoomed" : ""}`}>{emoji}</span>
			<button
				style={{ background: "blue", border: "5px solid yellow" }}
				className='btn'
				onClick={() => {
					setZoomed(wasZoomed => !wasZoomed);
				}}
			>
				{zoomed ? "Oddal" : "Przybliż"}
			</button>
		</li>
	);
}
