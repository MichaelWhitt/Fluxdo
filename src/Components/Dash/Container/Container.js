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
  let finalId = 0
    return(
        <div className={`${styles.container}`}>
            <div style={{display: 'flex'}}>
                {this.state.columns.map((c,i) => {
                finalId = i
                console.log(finalId)
                  return <div key={i} id={i}>{c}</div>
                })}
                <div>
                    <button className={`${styles.newListBtn}`} onClick={this.createNewColumn}>+ Create New List</button>
                </div>
                <div>
                    <button className={`${styles.zoomBtn}`}><a href={`#${finalId}`}>Zoom >></a></button>
                </div>
            </div>
        </div>
    )
}
}
