import React, {Component} from "react"
import styles from './styles.module.css'

export default class Card extends Component {

    state={
        cardInfo: ''
    }

    saveCard = () => {
        
    }

    render(){
        return(
            <div className={`${styles.card}`}>
                    {this.state.cardInfo}
                    {this.state.cardInfo ? null : (
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <textarea className={`${styles.cardInput}`} rows={4} type='text' placeholder="Type here..." />
                            <button className={`${styles.cardSaveBtn}`} style={{width: '100%'}}>Save</button>
                        </div>
                    )}
                    
            </div>
        )
    }
}