import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { //A special property that includes any data the component needs
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0}
    ]
  } 

  handleIncrement = counter => {
      const counters = [...this.state.counters]; //... spread operator to clone
      const index = counters.indexOf(counter);
      counters[index] = {...counter }; 
      counters[index].value++;
      this.setState({counters});
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }

  handleDelete = counterId => { //Since deleting of counter is modifying the states of counters, this method should be implmented in counters component.
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  };
  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          <main className='container'>
            <Counters 
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}/>
          </main>
      </React.Fragment>
    );
  }
}
 

export default App;

//To ensure single source of truth, make use of props on children components instead of having their own states.
//If there are 2 sibling components, can shift the states up to the parent and make use of props for the 2 children.

//Life Cycle Hooks
//Mounting, Updating, Unmounting