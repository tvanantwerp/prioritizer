export interface Item {
	name: string;
	value: number;
}

export const randomSort = (list: string[]): string[] => {
	return list.sort(() => {
		return Math.round(2 * (Math.random() - 0.5));
	});
};

export const createItemsList = (rawText: string): Item[] => {
	return rawText
		.split('\n')
		.filter(item => item !== '')
		.map(item => ({
			name: item,
			value: 0,
		}));
};
