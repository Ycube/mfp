import React from 'react';

import Dropdown from '../Dropdown';

class FoodForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      food: '',
      calories: 0,
      meal: 'breakfast'
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    console.log('A Foodname was submitted: ' + this.state.food);
    console.log('Calories was submitted: ' + this.state.calories);
    event.preventDefault();
  }


  render() {
    const options = [
        {
            description: 'Breakfast',
            code: 'a'
        },
        {
            description: 'Lunch',
            code: 'b'
        },
        {
            description: 'Dinner',
            code: 'c'
        },
        {
            description: 'Snack',
            code: 'd'
        }
    ];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            FoodName:
            <input type="text" name="food" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Calories:
            <input type="numbers" name="calories" value={this.state.calories} onChange={this.handleChange} />
          </label>
          
          <Dropdown
            options={options} 
            value='a'
            labelField='description'
            valueField='code'
          />
          <input type="submit" value="Submit" />
        </form>
      
      </div>
    );
  }
}

export default FoodForm;
