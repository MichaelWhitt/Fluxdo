import React from "react"
import styles from './styles.module.css'
import CardColumn from "./Card/CardColumn"

export class Container extends React.Component {

    state={
        columns: [<CardColumn />]
    }

    createNewColumn = () => {
        this.setState({columns: [...this.state.columns, <CardColumn />]})
    }

render () {
    return(
        <div className={`${styles.container}`}>
            <div style={{display: 'flex'}}>
                {this.state.columns.map(c => c)}
                <div>
                    <button className={`${styles.newListBtn}`} onClick={this.createNewColumn}>+ Create New List</button>
                </div>    
            </div>
        </div>
    )
}
}