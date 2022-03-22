import React, {Component} from "react"
import Card from "./Card"
import styles from './styles.module.css'

//TODO
// Fix card spacing...I think delete button changed margin for some reason

export default class CardColumn extends Component {

    state = {
        columnTitle : '',
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
        if (cards.length < 7) {
            const num = this.randomNumGen()
            this.setState({cards: [...cards, {id: num, card: <Card num={num} key={num} delete={this.deleteCard} />}]})
        } else {
            alert("Please create a new column or remove a card to create a new one.")
        }
    }

    deleteCard = (num) => {
        let oldCards = this.state.cards
        let newCards = oldCards.filter(i => {
            return i.id != num;
        })
        this.setState({cards: newCards})
        console.log(this.state)
    }

    editColumnTitle = (e) => {
        this.setState({columnTitle: e.target.value})
    }

    render(){
        return(
            <div className={`${styles.cardColumn}`}>
                <div style={{width: '100%',height: 30, display: 'flex', alignItems: 'center', margin: '10px 0 15px 0'}}>
                    <input 
                        className={`${styles.columnTitle}`}
                        onClick={this.editColumnTitle}
                        placeholder={'Click to edit title...'}
                        onChange={(e) => this.setState({columnTitle: e.target.value})}
                    /> 
                </div>
                {this.state.cards.map( c => {
                    return(c.card)
                })}
               {this.state.cards.length < 7 ? <div style={{width: '100%', height: 30, display: 'flex'}}>
                    <button className={`${styles.createCardBtn}`} onClick={() => this.createCard()}>+ Create Card</button>
                </div>: null}
            </div>
        )
    }
}