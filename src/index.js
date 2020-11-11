
import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
class App extends React.Component {
  constructor(props) {
    super(props);


    // this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false,
      selectedvalue: "dropdown",
      cursor: 0,
      result: [
        "Neptunium", "Plutonium", "Americium", "Berkelium"
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
    if (e.target.localName == "button") {
      this.setState({
        selectedvalue: 'dropdown'
      })
    }
    console.log("from outside", e.target.innerText)
    if (e.target.localName == "button") {
      this.setState({
        selectedvalue: e.target.innerText
      })
    }
   
       this.setState(prevState => ({
      popupVisible: false,

    }));
   
   
    this.handleClick();
  }

  handleKeyDown(e) {
    const { cursor, result } = this.state
    console.log("hii" + this.state.cursor)
    if (e.keyCode == 38 && cursor >= 0 ) {
      this.setState(prevState => ({
        cursor: this.state.cursor - 1,
        selectedvalue: result[cursor]
      }))
      if (cursor == result.length) {
        this.setState({ selectedvalue: "dropdown" })
      }
      console.log("if" + this.state.cursor)
    } else if (e.keyCode == 40 && cursor < result.length) {
      this.setState(prevState => ({
        cursor: this.state.cursor + 1,
        selectedvalue: result[cursor]
      }))
      console.log("elseif" + this.state.cursor)
    }

  }
  // focusTextInput() {
   
  //   this.textInput.current.focus();
  // }
 





  render() {
    console.log(this.state.selectedvalue);
    return (
      <div className="popover-container" ref={node => { this.node = node; }} onKeyDown={this.handleKeyDown}>
        <button
          onClick={this.handleClick}
          
        >
          {this.state.selectedvalue}
         


        </button>
        {this.state.popupVisible && (
          <div className="popover"
         
           >
            <button  className={(this.state.selectedvalue=='Neptunium')?'active':''}>Neptunium</button>
            <button  className={(this.state.selectedvalue=='Plutonium')?'active':''}>Plutonium</button>
            <button  className={(this.state.selectedvalue=='Americium')?'active':''}>Americium</button>
            <button  className={(this.state.selectedvalue=='Berkelium')?'active':''}>Berkelium</button>
          </div>
        )}
      </div>
      );
    }
  }
 
  ReactDOM.render(<App />, document.getElementById('root'));