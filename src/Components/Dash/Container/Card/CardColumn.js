import React, {Component} from "react"
import Card from "./Card"
import styles from './styles.module.css'

export default class CardColumn extends Component {

    state = {
        columnTitle : '' || 'Edit...',
        cards: [<Card />, <Card />],
        cardInfo: ''
    }

    componentDidMount(){
        console.log('mounted')
    }

    componentDidUpdate(){
        console.log("updated")
    }

   buildCards = (cards) => {
       console.log(cards)
       let cardArr = []
       for (let c = 0; c < this.state.cards.length; c++){
           cardArr.push(this.state.cards[c])
       }
       return cardArr
    }
    
    createCard = () => {
        this.setState({cards: [...this.state.cards, <Card />]})
    }

    render(){
        console.log()
        return(
            <div className={`${styles.cardColumn}`}>
                <div style={{width: '100%',height: 30, display: 'flex', alignItems: 'center'}}>
                    <div style={{paddingLeft: 10}}>{this.state.columnTitle}</div>
                </div>
                {this.buildCards(this.state.cards)}
                <div style={{width: '100%', height: 30, display: 'flex'}}>
                    <button style={{paddingLeft: 10}} onClick={() => this.createCard()}>+ Add a card</button>
                </div>
            </div>
        )
    }
}