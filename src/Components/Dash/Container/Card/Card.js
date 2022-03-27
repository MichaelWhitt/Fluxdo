import React, {Component} from "react"
import styles from './styles.module.css'
import { placeholders } from "./placeholders"

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

    generatePlaceholder = () => {
        return placeholders[Math.floor(Math.random() * placeholders.length)]
    }

    render(){
        return(
            <>
              <div style={{height: 60, width: '100%', marginTop: 20}}>
                  <textarea
                      className={`${styles.card}`}
                      placeholder={this.generatePlaceholder()}
                      onBlur={this.saveCard}
                      onClick={this.editCard}
                      onChange={(e) => this.handleTextChange(e)}
                      type='text'
                  />
                  <button className={`${styles.deleteCard}`} onClick={() => this.props.delete(this.props.num)}>X</button>
              </div>
            </>
        )
    }
}
