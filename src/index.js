
import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
class App extends React.Component {
    constructor(props) {
      super(props);

      this.handleKeyDown = this.handleKeyDown.bind(this)
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
  
      this.state = {
        popupVisible: false,
        selectedvalue: "dropdown",
        cursor: 0,
        result: [
        "Item1", "Item2", "Item3", "Item4"
        ]

      }
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

    handleKeyDown(e) {
      const { cursor, result } = this.state
     console.log("hii" + this.state.cursor)
      if (e.keyCode == 38 && cursor >= 0) {
        this.setState( prevState => ({
          cursor: this.state.cursor - 1,
          selectedvalue: result[cursor]
        }))
       if (cursor == result.length){
        this.setState({selectedvalue:"dropdown"})
       }
      console.log("if" +this.state.cursor)
      }  else if (e.keyCode == 40 && cursor < result.length) {
        this.setState( prevState => ({
          cursor: this.state.cursor + 1,
          selectedvalue: result[cursor]
        }))
      console.log("elseif" +this.state.cursor)
      }
    
  }
  
  
    

   
  
    render() {
     
      return (
        <div className="popover-container" ref={node => { this.node = node; } } onKeyDown={this.handleKeyDown }>
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