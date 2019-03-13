import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }
  render() {
    const {title, img, instructions} = this.props; // This is the same as title = this.props.title
    const ingredients = this.props.ingredients.map((ing,index)=> (
      <li key={index}>{ing}</li>  
    )); //because we are using an arrow function where we are encapsulating everything in parentesis, we dont need to specify return.
    return(
      <div>
        <div className="recipe-card">
          <img className="recipe-card-img" src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions: </h4>
          <p>{instructions}</p>
        </div>
      </div> //this div is added because we can never return multiple jsx elements next to each other.
    );
    
  }
}

export default Recipe;