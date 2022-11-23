import type { Item } from '../lib/sort';
import { useState } from 'react';
import Form from './Form';

const Comparison = () => {
	const [comparing, setComparing] = useState(false);
	const [items, setItems] = useState<Item[]>([]);
	const [sortType, setSortType] = useState<'top' | 'all'>('top');

	return (
		<div>
			{!comparing && (
				<Form
					setComparing={setComparing}
					setItems={setItems}
					sortType={sortType}
					setSortType={setSortType}
				/>
			)}
			{items.length > 0 && (
				<ul>
					{items.map(item => (
						<li key={item.name}>{item.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Comparison;
