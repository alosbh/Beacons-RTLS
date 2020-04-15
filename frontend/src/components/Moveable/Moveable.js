import React from "react";
import ReactDOM from "react-dom";
import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { Frame } from "scenejs";
import "./styles.css";
import { Card } from "../Card/Card";
import floorplan from "../../assets/img/BB.jpg"

class App extends React.Component {
  frame = new Frame({
    
    left: "px",
    top: "0px",
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
  });

  state = {
    target: null,
    container: null,
    scalable: true
  };
  render() {
      var self=this;
    const { scalable, target } = this.state;
    return (
      <div className="page main" ref={function(el){self._div=el}}>
        <Moveable
         ref={ref(this, "moveable")}
          target={target}
          
          container={this._div}
          draggable={true}
          scalable={scalable}
          
          keepRatio={true}
          origin={false}
          throttleDrag={1}          
          throttleScale={0}
          onDrag={this.onDrag}          
          onScale={this.onScale}
          
        />
        
        
          
          <div className="moveable">
          
          <img class="card-img-top" src={floorplan} alt="Card image" style={{width:'100%'}}></img>
        
          </div>

          
        
        
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      target: document.querySelector(".moveable")
    });
    window.addEventListener("resize", this.onWindowReisze);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowReisze);
  }
  onWindowReisze = () => {
    this.moveable.updateRect();
  };
  clickScalable = () => {
    this.setState({
      scalable: true,
      resizable: false,
      warpable: false
    });
  };
  
  

  setTransform(target) {
    target.style.cssText = this.frame.toCSS();
  }
  
  onDrag = ({ target, clientX, clientY, top, left, isPinch }) => {
    this.frame.set("left", `${left}px`);
    this.frame.set("top", `${top}px`);
    this.setTransform(target);
    
  };
  onScale = ({ target, delta, clientX, clientY, isPinch }) => {
    const scaleX = this.frame.get("transform", "scaleX") * delta[0];
    const scaleY = this.frame.get("transform", "scaleY") * delta[1];
    this.frame.set("transform", "scaleX", scaleX);
    this.frame.set("transform", "scaleY", scaleY);
    this.setTransform(target);
    
  };
  
 
}

export default App;