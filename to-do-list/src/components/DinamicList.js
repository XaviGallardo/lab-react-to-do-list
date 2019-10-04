import React, { Component } from 'react';
import Button from './Button';
import './DinamicList.css';
import DinamicListItem from './DinamicListItem';

export default class DinamicList extends Component {
  render() {
    const { list, deleteItem, doneItem, done } = this.props;
    // var todoClass = this.props.item.done ? 'done' : 'undone';

    // let todoClass = list[index].done ? 'done' : 'undone';
    return (
      <div>
        {list.map((elementList, index) => (
          <DinamicListItem
            key={`${index}`}
            elementList={elementList}
            index={index}
            doneItem={doneItem}
            deleteItem={deleteItem}
          ></DinamicListItem>

          // <div key={`${index}`}>
          //   <span className={todoClass}>{elementList.todo}</span>{' '}
          //   {/* <span>{elementList.todo}</span>{' '} */}
          //   <Button myProp={() => doneItem(index)}>DONE</Button>
          //   <Button myProp={() => deleteItem(index)}>DELETE</Button>
          // </div>
        ))}
      </div>
    );
  }
}

// export default DinamicList;
