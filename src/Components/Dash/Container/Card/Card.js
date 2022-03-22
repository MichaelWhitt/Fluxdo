import React, {Component} from "react"
import styles from './styles.module.css'

export default class Card extends Component {

    state={
        value: '',
        editable: false
    }

    saveCard = () => this.setState({editable: false})

    componentDidUpdate(){
        console.log('this update', this)
    }

    handleTextChange = (e) => this.setState({value: e.target.value})

    editCard = () => {
        if (!this.state.editable !== true) {this.setState({editable: true})} 
    }

    render(){
        console.log('this', this)
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