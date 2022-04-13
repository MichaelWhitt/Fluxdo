import React from "react"
import styles from './styles.module.css'
import CardColumn from "./Card/CardColumn"
import arrow from '../../../Assets/arrow.png'

export class Container extends React.Component {

    state={
        columns: [<CardColumn />],
        zoomed: false
    }

    createNewColumn = () => {
        this.setState({columns: [...this.state.columns, <CardColumn />]})
    }

render () {
    const {zoomed} = this.state
    return(
        <div className={`${styles.container}`}>
            <div style={{display: 'flex'}}>
                {this.state.columns.map((c,i) => <div key={i} id={i}>{c}</div>)}
                <div>
                    <button className={`${styles.newListBtn}`} id='newList' onClick={this.createNewColumn}>+ Create New List</button>
                </div>
                <div>
                {zoomed ? <a href='#0'>
                    <button className={`${styles.zoomBtn}`} style={{right: 100, transform:'rotate(180deg)'}} onClick={() => this.setState({zoomed: false})}>
                        <img alt="Zoom->" src={arrow} style={{position: 'relative', top: -10, right: 16}} />
                    </button>
                </a> : null}
                <a href='#newList'>
                    <button className={`${styles.zoomBtn}`} onClick={() => this.setState({zoomed: true})}>
                        <img alt="Zoom->" src={arrow} style={{position: 'relative', top: -10, right: 16}} />
                    </button>
                </a>
                </div>
            </div>
        </div>
    )
}
}
