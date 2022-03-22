import React, {Component} from "react"
import Card from "./Card"
import styles from './styles.module.css'

//TODO
// Issues with how state manipulates card data, updates card in array instead of deleting all of the info
// Fix card spacing...I think delete button changed margin for some reason

export default class CardColumn extends Component {

    state = {
        columnTitle : '' || 'Edit...',
        cards: []
    }
    
    randomNumGen = () => {
        const nums = [1,2,3,4,5,6,7,8,9,0]
        let randomId = '1';
        for (let i = 0; i < nums.length; i++) {
            let chosenNum = Math.floor(Math.random() * i)
            randomId += nums[chosenNum]
        }
        return randomId
    }

    createCard = () => {
        const {cards} = this.state
        if (cards.length < 6) {
            const num = this.randomNumGen()
            this.setState({cards: [...cards, {id: num, card: <Card num={num} delete={this.deleteCard} />}]})
        } else {
            alert("Please create a new column or remove a card to create a new one.")
        }
    }

    deleteCard = (num) => {
        let oldCards = this.state.cards
        let newCards = oldCards.filter(item => {
            return +item.id != +num;
        })
        this.setState({cards: newCards})
    }

    render(){
        console.log('this.state', this.state.cards)
        return(
            <div className={`${styles.cardColumn}`}>
                <div style={{width: '100%',height: 30, display: 'flex', alignItems: 'center'}}>
                    <div style={{paddingLeft: 10}}>{this.state.columnTitle}</div>
                </div>
                {this.state.cards.map( c => {
                    return(c.card)
                })}
                <div style={{width: '100%', height: 30, display: 'flex'}}>
                    <button className={`${styles.createCardBtn}`} onClick={() => this.createCard()}>+ Create a card</button>
                </div>
            </div>
        )
    }
}