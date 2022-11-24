import type { Item } from '../lib/sort';
import Option from './Option';

interface Props {
	items: Item[];
	option1: number;
	option2: number;
	updateChoice: (choice: number) => void;
}

const Choice = ({ items, option1, option2, updateChoice }: Props) => {
	return items.length >= 2 ? (
		<div className="gap-4 grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
			<Option
				label={items[option1]?.name ?? 'Missing Choice'}
				handler={() => updateChoice(option1)}
			/>
			<Option
				label={items[option2]?.name ?? 'Missing Choice'}
				handler={() => updateChoice(option2)}
			/>
		</div>
	) : null;
};

export default Choice;
