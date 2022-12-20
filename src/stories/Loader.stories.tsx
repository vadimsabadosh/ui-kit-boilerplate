import React from "react";
import Loader from "../components/Loader";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	component: Loader,
	title: "Loader",
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const White = Template.bind({});
White.args = {
	width: "100px",
	center: false,
	color: "white",
};

export const Black = Template.bind({});
Black.args = {
	width: "100px",
	center: false,
	color: "black",
};

export const Grey = Template.bind({});
Grey.args = {
	width: "100px",
	center: false,
	color: "grey",
};

export const Centered = Template.bind({});
Centered.args = {
	width: "100px",
	center: true,
	color: "black",
};
