//this syntax means, import React and pull off the property component as
//a variable called Component
//same as const Component = React.Component
import React, { Component } from 'react';

//1.make a class and extents it, this is called a class based component
class SearchBar extends Component {
  constructor(props){//when you call a class, this thing gets invoked
    super(props);

    //functional component do not have state, only class based does
    //we are creating a new object here, and assigning it to this.state
    //the object we pass will also contain properties that we want to record
    //on the state
    //So, when the user typing in the box, it updates the searchContent to not be empty
    //but to be the value of whatever the user typed
    //only inside of the constructor state will you want to change the state
    this.state = {term: ''};//this is the property that we want to change
    //*IMPORTANT:state update is triggered through an action, some kind of action
  }


  //2.make a render() function
    render() {
      //3.the render function returns something
      //everytime you reference a javascript object, use curly braces
        return (
          <div className="search-bar">
          {/*everytime you input something, it causes the state to update*/}
          <input
            onChange= {event => this.onInputChange(event.target.value)} />
          </div>
        )
    }//end of render

    onInputChange(_term){
        this.setState({term:_term});//this shit is optional
        this.props.onSearchTermChange(_term);//this function got passed down here
    }
}

export default SearchBar;

//What is state?
/*
  State is a plain JavaScript object that is used to record and react
  user event.And it exists on any component that is class based component
  Each class based component has its own state object, whenever a component
  state has changed, the componet re-renders, as well as its children
*/


/*
  Controlled component
  when we tell the input's value to be this.state.searchContent
  the<input>becomes a controlled component. A controlled component has it value set by state
  so its value only gonna change, when the state's value changes
*/


/*
  Downward data flow
  Only the most parent component in the application should be responsible
  for fetching data
*/
