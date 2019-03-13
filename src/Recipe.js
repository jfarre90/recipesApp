import React, {Component} from 'react';

class Recipe extends Component {
  render() {
    const {title} = this.props; // This is the same as title = this.props.title
    const ingredients = this.props.ingredients.map((ing,index)=> (
      <li key={index}>{ing}</li>  
    )); //because we are using an arrow function where we are encapsulating everything in parentesis, we dont need to specify return.
    return(
      <div>
        <div>Recipe {title}</div>
        <ul>
          {ingredients}
        </ul>
      </div> //this div is added because we can never return multiple jsx elements next to each other.
    );
    
  }
}

export default Recipe;