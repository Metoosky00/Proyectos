import React from 'react';

class ComponenteADesmontar extends React.Component{
    state={windowWidth:0}

    _updateStateWithWindowWidth=()=>{
        console.log('_updateStateWithWindowWidth')
        this.setState({windowWidth:document.body.clientWidth})
    }

    componentDidMount(){
        this._updateStateWithWindowWidth()
        window.addEventListener(
        'resize',
        this._updateStateWithWindowWidth    
        )
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount')
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    render(){
        return(
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        );
    }
}


export default class EjemploComponenWillUnmount extends React.Component{
    state={mostrarComponente:true}
    render(){
        if(this.state.mostrarComponente){
        return(
            <div>
                <h4>Ciclo de desmontaje: componentWillUnmount</h4>
                <ComponenteADesmontar/>
                <button onClick={()=>this.setState({mostrarComponente:false})}>Desmontar componete</button>
            </div>
        );
        }
        return(
            <p>Componente desmontado</p>
        );
    }
}