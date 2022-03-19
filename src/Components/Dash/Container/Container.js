import React, {useState, useEffect} from "react"
import styles from './styles.module.css'
import CardColumn from "./Card/CardColumn"

export const Container = () => {
    return(
        <div style={{background: 'red', height: '100vh', width: '100vw'}}>
            <div className={`${styles.container}`}>
                <CardColumn />
            </div>
        </div>
    )
}