import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import Index from './index';
import ComponentDetails from './components/details';
import ComponentList from './components/list';

export default class Root extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
      
        <Route component={Index} path='/'>
        	<Route component={ComponentDetails} path='details'></Route>
        </Route>

        <Route component={ComponentList} path='list'></Route>
      </Router>
    );
  }
}
ReactDOM.render(<Root/>, document.getElementById('example'));



/*
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import {Router,Route,hashHistory} from 'react-router';
export default class Root extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route component={Index} path="/"></Route>
        <Route component={ComponentList} path="list"></Route>
      </Router>
    );
  };
}
ReactDOM.render(<Root/>, document.getElementById('example'));*/

