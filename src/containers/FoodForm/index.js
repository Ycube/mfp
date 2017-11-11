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
        <form>
          <label>
            FoodName:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      
      </div>
    );
  }
}

export default FoodForm;
