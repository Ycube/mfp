import React from 'react';

class FoodForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    };
  }


  render() {
    return (
      <div>
        This will be a form w/ Food, Calories, MealTime
      </div>
    );
  }
}

export default FoodForm;
