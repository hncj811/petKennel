import React from 'react';

// TODO: Destructure the props you need here (header, image, etc.)
class ChildComponent extends React.Component {

  constructor(props) {
   // todo add bindings etc to inititalize component and funcs 
   super(props);
  }
  
  render(){
    //Get the pet info from the app.
    const { id, name, image, status, onAction } = this.props;
   return (
    <div className="child-card">
      {/* TODO: 
        1. Add an <h2> for the header text 
        2. Add an <img> tag for the image
        3. Add a <p> tag for the content
        4. Add a <button> that fires the click event
      */}
      {/*Shows the Pet Name*/}
      <h2>Hello World. My name is {name}</h2>
      {/*Shows the Actual Image*/}
      <img src={image} alt={name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
      {/*Shows how the Pet Is Feeling*/}
      <p>Today I feel {status}</p>
      {/*Button to change the Pet's Feeling*/}
       <button onClick={() => onAction(id)}>Feed Me</button>
    </div>
  );
 }
}

export default ChildComponent;
