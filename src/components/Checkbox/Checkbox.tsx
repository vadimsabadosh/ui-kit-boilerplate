import React from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.css";
import { TCheckbox } from "./Checkbox.types";

const Checkbox: React.FC<TCheckbox> = (props) => {
	const {
		id,
		label,
		value,
		onChange,
		onBlur,
		checked,
		name,
		inputRef,
		disabled,
		register,
		error,
		defaultChecked,
	} = props;

	const classLabel = classNames(
		styles.checkbox__label,
		{ [styles.disabled]: disabled },
		{ [styles.error]: error?.[name!] }
	);
	const classCheckbox = classNames(styles.checkbox, {
		[styles.disabled]: disabled,
	});
	const hasRegister = register ? { ...register(name) } : {};
	const inputProps = {
		type: "checkbox",
		id: `${name}_${id}`,
		className: styles.checkbox__input,
		value,
		onBlur,
		onChange,
		checked,
		name,
		ref: inputRef,
		disabled,
		defaultChecked,
		...hasRegister,
	};
	return (
		<div className={classCheckbox}>
			<input {...inputProps} />
			<label htmlFor={`${name}_${id}`} className={classLabel}>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
