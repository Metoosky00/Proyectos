import React from 'react';

const API_KEY= '95e2b425'


export class SearchForm extends React.Component{

    state={inputMovie:''}

    _handleChange=(e)=>{
        this.setState({inputMovie:e.target.value})    
    }

    _handleSubmit=(e)=>{
        e.preventDefault()
        const {inputMovie}=this.state
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${inputMovie}`)
        .then(res=>res.json())
        .then(results=>{
            const {Search=[],totalResults=0}=results
            console.log(Search,totalResults)
            //Pasamos los resultados de la busqueda a onResults
            this.props.onResults(Search)
        })
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                        className="input" 
                        onChange={this._handleChange}
                        type="text" 
                        placeholder="Movie to Search."
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
