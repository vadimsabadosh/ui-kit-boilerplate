import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "../components/Button"

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "This is Button",
  onClick: () => console.log("This is Button"),
  variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Primary.args,
  variant: "outlined",
}

export const Empty = Template.bind({})
Empty.args = {
  ...Primary.args,
  variant: "empty",
}

export const Danger = Template.bind({})
Danger.args = {
  ...Primary.args,
  variant: "danger",
}

export const Block = Template.bind({})
Block.args = {
  ...Primary.args,
  block: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Primary.args,
  isDisable: true,
}

export const LoadingButton = Template.bind({})
LoadingButton.args = {
  ...Primary.args,
  isLoading: true,
}
