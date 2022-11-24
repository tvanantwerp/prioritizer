import type { Item } from '../lib/sort';
import { useState } from 'react';
import Form from './Form';
import Top from './Top';

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
			{comparing && sortType === 'top' && (
				<div>
					<button
						className="border border-slate-800"
						onClick={() => {
							setItems([]);
							setComparing(false);
						}}>
						Start Over
					</button>
					<Top items={items} />
				</div>
			)}
			{items.length > 0 && (
				<ul className="mt-48">
					{items.map(item => (
						<li key={item.name}>{item.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Comparison;
