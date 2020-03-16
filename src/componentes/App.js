import React from "react";
import Header from "./header";
import Formulario from "./Formulario";import Resultado from "./Resultado";
import {obtenerDiferenciaAnio,calcularMarca, obtenerPlan} from '../helpers/helper';
import Resumen from "./Resumen";

class App extends React.Component {

    state={
      resultado:'',
      datos:{}
    }
  

  cotizarSeguro=(datos)=>{
    const {marca,plan,year}=datos;
    let resultado=2000;
    const diferenciaAnios=obtenerDiferenciaAnio(year);
    resultado -= ((diferenciaAnios*3)*resultado)/100
    resultado=calcularMarca(marca)*resultado
    let incrementoPlan=obtenerPlan(plan)
    resultado=parseFloat(resultado*incrementoPlan).toFixed(2);
    const datosAuto={
      marca,
      plan,
      year
    }
    this.setState({resultado,datos:datosAuto})
  }

  render(){
    const {datos,resultado}=this.state
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto" />
        <div className="contenedor-formulario">
          <Formulario 
          cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen 
          datos={datos}
          />
          <Resultado resultado={resultado} />
        </div>
      </div>
    );
  }
}

export default App;
