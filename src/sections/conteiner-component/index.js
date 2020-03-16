import React from 'react';
import BitCoinPrice from './presentational';
//Este es el contenedor donde se extraen los datos
class BitCoinPriceContainer extends React.Component{
    //Se crea un arreglo en el estado de nuestro componente
    state={bpi:{}}
    //Con el metodo componentDidMount extraemos la informacion de la 
    //API a travez de la funcion fetch y lo tipamos como un json
    //Una vez hecho esto le desimos que los datos guardados en data
    //sean guardados en un arreglo constante bpi
    //Por ultimo lo seteamos para que se guarden los datos en el estado de bpi

    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res=>res.json())
        .then(data=>{
            const {bpi}=data
            this.setState({bpi})
        })
    }
    //Una vez guardados los datos en el estado bpi utilizamos el componente
    //BitCoinPrice y le pasamos por medio de las props el estado bpi
    //pasamos donde esta guardado el componente BitconPrice para ver como se 
    //renderizan los datos
    render(){
        return(
            //Componente presentacional
            <BitCoinPrice bpi={this.state.bpi}/>
        );
    }

}
export default BitCoinPriceContainer;