import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuidv4(), name: 'Eggs' },
      { id: uuidv4(), name: 'Milk' },
      { id: uuidv4(), name: 'Bread' }, //powershell
      { id: uuidv4(), name: 'House' }, //WSL LINUX
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          className="addItem-btn"
          color="dark"
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuidv4(), name }],
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500}>
                <ListGroupItem>
                  <Button
                    className="removeItem-btn"
                    color="danger"
                    size="small"
                    onClick={() => {
                      this.setState((state) => ({
                        items: state.items.filter((item) => item.id !== id),
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
