import type React from 'react';
import type { Item } from '../lib/sort';
import { randomSort } from '../lib/sort';
import { createItemsList } from '../lib/sort';

interface Props {
	items: Item[];
	setComparing: React.Dispatch<React.SetStateAction<boolean>>;
	setItems: React.Dispatch<React.SetStateAction<Item[]>>;
	sortType: 'top' | 'all';
	setSortType: React.Dispatch<React.SetStateAction<'top' | 'all'>>;
}

const Form = ({
	items,
	setComparing,
	setItems,
	sortType,
	setSortType,
}: Props) => {
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					setItems(prev => randomSort(prev));
					setComparing(true);
				}}>
				<fieldset className="border border-slate-800 p-4 pt-2 mb-4">
					<legend>Type of Sort</legend>
					<div className="grid gap-8 grid-cols-2 justify-items-center">
						<div>
							<input
								id="top-sort"
								type="radio"
								name="sort-type"
								value="top"
								checked={sortType === 'top'}
								onChange={() => setSortType('top')}
							/>
							<label htmlFor="top-sort">Top</label>
						</div>
						<div>
							<input
								id="all-sort"
								type="radio"
								name="sort-type"
								value="all"
								checked={sortType === 'all'}
								onChange={() => setSortType('all')}
							/>
							<label htmlFor="all-sort">All</label>
						</div>
					</div>
				</fieldset>
				<label htmlFor="text-input" className="block mb-2">
					Enter Items, One Per Line
				</label>
				<textarea
					className="block border border-slate-800 p-2 w-full h-48 mb-8"
					id="text-input"
					onChange={e => setItems(createItemsList(e.target.value))}
				/>
				<button
					className="border border-slate-800 disabled:opacity-50 py-2 px-4 w-full"
					type="submit"
					disabled={items.length < 2}>
					Start
				</button>
			</form>
		</div>
	);
};

export default Form;
