import type { Item } from '../lib/sort';
import { createItemsList } from '../lib/sort';
import { useState } from 'react';
import Option from './Option';

const Comparison = () => {
	const [items, setItems] = useState<Item[]>([]);
	const [sortType, setSortType] = useState<'top' | 'all'>('top');

	return (
		<div>
			<form>
				<fieldset>
					<legend>Type of Sort</legend>
					<input
						id="top-sort"
						type="radio"
						name="sort-type"
						value="top"
						checked={sortType === 'top'}
						onChange={() => setSortType('top')}
					/>
					<label htmlFor="top-sort">Top</label>
					<input
						id="all-sort"
						type="radio"
						name="sort-type"
						value="all"
						checked={sortType === 'all'}
						onChange={() => setSortType('all')}
					/>
					<label htmlFor="all-sort">All</label>
				</fieldset>
				<label htmlFor="text-input">Enter Items, One Per Line</label>
				<textarea
					id="text-input"
					onChange={e => setItems(createItemsList(e.target.value))}
				/>
			</form>
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
