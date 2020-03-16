import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustumersActions from '../CustumersActions';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {

    componentDidMount(){
        this.props.fetchCustomers()
    }

    handleAddNew=()=>{
        this.props.history.push('/customers/new')
    }

    renderBody=customers=>(
        <div>
            <CustomersList
            customers={customers}
            urlPath={'customers/'}
            />
            <CustumersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustumersActions>
        </div>
    );
    render() {
        return (
            <div>
                <AppFrame 
                body={this.renderBody(this.props.customers)}
                header={'Listado de Clientes'}
                />
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers:PropTypes.func.isRequired,
    customers:PropTypes.array.isRequired,
};

CustomersContainer.defaultProps={
    customers:[]
}

const mapStateToProps=state=>({
    customers:getCustomers(state)
})

export default withRouter(connect(mapStateToProps,{fetchCustomers})(CustomersContainer));