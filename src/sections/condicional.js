import React from 'react';

class LoggingButton extends React.Component{
    render(){
        return(
            <button>Iniciar Sesión</button>
        );
    }
}

class LogoutButton extends React.Component{
    render(){
        return(
            <div>
                <p>Bienvenido, usuario</p>
                <button>Cerrar Sesión</button>
            </div>
        );
    }
}

export default class ConditionalSection extends React.Component{
    constructor(){
        super();
        this.state={isUserLogged:true}
    }
    render(){
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged
                        ?<LogoutButton/>
                        :<LoggingButton/>}
            </div>
        );
    }
}