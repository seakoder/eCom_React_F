import React from 'react';

class Counter extends React.Component {

    state = {
        count: 0
    }

    adding = () => {
        this.setState({count: this.state.count+1});

    }

    subtracting = () => {
        this.setState({count: this.state.count-1});
        
            }
        

    render() {

        return <div>
            <h1>Counter application</h1>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.adding} className=''>Add</button>
            <button onClick={this.subtracting} >Subtract</button>
        </div>
    }


}

export default Counter;