import React from 'react'
import styles from './style.module.css';
import classNames from "classnames"

export default function index({ children, color }) {
    return (
        <button className={classNames(styles.button, {
            [styles.red]: color === "red",
            [styles.black]: color === "black"
        })}>{children}</button>
    )
}
