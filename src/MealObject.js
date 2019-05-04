import React, { Component } from 'react';

class MealObject extends Component {

    render() {

        // Using the values of the mealobject which were passed from MealPage component
        // We can access the value of a meal from this.props.meal
        // this.props.meal.name_of_program refers to the Name of the Program for "this" meal
        return(
            <div>
                {this.props.meal.name_of_program}
            </div>
        )
    }

}

export default MealObject;