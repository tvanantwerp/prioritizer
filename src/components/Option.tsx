interface Props {
	label: string;
	handler: () => void;
}

const Option = ({ label, handler }: Props) => {
	return (
		<button className="border border-slate-800" onClick={handler}>
			{label}
		</button>
	);
};

export default Option;
