import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Dropdown } from 'semantic-ui-react'

class App extends Component {

  handleKeyDown(e) {
      
      let code = e.keyCode
      console.log(code)
      if(code == 13 || code == 38 || code == 40 ) {
        e.target.click()
      }
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Dropdown
        placeholder='Select Friend' fluid selection options={[
   {
     text: 'Jenny Hess',
     value: 'Jenny Hess'
},{
     text: 'SAhil Hess',
     value: 'SAhil Hess',
     active: true
},{
     text: 'Varun Hess',
     value: 'Varun Hess'
},{
     text: 'Jen Hess',
     value: 'Jen Hess'
},{
     text: 'ny Hess',
     value: 'ny Hess'
}]
} />
      </Grid.Column>
      <Grid.Column>
      <Dropdown  placeholder='Select Friend' fluid selection options={[
   {
     text: 'Jenny Hess',
     value: 'Jenny Hess'
},{
     text: 'SAhil Hess',
     value: 'SAhil Hess'
},{
     text: 'Varun Hess',
     value: 'Varun Hess'
},{
     text: 'Jen Hess',
     value: 'Jen Hess'
},{
     text: 'ny Hess',
     value: 'ny Hess'
}]
} />


      </Grid.Column>
      <Grid.Column>
                        <Dropdown placeholder='Select Friend' fluid selection options={[
   {
     text: '1 Jenny Hess',
     value: 'Jenny Hess'
},{
     text: 'SAhil Hess',
     value: 'SAhil Hess'
},{
     text: 'Varun Hess',
     value: 'Varun Hess'
},{
     text: 'Jen Hess',
     value: 'Jen Hess'
},{
     text: 'ny Hess',
     value: 'ny Hess'
}]
} />
      </Grid.Column>
    </Grid.Row>
  </Grid>

        </header>
      </div>
    );
  }
}

export default App;
