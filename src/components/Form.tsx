import type { Item } from '../lib/sort';
import { createItemsList } from '../lib/sort';

interface Props {
	setComparing: (comparing: boolean) => void;
	setItems: (items: Item[]) => void;
	sortType: 'top' | 'all';
	setSortType: (sortType: 'top' | 'all') => void;
}

const Form = ({ setComparing, setItems, sortType, setSortType }: Props) => {
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
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
				<label htmlFor="text-input">Enter Items, One Per Line</label>
				<textarea
					id="text-input"
					onChange={e => setItems(createItemsList(e.target.value))}
				/>
				<button type="submit">Start</button>
			</form>
		</div>
	);
};

export default Form;
