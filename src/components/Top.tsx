import Choice from './Choice';
import type { Item } from '../lib/sort';
import classNames from 'classnames';
import { useState, useRef } from 'react';

interface Props {
	items: Item[];
}

function getOptionClass(
	option: number,
	option1: number,
	option2: number,
	choices: number[],
) {
	if (option === option1 || option === option2)
		return 'bg-green-100 text-green-600';
	if (choices.includes(option)) return 'bg-orange-100 text-slate-800';
	return 'text-slate-400';
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
		setTop(choice);

		if (choices.current.length === 0) {
			setDone(true);
		}

		const newChoice = choices.current.shift();
		if (choice === option1) {
			setOption2(newChoice!);
		} else {
			setOption1(newChoice!);
		}
	};

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
			{done && (
				<p className="text-center text-xl border border-slate-800 w-full py-2 px-4">
					The top priority is {items[top]?.name ?? 'missing'}.
				</p>
			)}
			<ol className="my-8 columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
				{items.map((item, i) => {
					return (
						<li
							className={classNames(
								'py-1 px-2 mb-4',
								getOptionClass(i, option1, option2, choices.current),
							)}
							key={item.name}>
							{item.name}
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Top;
