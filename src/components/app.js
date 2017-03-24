import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startNewGame } from '../actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentWillMount() {
    this.props.startNewGame();
  }
  
  render() {
    console.log(this.props.answer);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
    //Whatever gest returned will show up as props inside of BookList
    return {
        answer: state.guesses.answer,
    };
}



//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, { startNewGame })(App);