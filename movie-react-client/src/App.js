import React from 'react';
import logo from './logo.svg';
import './App.css';

function MovieList(props){
  console.log(props);
 
  return props.movies.map(m=>(
    <div className='movie-info'>{m.Title}</div>
  ));

  
}

class App extends React.Component{
  constructor(){
    super();
    this.url='http://localhost:9000/api/movies';
    this.state={
      movies:[
        {Title:"One"},
        {Title:"Two"},
        {Title:"Three"}
      ]
    }
  }


  render(){
    return <div>
          <h1>Movie Client</h1>
          <button onClick={()=>this.fetchMovies()} >Get Movies</button>
          <hr/>
          <MovieList movies={this.state.movies} />
    </div>
  }

  async fetchMovies(){
    let movies= await fetch(this.url).then(response=> response.json())
    console.log('movies',movies);
    
    this.setState({movies});
  }
}

export default App;
