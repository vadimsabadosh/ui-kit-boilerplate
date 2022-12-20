import React from "react"
import classnames from "classnames"
import Loader from "../Loader"
import styles from "./Button.module.scss"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "outlined" | "empty" | "danger"
  block?: boolean
  classname?: string
  isDisable?: boolean
  isLoading?: boolean
  type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  block,
  classname = "",
  isLoading,
  isDisable = false,
  type = "button",
}) => {
  const rootClass = classnames(styles.btn, styles[variant], classname, {
    [styles._block]: block,
  })

  return (
    <button
      onClick={onClick}
      className={rootClass}
      type={type}
      disabled={isDisable}
    >
      {isLoading ? <Loader width="20px" center /> : children}
    </button>
  )
}

export default Button
