import React from 'react';
import { Component } from "react";

/*Generacion de HOC's */
/*WrappedComponent es el componente inicial y a partir de el se crea un nuevo componente que 
retorna ese componente inicial agregandole mas funcionalidad*/
export const setPropsAsInitial=WrappedComponent=>(
        class extends Component {
            render(){
                return (
                    <WrappedComponent {...this.props} 
                    initialValues={this.props}
                    enableReinitialize
                    />
                )
            }
        }
);