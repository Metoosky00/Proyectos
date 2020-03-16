import React from 'react';
const HelloRender=(props)=><h1>Hola Render!</h1>
export default class Render extends React.Component{

    constructor(props){
        console.log('constructor')
        super(props)
        this.state={mensaje:'Mensaje Inicial'}
    }

    componentWillMount(){
        console.log('componentWillMount')
    }
    render(){
        console.log('render')
        return [
            <h1 key='A'>Primer elemento</h1>,
            <HelloRender key='B'/>,
            <HelloRender key='C'/>,
            <h3 key='D'>Cuarto elemento</h3>
        ]
    }

    }