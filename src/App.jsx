import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    
     // Start the kennel with the pets from data.js
  this.state = 
    {
    characters: initialData
    };
  }

  // Method to handle state changes from children
  handleUpdate = (id) => {
    console.log("Parent received event for ID:", id);
    // TODO: Logic to update the specific child in this.state
    // 1. Find the character in state by id
    // 2. Change their image property (e.g., to a 'happy' version)
    // 3. Update state using this.setState()
    
    /* HINT for students: 
    const updatedCharacters = this.state.characters.map(char => {
      if(char.id === id) {
         return { ...char, image: 'NEW_IMAGE_URL', status: 'Updated!' };
      }
      return char;
    });
    this.setState({ characters: updatedCharacters });
    */
    const updatedCharacters = this.state.characters.map(char => {
      if (char.id === id) { // Checks which pet button is clicked.
        if (char.id === 1) { // Reggie
          return {
            ...char,
            image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rusty_The_Smiling_Guinea_Pig_(235589647).jpeg',
            status: 'Happy'
          };
        }

        // Penny
        return {
          ...char,
          image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pet_rabbit_(2).JPG',
          status: 'Happy'
        };
      }

      return char; // Pet not clicked stays the same.
    });
    this.setState({ characters: updatedCharacters });
    };
  

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Parent Component (Class-Based)</h1>
        
        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {/* TODO: Map through your state characters here and render ChildComponents */}
          {/* Example: 
              {this.state && this.state.characters.map(char => (
                <ChildComponent 
                  key={char.id}
                  id={char.id}
                  name={char.name}
                  image={char.image}
                  status={char.status}
                  onAction={this.handleUpdate}
                />
              ))} 
          */} 
         {this.state && this.state.characters.map(char => ( //goes thru each pet one at a time
                <ChildComponent 
                  key={char.id} //makes an id for each pet
                  id={char.id} //sends the pet info from parent to the child 
                  name={char.name}
                  image={char.image}
                  status={char.status}
                  onAction={this.handleUpdate} //when the button is clicked in send the id of the pet so the parent can update the pets image and status
                />
              ))} 
        </div>
      </div>
    );
  }
}

export default App;
