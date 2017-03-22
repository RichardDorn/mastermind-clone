import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startNewGame } from '../actions/index';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentWillMount() {
    this.props.startNewGame();
    console.log(this.props.answer);
  }
  
  render() {
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
        answer: state.answer
    };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever slectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ startNewGame: startNewGame }, dispatch);
}

//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(App);