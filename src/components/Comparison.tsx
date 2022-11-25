import type { Item } from '../lib/sort';
import { useState } from 'react';
import Form from './Form';
import Top from './Top';
import All from './All';
import Button from './Button';

const Comparison = () => {
	const [comparing, setComparing] = useState(false);
	const [items, setItems] = useState<Item[]>([]);
	const [sortType, setSortType] = useState<'top' | 'all'>('top');

	return (
		<div>
			{!comparing && (
				<Form
					items={items}
					setComparing={setComparing}
					setItems={setItems}
					sortType={sortType}
					setSortType={setSortType}
				/>
			)}
			{comparing && sortType === 'top' && (
				<div>
					<Top items={items} />
				</div>
			)}
			{comparing && sortType === 'all' && (
				<div>
					<All items={items} />
				</div>
			)}
			{comparing && (
				<Button
					onClick={() => {
						setItems([]);
						setComparing(false);
					}}>
					Start Over
				</Button>
			)}
		</div>
	);
};

export default Comparison;
