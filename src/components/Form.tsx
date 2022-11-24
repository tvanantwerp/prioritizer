import type React from 'react';
import type { Item } from '../lib/sort';
import { randomSort } from '../lib/sort';
import { createItemsList } from '../lib/sort';

interface Props {
	setComparing: React.Dispatch<React.SetStateAction<boolean>>;
	setItems: React.Dispatch<React.SetStateAction<Item[]>>;
	sortType: 'top' | 'all';
	setSortType: React.Dispatch<React.SetStateAction<'top' | 'all'>>;
}

const Form = ({ setComparing, setItems, sortType, setSortType }: Props) => {
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					setItems(prev => randomSort(prev));
					setComparing(true);
				}}>
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
				<label htmlFor="text-input" className="block">
					Enter Items, One Per Line
				</label>
				<textarea
					className="block w-full h-48 mb-8"
					id="text-input"
					onChange={e => setItems(createItemsList(e.target.value))}
				/>
				<button className="border border-slate-800" type="submit">
					Start
				</button>
			</form>
		</div>
	);
};

export default Form;
