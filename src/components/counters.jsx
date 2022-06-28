import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const { onReset, onIncrement, onDecrement, onDelete, counters} = this.props;
        return ( //Attributes here are passed to the components through 'props'. props.children can be used 
                 //if there are elements passed between the opening and closing blocks
        <div>
            <button
                onClick={onReset}
                className= 'btn btn-primary btn-sm m-2'>
                    Reset
            </button>
            {counters.map(counter => 
        <Counter key={counter.id} 
                 onDelete={onDelete} 
                 onIncrement={onIncrement} 
                 onDecrement={onDecrement}
                 counter={counter}/>)}
        </div>);
    }
}
 
export default Counters;

//States vs props. States are data defined locally and privately within the component while props include data given to the component.
//Props are read-only, cannot change its data/property unlike states.