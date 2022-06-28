import React, { Component } from 'react'; //Can be derived from shortcut imrc as we have downloaded the react snippets extensions
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class Counter extends Component { //Can be derived from shortcut cc


    //  constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this); //bind method creates a new instance of that method but with 'this' always referencing the current object.
    //  }

/* To solve the issue where there is no single source of truth
     handleIncrement = product => { //Using arrow functions dont rebind 'this', they inherit it.
         //this.state.count++; Do not work here as React is unaware of the changes we made. Hence, need use a method inherited from Component.
         console.log(product);
         this.setState({value: this.state.value + 1}); //Telling React that the state is going to be changed. React will then call the render() function
                                                       // and a new react element is returned.
     };
*/

    render() { 
        return ( //Note this is not HTML but jsx expression. Wrap the 2 expressions into a single 'div' so that Babel will compile it as 'div' 
                 //but to prevent unecessary 'div', we can use React.Fragment.
        <div> 
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm">
                    Increment
            </button> 
            <button 
                onClick={() => this.props.onDecrement(this.props.counter)} 
                className="btn btn-secondary btn-sm m-2">
                    Decrement
            </button> 
            <button 
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className='btn btn-danger btn-sm m-2'>
                    Delete
            </button>
        </div>
        ); 
    }

    getBadgeClasses() {  //Instead of coding entire code in render(), we create a helper method and just call it in render().
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }
    
    formatCount() {
        const {value} = this.props.counter; //Object destructuring. A useful way to store variables if you realise you are repetitively typing. eg. this.state.count
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;

/* 
The {} between the two tags is if you want to insert something dynamically. Can insert normal javascript code inside.

ClassName is an attribute to apply a class to the element. "badge bg-primary" are egs of boostrap classes

If you want to apply style to a specific element, can use style attribute that can be set to a plain javascript object eg. <span style={}></span>
=> 2 ways
1. Define the properties in a style variable and reference it in the style attribute
2. Inline style, written within the style attribute

Quick tip: right click selected code and press refactor to encapsulate the code into a helper method

Key attribute in li to uniquely identify each element. This is so that if an element is changed, REACT can identify which element is changed and 
where in the DOM it should change so that it is synced with the virtual DOM.(Just need to be unique in that particular list)

Conditional rendering can be done either 
1. Using a helper method since jsx cannot handle if else.  
2. using javascript && operators.(In Javascript, && operators can be used for rendering, eg. true && "Hi", if true, 
it will check the second operand and if it is truesy, it will return the second operand.)

Using attribute onCLick to handle events(in this case, a click).Note we are not invoking it yet, jus passing its reference

Functions in Javascripts are objects and has methods and properties
*/ 
