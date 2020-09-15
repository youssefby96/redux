import React from 'react';
import { connect } from 'react-redux';
import { increase , decrease } from './Action/Action';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends React.Component {
 
  
render() {
  console.log(this.props)
  return (
    <div className="App">
      <div className="btn">
       <Button className="plus" variant="contained" color="primary" 
       onClick={this.props.increase} >
        +
      </Button>
      
     <div className="count"> {this.props.count} </div>
     <Button className="moin" variant="contained" color="secondary" 
     onClick={() => this.props.count > 0 && this.props.decrease()}>
        -
      </Button>
    </div>
    </div>
  );
}
}

function mapStateToProps (state) {
  return{
count : state.count
  }
}


function mapDispatchToProps (dispatch) {
  return{
increase : () => dispatch(increase()),
decrease : () => dispatch(decrease()),
  }
}



export default connect(mapStateToProps , mapDispatchToProps)(App);
