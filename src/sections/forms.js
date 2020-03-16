import React from 'react';

 export default class Forms extends React.Component{
     constructor(){
         super();
         this.state={//Elemento importante
             inputName:'',
             inputTwitter:'@',
             inputTerms:true

         }
     }
    handleSubmit=(e)=>{//Elemento importante
         e.preventDefault()
         console.log(this.state)
     }
     hanldeChange=(e)=>{//Elemento importante
         console.log('handleChange')
         console.log(e.target.checked)
         this.setState({inputTerms:e.target.checked})
     }
     render(){
         return(
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Nombre:</label>
                    <input 
                    id='name'
                    name='userName'
                    onChange={e=>this.setState({inputName:e.target.value})} //Elemento importante
                    placeholder='Introduce el nombre'
                    idtype='text'
                    ref={inputElement=>this.inputName=inputElement}
                    value={this.state.inputName} //Elemento importante
                    />
                    <p>

                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter:</label>
                        <input
                        id='twitter'
                        name='twitterAccount'
                        onChange={e=>{this.setState({inputTwitter: e.target.value})}}//Elemento importante
                        placeholder='Introduce tu Twitter'
                        ref={inputElement=>this.inputTwitter=inputElement}
                        value={this.state.inputTwitter} //Elemento importante
                        />
                    </p>
                    <p>
                        <label>
                            <input 
                            checked={this.state.inputTerms}//Elemento importante
                            onChange={this.hanldeChange} //Elemento importante
                            type='checkbox'
                            />
                            Accepted terms
                        </label>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
         );
     }
 }