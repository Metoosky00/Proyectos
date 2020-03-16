import React, {useState} from 'react';
import PropTypes from 'prop-types';
const ANIMAL_IMAGE={
    panda:'https://goo.gl/oNbtoq',
    cat:'https://goo.gl/PoQQXb',
    dolphin:'https://goo.gl/BbiKCd'
}
const ANIMALS=Object.keys(ANIMAL_IMAGE);
class AnimalImage extends React.Component{
    state={src:ANIMAL_IMAGE[this.props.animal]}

    componentWillReceiveProps(nextProps){
        console.clear()
        console.log('1.-componentWillReciveProps')
        console.log(nextProps)
        this.setState({src:ANIMAL_IMAGE[nextProps.animal]})
    }

    shouldComponentUpdate(nextProps){
        //Este metodo se utiliza por si se requiere que no se renderise 
        //un elemento en el dom para que asi sea mas eficiente la 
        //visualizacion
        console.log('2.-ShouldComponentUpdate')
        console.log('anterior: ', this.props.animal)  
        console.log('nuevo: ',nextProps.animal)
        return this.props.animal!==nextProps.animal

    }

    componentWillUpdate(nextProps,nextState){
        console.log('3.-componentWillUpdate', nextProps, nextState)
        const img = document.querySelector('img')
        console.log('from img element', {alt:img.alt})
        //web animation API
        img.animate([{
            filter:'blur(0px)'
        },{
            filter:'blur(2px)'
        }
    ],{
        duration:500,
        easing:'ease'
    })

    }

    componentDidUpdate(prevProps, prevState){
        console.log('4.-componentDidUpdate')
        const img = document.querySelector('img')
        img.animate([{
            filter:'blur(2px)'
        },{
            filter:'blur(0px)'
        }
    ],{
        duration:1500,
        easing:'ease'
    })
    console.log('from img element',{alt:img.alt})
    }

    render(){
        console.log('->render')
        return(
            <div>
                <p>Selected: {this.props.animal}</p>
                <img 
                alt={this.props.animal}
                src={this.state.src}
                width='250'
                />
            </div>
        );
    }
}

AnimalImage.propTypes={
    animal:PropTypes.oneOf(ANIMALS)
}

const EjemploCicloDeActualizacion = (props) => {
    const [animal, setAnimal] = useState('panda');
    function _renderAnimalButton(animalf){
        return(
            <button 
            disabled={animalf === animal}
            key={animalf} 
            onClick={()=>setAnimal(animalf)}
            >{animalf}</button>  
        )
    }
    return (
        <div>
            <h4>Ciclo de Actualizacion, Ejemplo de: sholdComponentUpdate</h4>
            {ANIMALS.map(_renderAnimalButton)}
            <AnimalImage animal={animal}/>
        </div>
    );
}

export default EjemploCicloDeActualizacion;

/* 

export default class EjemploCicloDeActualizacion extends React.Component{

    state={animal:'panda'}

    _renderAnimalButton=(animal)=>{
        return(
            <button 
            disabled={animal === this.state.animal}
            key={animal} 
            onClick={()=>this.setState({animal})}
            >{animal}</button>  
        )
    }

    render(){
        return(
            <div>
                <h4>Ciclo de Actualizacion, Ejemplo de: sholdComponentUpdate</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
            </div>
        );
    }
}
*/