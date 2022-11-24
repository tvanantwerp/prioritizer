import Button from './Button';

interface Props {
	label: string;
	handler: () => void;
}

const Option = ({ label, handler }: Props) => {
	return <Button onClick={handler}>{label}</Button>;
};

export default Option;
