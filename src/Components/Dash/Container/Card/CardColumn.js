import React, {Component} from "react"
import Card from "./Card"
import styles from './styles.module.css'

//TODO
// Find a better way to remove card from list-- unique ID, maybe RNG or hash?
// Use this to delete cards from list
// Fix card spacing...I think delete button changed margin for some reason

export default class CardColumn extends Component {

    state = {
        columnTitle : '' || 'Edit...',
        cards: [],
        cardInfo: ''
    }

   buildCards = (cards) => {
       let cardArr = []
       for (let c = 0; c < this.state.cards.length; c++){
           cardArr.push(this.state.cards[c])
       }
       return cardArr
    }
    
    createCard = () => {
        const {cards} = this.state
        if (cards.length < 7) {
            const num = cards.length
            this.setState({cards: [...cards, <Card num={num} delete={this.deleteCard}/>]})
        } else {
            alert("Please create a new column or remove a card to create a new one.")
        }
    }

    deleteCard = (num) => {
        const newCards = this.state.cards
        newCards.splice(num, 1)
        this.setState({cards: newCards})
    }

    render(){
        console.log('this.state', this.state.cards)
        return(
            <div className={`${styles.cardColumn}`}>
                <div style={{width: '100%',height: 30, display: 'flex', alignItems: 'center'}}>
                    <div style={{paddingLeft: 10}}>{this.state.columnTitle}</div>
                </div>
                {this.buildCards(this.state.cards)}
                <div style={{width: '100%', height: 30, display: 'flex'}}>
                    <button className={`${styles.createCardBtn}`} onClick={() => this.createCard()}>+ Create a card</button>
                </div>
            </div>
        )
    }
}