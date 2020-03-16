import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {insertCustomers} from '../actions/insertCustomer';

class NewCustomerContainer extends Component {

    handleSubmit=values=>{
        return this.props.insertCustomers(values)
    }

    handleOnSubmitSuccess=()=>{
        this.props.history.goBack();
    }

    handleOnBack=()=>{
        this.props.history.goBack();
    }

    renderBody=()=>{
        return <CustomerEdit 
                onSubmit={this.handleSubmit}
                onSubmitSuccess={this.handleOnSubmitSuccess}
                onBack={this.handleOnBack}
                />
    }

    render() {
        return (
            <div>
                <AppFrame 
                body={this.renderBody()}
                header={`Creacion de nuevo cliente `}
                ></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomers:PropTypes.func.isRequired,
};

export default withRouter(connect(null,{insertCustomers}) (NewCustomerContainer));