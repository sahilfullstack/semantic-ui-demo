import React, { Component, createRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Dropdown } from 'semantic-ui-react'

class App extends Component {

     constructor(props){
          super(props);
          this.myref = React.createRef();

     }
     state = {
          shouldFocus1: false, 
          shouldFocus2: false, 
          shouldFocus3: false, 
          selectedOption: null,
        }
        

        handle_select_navigation2(event) {
   
          let keyCode = event.keyCode
          console.log(keyCode)
          let target = event.currentTarget
       
          if (keyCode == 13) {
              console.log(target.getAttribute("role"))
              if (target.getAttribute("role") == "listbox") {
       
                  if (target.getAttribute("aria-expanded") == "false") {
                      console.log(event.target)
                      event.target.click()
                      console.log("here i am clicked")
                  } else {
                    //   event.preventDefault()
                    //   event.stopPropagation()
                      var ele = event.currentTarget;
                      event.target.focus()
                      event.target.focus()
                      event.target.focus()
                      console.log("here", ele)
                  }
       
              }
          }
          if(keyCode == 38 || keyCode == 40 ) {
               if(event.target.getAttribute("aria-expanded") == "false") {
                    console.log("i am clicked by onkeydown")
//                    this.myRef.open()
                         event.target.click()

}
           }
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
      onClose={(event, data)=> {
           if(event instanceof KeyboardEvent) {
                console.log("should focus is true")
                this.setState({ shouldFocus1: true})
           }else {
               this.setState({ shouldFocus1: false})

           }
          console.log("onclose is called")
          console.log(event)
          console.log(data)
     
     }}
     
     
     onChange={(event, data)=> {
          console.log("onChange is called")
          console.log(event)
          console.log(data)
     }}
     
     onBlur={(event, data)=> {
          console.log(event)
          console.log(data)
          if(this.state.shouldFocus1) {
               console.log(" i am focused")
               event.currentTarget.focus() 
          } else {
               console.log("what happended")
          }
          this.setState({ shouldFocus1: false})
          
          console.log(this.myref)
          console.log(this.myref.current)
          console.log("onBlur is called")
          console.log(event.currentTarget)

          console.log(event.current)
          console.log(event)
          console.log(data)
     }}
      onKeyDown={this.handle_select_navigation2}
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

<Dropdown     
ref = {this.myref}
placeholder='Select Friend yey' fluid selection 

onClose={(event, data)=> {
     if(event instanceof KeyboardEvent) {
          console.log("should focus is true")
          this.setState({ shouldFocus2: true})
     }else {
         this.setState({ shouldFocus2: false})

     }
    console.log("onclose is called")
    console.log(event)
    console.log(data)

}}


onChange={(event, data)=> {
     console.log("onChange is called")
     console.log(event)
     console.log(data)
}}

onBlur={(event, data)=> {
     console.log(event)
     console.log(data)
     if(this.state.shouldFocus2) {
          console.log(" i am focused")
          event.currentTarget.focus() 
     } else {
          console.log("what happended")
     }
     this.setState({ shouldFocus2: false})
     
     console.log(this.myref)
     console.log(this.myref.current)
     console.log("onBlur is called")
     console.log(event.currentTarget)

     console.log(event.current)
     console.log(event)
     console.log(data)
}}



      onKeyDown={this.handle_select_navigation2}      
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
    </Grid.Row>
  </Grid>

        </header>
      </div>
    );
  }
}

export default App;
