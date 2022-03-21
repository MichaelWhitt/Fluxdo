import React, {Component} from "react"
import styles from './styles.module.css'

export default class Card extends Component {

    state={
        cardInfo: '',
        value: '',
        editable: false
    }

    saveCard = (e) => {
        this.setState({editable: false})
        this.setState({cardInfo: this.state.value})
    }

    handleTextChange = (e) => {
        this.setState({value: e.target.value})
    }

    editCard = () => {
        if (!this.state.editable !== true) {this.setState({editable: true})} 
    }

    render(){
        console.log(this.state)
        return(
            <>
                <textarea 
                    className={`${styles.cardInput}`} 
                    placeholder="Type here..." 
                    onBlur={this.saveCard} 
                    onClick={this.editCard} 
                    onChange={(e) => this.handleTextChange(e)} 
                    type='text'
                />
                <button className={`${styles.deleteCard}`} onClick={() => this.props.delete(this.props.num)}>X</button>
            </>
        )
    }
}