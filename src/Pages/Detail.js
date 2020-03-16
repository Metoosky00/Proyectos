import React from 'react';
import PropTypes from 'prop-types';
import {ButtonBackToHome} from '../components/ButtonBackToHome';

const API_KEY= '95e2b425'

export class Details extends React.Component{
    static propTypes={
        match:PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url:PropTypes.string
        })
    }
    state={
        movie:{}
    }
    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res=>res.json())
        .then(movie=>{
            this.setState({movie})
        })
    }

    componentDidMount(){
        console.log(this.props)
        const {movieId}=this.props.match.params
        this._fetchMovie({id:movieId})
    }
    goBack(){
        window.history.back()
    }
    render(){
        const {Title, Poster, Actors, Metascore,Plot}=
        this.state.movie
        return(
            <div>
                <ButtonBackToHome/>
                <h1>{Title}</h1>
                <img 
                alt={Title}
                src={Poster}
                />
                <h3>Reparto: {Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        );
    }
}