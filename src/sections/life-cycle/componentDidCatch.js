import React from 'react';

class BotonQueLanzaError extends React.Component {
    state={throwError:false}
    render(){
        if(this.state.throwError){
            throw new Error('Error lanzado por el boton')
        }
        return(
            <button onClick={()=>this.setState({throwError:true})}>Lanza Error</button>
        );
    }
}

export default class EjemploDeComponenteDidCatch extends React.Component{
    state={hasError:false,errorMsg:''}
    componentDidCatch(error,errorInfo){
        console.log('componentDidCatch')
        console.log (error,errorInfo)
        this.setState({hasError:true,errorMsg:error.toString()})
    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                    <p>Error en el componete: {this.state.errorMsg}</p>
                    <button onClick={()=>this.setState({hasError:false})}>Volver a la aplicación</button>
                </div>
            );
        }
        return(
            <div>
                <h4>Ciclo de montaje: componentDidCatch</h4>
                <BotonQueLanzaError/>
            </div>
        );
    }
}