import React, { Component } from "react";
import { primeraMayuscula } from "../helpers/helper";

export default class Resumen extends Component {
  state = {
    mostrarInfo: false
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ mostrarInfo: true });
  }

  mostrarResumen = () => {
    const { marca, year, plan } = this.props.datos;
    return (
      <div className="resumen">
        <h2>Resumen de cotizacion</h2>
        <li>Marca:{primeraMayuscula(marca)}</li>
        <li>Plan:{primeraMayuscula(plan)}</li>
        <li>Año:{year}</li>
      </div>
    );
  };

  render() {
    const { resultado } = this.props;
    return (
      <div>
        {this.state.mostrarInfo && this.mostrarResumen()}
      </div>
    );
  }
}
