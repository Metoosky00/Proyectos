import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../CustumersActions';

class HomeContainer extends Component {

    handleOnClick=()=>{
        console.log("handleOnClick")
        this.props.history.push('/customers')
    }

    render() {
        return (
            <div>
                <AppFrame 
                body={
                    <div>
                        Esta es la pantalla inicial
                        <CustomerActions>
                            <button onClick={this.handleOnClick}>
                            Listado de clientes
                            </button>
                        </CustomerActions>
                    </div>

                }
                header='Home' 
                />
            </div>
        );
    }
}

export default withRouter( HomeContainer );