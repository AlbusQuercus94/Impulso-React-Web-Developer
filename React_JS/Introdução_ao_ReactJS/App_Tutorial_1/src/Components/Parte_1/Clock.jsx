import React from "react";
//Documentação de State do REACT

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}; //UNICO LUGAR QUE DEVE SER ATRIBUIDO O THIS.STATE
    }
    //Método executado depois que a saída do componente é renderizada no DOM.
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    //Método chamado quando um componente está sendo removido do DOM.
    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>Hello, world! Again. :D</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


export default Clock