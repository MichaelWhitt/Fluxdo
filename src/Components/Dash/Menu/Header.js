import { render } from "@testing-library/react"
import React, {useState, useEffect} from "react"
import styles from './styles.module.css'

export const Header = () => {
    return(
        <div className={`${styles.container}`}>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                <div>Logo</div>
                <div>Menu Item 1</div>
                <div>Menu Item 2</div>
                <div>Menu Item 3</div>
                <div>Menu Item 4</div>
            </div>
        </div>
    )
}