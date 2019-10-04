import React, { Component } from 'react';
import Button from './Button';

class DinamicListItem extends Component {
  render() {
    const { elementList, index, doneItem, deleteItem } = this.props;
    let todoClass = elementList.done ? 'done' : 'undone';
    return (
      <div key={`${index}`}>
        <span className={todoClass}>{elementList.todo}</span>{' '}
        {/* <span>{elementList.todo}</span>{' '} */}
        <Button myProp={() => doneItem(index)}>DONE</Button>
        <Button myProp={() => deleteItem(index)}>DELETE</Button>
      </div>
    );
  }
}

export default DinamicListItem;
