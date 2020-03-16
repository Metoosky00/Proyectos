import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsasInitial';
import CustomerActions from '../CustumersActions';
import { Prompt } from 'react-router-dom';
import { CUSTOMER_EDIT } from '../constants/permissions';
import { accessControl } from '../helpers/accesControl';

/*
const isRequired=value=>(
    !value && "Este campo es requerido"
);*/

const validate=values=>{
    const error={}

    if(!values.name){
        error.name="El campo nombre es requerido"
    }

    if(!values.dni){
        error.dni="El Dni es un dato obligatorio"
    }
    return error
}


const toNumber=value=>value && Number(value)
const toUpper=value=>value&& value.toUpperCase()
const toLower=value=>value && value.toLowerCase()
const onlyGrow=(value,previusValue,values)=>
    value && (!previusValue ? value : (value>previusValue ? value : previusValue))

class CustomerEdit extends React.Component {

    componentDidMount(){
        if(this.txt){
            this.txt.focus()
        }
    }

    renderField=({input,meta,type,label,name,withFocus})=>(
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
            {...input} 
            type={ !type ? "text" : type}
            ref={withFocus && (txt=>this.txt=txt)}
            />
            {
               meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    )

    render(){
        const {handleSubmit,submitting,onBack,pristine, submitSucceeded}=this.props
        return (
            <div>
                <h2>Edicion del Cliente</h2>
                <form onSubmit={handleSubmit}>
                        <Field 
                            withFocus
                            label="Nombre:"
                            name="name" 
                            component={this.renderField}
                            type="text"
                            parse={toUpper}
                            format={toLower}
                            ></Field>
                        <Field 
                            label="Dni:"
                            name="dni" 
                            component={this.renderField} 
                            type="text"
                            ></Field>
                        <Field 
                            label="Edad:"
                            name="age" 
                            component={this.renderField}  
                            type="number"
                            parse={toNumber}
                            normalize={onlyGrow}
                            ></Field>
                        <CustomerActions>
                            <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                            <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                        </CustomerActions>
                        <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderan los datos si continua"
                        ></Prompt>
                </form>
            </div>
        );
    }
};

CustomerEdit.propTypes = {
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.number,
    onBack:PropTypes.func.isRequired,
};

const CustomerEditForm=reduxForm(
    {
        form:'CusomerEdit',
        validate
    }
    )(CustomerEdit);
//Las propiedades de CustomerEditForm son inyectadas por el HOC setPropsAsInitial y asi se crea un nuevo componente 
//que coniene las propiedades iniciales
export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm));