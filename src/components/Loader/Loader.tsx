import React from "react"
import classNames from "classnames"
import styles from "./Loader.module.scss"

type Props = {
  width?: string
  color?: "black" | "white" | "grey"
  center?: boolean
}
const Loader: React.FC<Props> = ({
  width = "24px",
  center,
  color = "white",
}) => {
  const valueClass = classNames(styles.loader__value, styles[color])

  const rootClasses = classNames(styles.wrapper, { [styles.center]: center })
  return (
    <div className={rootClasses} style={{ width }}>
      <svg className={styles.loader} viewBox="0 0 24 24">
        <circle className={valueClass} cx="12" cy="12" r="10" />
      </svg>
    </div>
  )
}

export default Loader
