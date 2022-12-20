export type TCheckbox = {
	id: string;
	label: string;
	value?: string;
	name?: string;
	checked?: boolean;
	error?: any;
	disabled?: boolean;
	inputRef?: any;
	register?: (
		Ref: any,
		RegisterOptions?: any
	) => { onChange: any; onBlur: any; name: string; ref: any };
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	defaultChecked?: boolean;
};
