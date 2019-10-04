import React, { Component } from 'react';
import Button from './Button';

export default class DinamicList extends Component {
  render() {
    const { list, deleteItem, doneItem, done } = this.props;
    return (
      <div>
        {list.map((elementList, index) => (
          <div key={`${index}`}>
            <span style={done}>{elementList}</span>{' '}
            <Button myProp={() => doneItem(index)}>DONE</Button>
            <Button myProp={() => deleteItem(index)}>DELETE</Button>
          </div>
        ))}
      </div>
    );
  }
}

// export default DinamicList;
