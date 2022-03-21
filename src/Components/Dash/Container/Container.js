import React from "react"
import styles from './styles.module.css'
import CardColumn from "./Card/CardColumn"

export class Container extends React.Component {


render () {
    return(
        <div className={`${styles.container}`}>
            <div style={{display: 'flex'}}>
                <CardColumn />
            </div>
        </div>
    )
}
}