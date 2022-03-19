import React from "react"
import { Header } from "./Menu/Header"
import { Container } from "./Container/Container"

export default class Dashboard extends React.Component {


    state = {
        title: 'Dashboard'
    }

    render(){
        return(
            <div style={{height: '100vh', width: '100vw'}}>
                <Header />
                <Container />
            </div>
        )
    }
}