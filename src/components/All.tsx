import Choice from './Choice';
import type { Item } from '../lib/sort';
import classNames from 'classnames';
import { useRef, useState } from 'react';

function findFirstPosition(items: Item[], pos: number): number | null {
	if (items.length <= pos) return null;
	if (items[pos]!.value === items[pos + 1]!.value) {
		return pos;
	} else {
		return findFirstPosition(items, pos + 1);
	}
}

interface Props {
	items: Item[];
}

const All = ({ items }: Props) => {
	const list = useRef<Item[]>(items);
	const [option1, setOption1] = useState<number>(0);
	const [option2, setOption2] = useState<number>(1);
	const [done, setDone] = useState(false);

	const incrementValue = (choice: number) => {
		list.current[choice]!.value += 1;
	};

	const nextLoop = () => {
		list.current.sort((a, b) => b.value - a.value);
		const pos = findFirstPosition(list.current, 0);
		console.log(pos);
		if (pos !== null) {
			setOption1(pos);
			setOption2(pos + 1);
		} else {
			setDone(true);
		}
	};

	const updateOptions = (op1: number, op2: number) => {
		const newOption1 = op1 + 2;
		const newOption2 = op2 + 2;
		if (newOption2 >= list.current.length) {
			if (
				new Set(list.current.map(item => item.value)).size ===
				list.current.length
			) {
				setDone(true);
			} else {
				nextLoop();
			}
		} else if (
			list.current[newOption1]!.value !== list.current[newOption2]!.value
		) {
			updateOptions(op1 + 1, op2 + 1);
		} else {
			setOption1(newOption1);
			setOption2(newOption2);
		}
	};

	const updateChoice = (choice: number) => {
		incrementValue(choice);
		updateOptions(option1, option2);
	};

	console.table(list);
	return (
		<div>
			{!done && (
				<Choice
					items={list.current}
					option1={option1}
					option2={option2}
					updateChoice={updateChoice}
				/>
			)}
			{done && (
				<p className="text-center text-xl border border-slate-800 w-full py-2 px-4">
					All items sorted!
				</p>
			)}
			<ol className="my-8 columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
				{list.current.map((item, i) => {
					return (
						<li
							className={classNames(
								'text-center py-1 px-2 mb-4',
								option1 === i || option2 === i
									? 'bg-green-100 text-green-600'
									: '',
							)}
							key={item.name}>
							{`${item.value}: ${item.name}`}
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default All;
