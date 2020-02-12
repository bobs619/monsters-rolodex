import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/cardList/cardList';
import { SearchBox } from './components/searchBox/searchBox';

class App extends Component {
  constructor(){
    super();

    this.state = {
      string: 'Hello boo',
      bob: 0,
      monsters: [
        
      ],
      searchFilter: ''

    };
  }

 changeBob = (name) => {

  console.log(name);

  var b = this.state.bob;

  this.setState({bob: ++b, string: name});
 }

 handleChange = (x) => {

  //var b = this.state.bob;

  this.setState({searchFilter: x.target.value}, () => console.log(this.state))
 }
 
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(usrs => this.setState({monsters: usrs}));
 }

  render(){

    const { monsters, searchFilter } = this.state;
    const filteredMonsters = monsters.filter(x=>x.name.toLowerCase().includes(searchFilter.toLowerCase()) )

      return (
        <div className="App">
          
          <h1>Monsters Rolodex</h1>

          <h1>{`Found ${this.state.string} @ ${this.state.bob}`}</h1>

          <SearchBox 
            placeholder='search monsters bro' 
            handleChange={this.handleChange}
          />

          <CardList monsters={filteredMonsters} cardClick={this.changeBob}/>
      
          
          <button onClick={this.changeBob}>yo</button>
          
        </div>
      );
  }
}

export default App;
