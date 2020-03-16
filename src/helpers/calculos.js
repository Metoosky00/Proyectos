import {obtenerDiferenciaAnio,calcularMarca, obtenerPlan} from './helper';

export function calculos(marca,plan,year){
    let resultado=2000;
    const diferenciaAnios=obtenerDiferenciaAnio(year);
    resultado -= ((diferenciaAnios*3)*resultado)/100
    resultado=calcularMarca(marca)*resultado
    let incrementoPlan=obtenerPlan(plan)
    resultado=parseFloat(resultado*incrementoPlan).toFixed(2);
    return resultado;
}