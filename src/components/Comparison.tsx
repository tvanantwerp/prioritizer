import { Item, randomSort } from '../lib/sort';
import { useEffect, useState } from 'react';
import Form from './Form';
import Top from './Top';

const Comparison = () => {
	const [comparing, setComparing] = useState(false);
	const [items, setItems] = useState<Item[]>([]);
	const [sortType, setSortType] = useState<'top' | 'all'>('top');

	useEffect(() => {
		if (comparing) {
			setItems(randomSort(items));
		}
	}, [comparing]);

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
			{comparing && sortType === 'top' && <Top items={items} />}
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
