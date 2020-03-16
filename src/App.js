import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Eduardo", age: 24 },
      { id: "2", name: "Lalo", age: 24 },
      { id: "3", name: "stephany", age: 26 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    //Se busca el index
    const personIndex = this.state.persons.findIndex(p => {
      //Se regresa el index el cual se quiere cambiar
      return p.id === id;
    });
    //se almacena la informacion de la persona 
    const person = { ...this.state.persons[personIndex] };
    //Se cambia el valor del nombre
    person.name = event.target.value;
    //Se crea un nuevo arreglo de personas
    const persons = [...this.state.persons];
    //A la persona con el index se le asigna el nuevo valor
    persons[personIndex] = person;
    //Se cambia el estado con setState
    this.setState({persons});
  };

  deletedPersonHandler = personIndex => {
    // const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    let persons = null;
    if (this.state.showPersons) {
      console.log(this.state.showPersons);
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                age={person.age}
                change={event => this.nameChangeHandler(event, person.id)}
                click={() => this.deletedPersonHandler(index)}
                key={person.id}
                name={person.name}
              />
            );
          })}
        </div>
      );
      style.backgroundColor='red'
    }

    const classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

// state = {
//   persons: [
//     {name:'Eduardo',age:24},
//     {name:'Lalo',age:24},
//     {name:'stephany',age:26}
//   ]
// };

// switchNameHandler=()=>{
//   this.setState({
//     persons: [
//       {name:'Eduardo2',age:25},
//       {name:'Lalo2',age:25},
//       {name:'stephany2',age:27}
//     ]
//   })
// }
