import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Dropdown } from 'semantic-ui-react'
import Select from 'react-select';

class App extends Component {
     state = {
          selectedOption: null,
        }

  handleKeyDown(e, data) {
      
      let code = e.keyCode
     console.log("key code")
     console.log(code)
     console.log(e.target)
     console.log(e)
     console.log(data)

     console.log("aria-expanded")
     console.log(e.target.getAttribute("aria-expanded"))

     if(code == 13)
     {
          console.log(e.target.getAttribute("aria-expanded") == false)
          console.log(e.target.getAttribute("aria-expanded") == "false")
          console.log(e.target.attributes)
          if(e.target.getAttribute("aria-expanded") == "false") {
               console.log("i am clicked by onkeydown")
               e.target.focus()
               console.log(e.target.focus)
          }
          else{
               console.log("wtfff")
          }

     }
     
     if(code == 38 || code == 40 ) {
          if(e.target.getAttribute("aria-expanded") == "false") {
               console.log("i am clicked by onkeydown")
               e.target.click()
          }
      }
  }

  handleKeyDown2(e, data) {
      
     let code = e.keyCode
    console.log("key code")
    console.log(code)
    console.log(e.target)
    console.log(e)
    console.log(data)

    console.log("aria-expanded")
    console.log(e.target.getAttribute("aria-expanded"))

    if(code == 13)
    {        
         if(e.target.getAttribute("aria-expanded") == "false") {
              console.log(e.target)
         }
         else{
              console.log("wtfff")
         }

    }
    
    if(code == 38 || code == 40 ) {
         if(e.target.getAttribute("aria-expanded") == "false") {
              console.log("i am clicked by onkeydown")
              e.target.click()
         }
     }
 }

  render() {
     const { selectedOption } = this.state;
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
 onBlur={(e, data) => {
     console.log("on blur is called")
     console.log(data)
 }}
 
 onClose={(e, data) => {
      if(e instanceof KeyboardEvent) {
           e.preventDefault()
      }
     console.log("onClose is called")
     console.log(e)
     console.log(data)
}}

onClick={(e, data) => {
     console.log("onClick is called")
     console.log(e)
     console.log(data)
}}
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
      <Dropdown  placeholder='Select Friend' fluid selection 
      
      onKeyDown={this.handleKeyDown}
      onBlur={(e, data) => {
          console.log("on blur is called")
          console.log(e.target)
          console.log(data)
      }}
      
      onClose={(e, data) => {
           if(e instanceof KeyboardEvent) {
                e.preventDefault()
           }
          console.log("onClose is called")

          console.log(data)
     }}
     
     onClick={(e, data) => {
          console.log("onClick is called")
          console.log(e.target)
          console.log(data)
     }}
      
      options={[
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

     <Select placeholder='Select Friend'
        value={selectedOption}
        isSearchable={false}
        onChange={(selectedOption) => {
          this.setState({ selectedOption });
          console.log(`Option selected:`, selectedOption);
        }}
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]}
      />


      </Grid.Column>
    </Grid.Row>
  </Grid>

        </header>
      </div>
    );
  }
}

export default App;
