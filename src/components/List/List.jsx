import { Item } from "../Item/Item";
import styles from "./List.module.css";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
	return (
		<ul className='list'>
			{emojis.map(emoji => (
				<Item
					key={emoji}
					emoji={emoji}
				/>
			))}
		</ul>
	);
}
