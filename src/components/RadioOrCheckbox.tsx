import type React from 'react';
import classNames from 'classnames';

const RadioOrCheckbox = ({
	className,
	id,
	children,
	...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<>
			<input id={id} className="peer hidden" {...props} />
			<label
				htmlFor={id}
				className={classNames(
					className,
					'block border border-slate-800 cursor-pointer select-none py-2 px-4 text-center peer-checked:bg-rose-200 hover:bg-rose-100 transition ease-in-out delay-50',
				)}>
				{children}
			</label>
		</>
	);
};

export default RadioOrCheckbox;
