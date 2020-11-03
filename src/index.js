
import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
class App extends React.Component {
    constructor() {
      super();

      this.onKeyPressed = this.onKeyPressed.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
  
      this.state = {
        popupVisible: false,
       selectedvalue: "dropdown"

      };
    }
  
    handleClick() {
      
      if (!this.state.popupVisible) {
       
        document.addEventListener('click', this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
  
      this.setState(prevState => ({
         popupVisible: !prevState.popupVisible,
      }));
    }
    
    handleOutsideClick(e) {
      this.setState({
        selectedvalue: 'dropdown'
       })
      console.log(e.target.innerText )

      this.setState({
       selectedvalue: e.target.innerText
      })
    
      if (this.node.contains(e.target)) {
        return;
      }
      this.setState(prevState => ({
        popupVisible: !prevState.popupVisible,
     }));
      this.handleClick();
    }
  //   handleKeyDown(event) {
  //     if(event.keyCode === 40) { 
  //         console.log('Enter key pressed')
  //   }
  // }
  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
        }

componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
     }      

onKeyPressed(e) {
  console.log(e.keyCode);
}
  
    

   
  
    render() {
     
      return (
        <div className="popover-container" ref={node => { this.node = node; }}>
          <button
            onClick={this.handleClick  }
          >
           {this.state.selectedvalue}
         
            
          </button>
          {this.state.popupVisible && (
            <div
              className="popover"  
            >
              
                <div 
                onKeyDown={this.onKeyPressed}
                tabIndex="-1"
                  >
               <button>Item1</button>
               <button>Item2</button>
               <button>Item3</button>
               <button>Item4</button>
              </div>
            </div>
           )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));