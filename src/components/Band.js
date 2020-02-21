import React, { Component } from 'react';

class Band extends Component {

    render() {
        return (
            <div>
              <ul> 
                  <li key={this.props.id}>{this.props.name}</li>
                  <button onClick={()=> this.props.delete(this.props.id)}>DELETE</button>
              </ul>
            </div>
        );
    }
};

export default Band;