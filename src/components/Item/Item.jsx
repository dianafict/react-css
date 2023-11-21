import { useState } from "react";
import "./Item.module.css";

export function Item({ emoji }) {
	const [zoomed, setZoomed] = useState(false);

	//class 2 words: "border-radius":"2px" or borderRadius

	// wersja zwykla jsx - className='btn'
	// wersja modules - className={styles.btn}

	return (
		<li className='item'>
			<span className={`emoji ${zoomed ? "zoomed" : ""}`}>{emoji}</span>

			<button
				// style={{ background: "blue", border: "5px solid yellow" }}
				// className='btn'

				className={styles.btn}
				onClick={() => {
					setZoomed(wasZoomed => !wasZoomed);
				}}
			>
				{zoomed ? "Oddal" : "Przybliż"}
			</button>
		</li>
	);
}
