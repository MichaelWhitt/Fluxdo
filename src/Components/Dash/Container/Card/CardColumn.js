import React, {Component} from "react"
import styles from './styles.module.css'

export default class Card extends Component {
    render(){
        return(
            <div className={`${styles.cardHolder}`}>
                    <div>Logo</div>
                    <div>Menu Item 1</div>
                    <div>Menu Item 2</div>
                    <div>Menu Item 3</div>
                    <div>Menu Item 4</div>
            </div>
        )
    }
}