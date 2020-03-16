import React from 'react';

export default class ComponentWillMount extends React.Component{
    constructor(props){
        console.log('constructor')
        super(props)
        this.state={mensaje:'Mensaje Inicial'}
    }

    componentWillMount(){
        console.log('componenWillMount')
        this.setState({mensaje:'Cambiamos el mensaje antes del render'})
    }

    render(){
        console.log('render')
        return(
            <div>
                <h4>Ciclo de montaje: componentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        );
    }
}