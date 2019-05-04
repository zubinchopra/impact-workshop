import React, { Component } from 'react';
import MealObject from './MealObject';

class MealPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meals: [] // Initially the list of meals is going to be empty
        }
    }

    // This function is provided by react itself and gets called automatically after the component
    // is mounted on the screen. Generally you would want to call your API stuff here
    componentDidMount() {

        let ref = this; // Mechanical step for now. Works around the problem of this.setState being undefined 

        // Good way to read this would be:
        // fetch some data... then return the response as json and then replace the empty list of meals with the JSON meals
        fetch("https://data.seattle.gov/resource/hmzu-x5ed.json", {
            method: "GET",
            headers: {
                "X-App-Token": "FZw8pR9Ss3OoiA1deR2RdoNyf"
            }
        }).then(function(res) {
            return res.json();
        }).then(function(mealsJson) {
            ref.setState({
                meals: mealsJson
            });
        }).catch(function(err) {
            console.log(err);
        });
    }

    // NOTE: The weird question mark syntax is a ternary statement (fancy way of making an if/else condition)
    // Basically the stuff before the question mark is the condition you are checking for
    // Stuff between ? and : gets executed if the condition is true
    // Stuff after : gets executed if the condition is false
    
    // Example: 5 > 0 ? "statement is true" : "statement is false" would return "statement is true"
    // Example: 5 < 0 ? "statement is true" : "statement is false" would return "statement is false" 

    render() {
        return (
            <div>
                {
                    this.state.meals.length > 0 ? 

                    // map function is basically used to loop over stuff. In this case we are looping over the meals list
                    // It takes a functions as an argument in which you can use each element of the array/list you are
                    // looping over (in this case the list of meals)
                    this.state.meals.map(function(mealObj) {

                        // Passing in the mealObj as a property to the MealObject component
                        // We do this so that we can use the value of mealObj inside MealObject component
                        return <MealObject meal={mealObj} />
                    })
                    :
                    <div />
            }
            </div>
        );
    }

}

export default MealPage;