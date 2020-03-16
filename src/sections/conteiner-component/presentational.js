import React from 'react';
//Este es el presentacional que consume los datos del contenedor

const _renderCurrencies=(bpi)=>(
    Object.keys(bpi).map(currency=>(
        <div key={currency}>
            1 BTC is {bpi[currency].rate}
            <span>{bpi[currency].code}</span>
        </div>
    ))
)

const BitcoinPrice =({bpi})=>{
        return(
            <div>
                <h4>Bitcoin Price Index</h4>
                {_renderCurrencies(bpi)}
            </div>
        );
    
}

export default BitcoinPrice;