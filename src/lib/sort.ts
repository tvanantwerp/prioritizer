export interface Item {
	name: string;
	value: number;
}

export function randomSort<T>(arr: T[]): T[] {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = arr[i];
		arr[i] = arr[j]!;
		arr[j] = temp!;
	}
	return arr;
}

export const createItemsList = (rawText: string): Item[] => {
	return rawText
		.split('\n')
		.filter(item => item !== '')
		.map(item => ({
			name: item,
			value: 0,
		}));
};
