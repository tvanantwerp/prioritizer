import Choice from './Choice';
import type { Item } from '../lib/sort';
import { useState, useRef } from 'react';

interface Props {
	items: Item[];
}

const Top = ({ items }: Props) => {
	const [top, setTop] = useState<number>(0);
	const choices = useRef<number[]>(
		Array.from({ length: items.length - 2 }, (_, i) => i + 2),
	);
	const [option1, setOption1] = useState<number>(0);
	const [option2, setOption2] = useState<number>(1);
	const [done, setDone] = useState(false);

	const updateChoice = (choice: number) => {
		console.log(top, choices.current, option1, option2);
		setTop(choice);
		const newChoice = choices.current.shift();

		if (choice === option1) {
			setOption2(newChoice!);
		} else {
			setOption1(newChoice!);
		}

		if (choices.current.length <= 0) {
			setDone(true);
		}
	};
	console.log(top, choices.current, option1, option2);

	return (
		<div>
			{!done && (
				<Choice
					items={items}
					option1={option1}
					option2={option2}
					updateChoice={updateChoice}
				/>
			)}
			<ol>
				{items
					.filter((_, i) => choices.current.includes(i))
					.map(item => {
						return <li key={item.name}>{item.name}</li>;
					})}
			</ol>
			{done && <p>The top priority is {items[top]?.name ?? 'missing'}.</p>}
		</div>
	);
};

export default Top;
