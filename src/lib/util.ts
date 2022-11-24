export function getOptionClass(
	option: number,
	option1: number,
	option2: number,
	choices: number[],
) {
	if (option === option1 || option === option2)
		return 'bg-green-100 text-green-600';
	if (choices.includes(option)) return 'bg-rose-100 text-slate-800';
	return 'text-slate-400';
}
