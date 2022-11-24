import type React from 'react';
import type { Item } from '../lib/sort';
import { randomSort } from '../lib/sort';
import { createItemsList } from '../lib/sort';
import Button from './Button';
import RadioOrCheckbox from './RadioOrCheckbox';

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
							<RadioOrCheckbox
								id="top-sort"
								type="radio"
								name="sort-type"
								value="top"
								checked={sortType === 'top'}
								onChange={() => setSortType('top')}>
								Top Priority Only
							</RadioOrCheckbox>
						</div>
						<div>
							<RadioOrCheckbox
								id="all-sort"
								type="radio"
								name="sort-type"
								value="all"
								checked={sortType === 'all'}
								onChange={() => setSortType('all')}>
								Sort All Priorities
							</RadioOrCheckbox>
						</div>
					</div>
				</fieldset>
				<label htmlFor="text-input" className="block mb-2">
					Enter Items, One Per Line
				</label>
				<textarea
					autoComplete="off"
					className="block border border-slate-800 p-2 w-full h-48 mb-8"
					id="text-input"
					onChange={e => setItems(createItemsList(e.target.value))}
				/>
				<Button className="w-full" type="submit" disabled={items.length < 2}>
					Start
				</Button>
			</form>
		</div>
	);
};

export default Form;
