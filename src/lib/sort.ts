interface Item {
	name: string;
	value: number;
}

const randomSort = (list: string[]): string[] => {
	return list.sort(() => {
		return Math.round(2 * (Math.random() - 0.5));
	});
};

export const createItemsList = (rawText: string): Item[] => {
	return randomSort(rawText.split('\n')).map((item) => ({
		name: item,
		value: 0
	}));
};