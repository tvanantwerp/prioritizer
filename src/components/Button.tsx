import classNames from 'classnames';

const Button = ({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={classNames(
				className,
				'border border-slate-800 disabled:opacity-50 py-2 px-4',
			)}
			{...props}
		/>
	);
};

export default Button;
