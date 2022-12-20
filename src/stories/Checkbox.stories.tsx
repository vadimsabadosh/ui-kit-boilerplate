import React from "react";
import Checkbox from "../components/Checkbox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	component: Checkbox,
	title: "Checkbox",
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
	label: "Checkbox",
	id: "checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Default.args,
	disabled: true,
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
	...Default.args,
	defaultChecked: true,
};
