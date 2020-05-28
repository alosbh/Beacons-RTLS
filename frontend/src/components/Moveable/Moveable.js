import React from "react";
import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { Frame } from "scenejs";
import "./styles.css";
import Box from "../../assets/img/INGBOXBUILD.jpg"
import ToolCrib from "../../assets/img/ToolCrib.jpg"
import AutRoom from "../../assets/img/AutRoom.jpg"


class App extends React.Component {

    constructor(props){
        super(props);
        console.log("search box imported");
        this.state = {
            target: null,
            subtarget:null,
            container: null,
            scalable: true
        };
        this.setFocus = this.setFocus.bind(this);
    }
    
    
  frame = new Frame({
    
    left: "0px",
    top: "0px",
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    position:'relative',
    backgroundImage: `url(${Box})`
    
  });
  frame2 = new Frame({
    
    left: "0px",
    top: "0px",
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    position:'relative',
    backgroundImage: `url(${ToolCrib})`
    
  });

  frame3 = new Frame({
    
    left: "0px",
    top: "0px",
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    position:'relative',
    backgroundImage: `url(${AutRoom})`
    
  });


  render() {
      var self=this;
    const { scalable, target } = this.state;
    return (
      <div className="page-main" ref={function(el){self._div=el}}>
        <Moveable
         ref={ref(this, "boxbuild")}
          target={target}
          id="movref"
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

        <div id="boxbuild" ref={function(el){self._boxbuild=el}} style={{ borderStyle:'solid',borderColor:'#6f6f6f',borderWidth:'6px',backgroundColor:'#f1f1f1', display: 'inline-block', margin:'10px'}}>
          <h4 style={{backgroundColor:'#6f6f6f',padding:'10px',margin:'0px 0px 5px 0px',color:'#d7d7d7',fontSize:'30px',fontFamily:'Arial, sans-serif,Helvetica, sans-serif, Gill Sans, sans-serif, Lucida, sans-serif, Helvetica Narrow, sans-serif,  sans-serif'}}>Box Build</h4>
          <div style={{padding:'10px'}}>
            <canvas  height='663' width='1083'  style={{backgroundImage: `url(${Box})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}></canvas>  
          </div>
        </div>

        <div id="toolcrib" ref={function(el){self._toolcrib=el}} style={{ borderStyle:'solid',borderColor:'#6f6f6f',borderWidth:'6px',backgroundColor:'#f1f1f1', display: 'inline-block', margin:'10px'}}>
          <h4 style={{backgroundColor:'#6f6f6f',padding:'10px',margin:'0px 0px 5px 0px',color:'#d7d7d7',fontSize:'30px',fontFamily:'Arial, sans-serif,Helvetica, sans-serif, Gill Sans, sans-serif, Lucida, sans-serif, Helvetica Narrow, sans-serif,  sans-serif'}}>Tool Crib</h4>
          <div style={{padding:'10px'}}>
            <canvas  height='550' width='550'  style={{backgroundImage: `url(${ToolCrib})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}></canvas>  
          </div>
        </div>

        <div id="autroom" ref={function(el){self._autroom=el}} style={{ borderStyle:'solid',borderColor:'#6f6f6f',borderWidth:'6px',backgroundColor:'#f1f1f1', display: 'inline-block', margin:'10px'}}>
          <h4 style={{backgroundColor:'#6f6f6f',padding:'10px',margin:'0px 0px 5px 0px',color:'#d7d7d7',fontSize:'30px',fontFamily:'Arial, sans-serif,Helvetica, sans-serif, Gill Sans, sans-serif, Lucida, sans-serif, Helvetica Narrow, sans-serif,  sans-serif'}}>Aut Room</h4>
          <div style={{padding:'10px'}}>
            <canvas  height='550' width='299'  style={{backgroundImage: `url(${AutRoom})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}></canvas>  
          </div>
        </div>

        
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      target:null,
      subtarget:null
    });
    window.addEventListener("resize", this.onWindowReisze);
    this._boxbuild.addEventListener("click",()=> (this.setFocus(this._boxbuild)));
    this._toolcrib.addEventListener("click",()=> (this.setFocus(this._toolcrib)));
    this._autroom.addEventListener("click",()=> (this.setFocus(this._autroom)));
  }

  setFocus(element){
    
    this.setState({      
      target: element
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowReisze);
  }

  onWindowReisze = () => {
    var elements = document.querySelectorAll('canvas');
    elements.forEach(function(e){
    });
    // this.boxbuild.updateRect();
    console.log("Resizing window.")
  };
  
  setTransform(target) {
    
    if(target.id=="boxbuild"){
      
      var stl = "border-style: solid; border-color: rgb(111, 111, 111); border-width: 6px; background-color: rgb(241, 241, 241); display: inline-block; margin: 10px;"
      target.style.cssText = stl + this.frame.toCSS();
    }
    else if(target.id=="toolcrib"){
      var stl = "border-style: solid; border-color: rgb(111, 111, 111); border-width: 6px; background-color: rgb(241, 241, 241); display: inline-block; margin: 10px;"
      var bg = 'background-size:cover;background-position: center;background-repeat:no-repeat;background-image: url("/static/media/ToolCrib.0a06aab3.jpg");'
      target.style.cssText = stl + this.frame2.toCSS();
    }
    else if(target.id=="autroom"){
      var stl = "border-style: solid; border-color: rgb(111, 111, 111); border-width: 6px; background-color: rgb(241, 241, 241); display: inline-block; margin: 10px;"
      var bg = 'background-size:cover;background-position: center;background-repeat:no-repeat;background-image: url("/static/media/AutRoom.95e070d9.jpg");'
      target.style.cssText = stl + this.frame3.toCSS();
    }
    

  }

  onDrag = ({ target, clientX, clientY, top, left, isPinch }) => {

    console.log(top + " "+  left + " " + target.id);

    if(target.id=="boxbuild"){
      this.frame.set("left", `${left}px`);
      this.frame.set("top", `${top}px`);
    }
    else if(target.id=="toolcrib"){
      this.frame2.set("left", `${left}px`);
      this.frame2.set("top", `${top}px`);
    }
    else if(target.id=="autroom"){
      this.frame3.set("left", `${left}px`);
      this.frame3.set("top", `${top}px`);
    }
    this.setTransform(target);
  };
 
  onScale = ({ target, delta, clientX, clientY, isPinch }) => {

    if(target.id=="boxbuild"){
      const scaleX = this.frame.get("transform", "scaleX") * delta[0];
      const scaleY = this.frame.get("transform", "scaleY") * delta[1];
      this.frame.set("transform", "scaleX", scaleX);
      this.frame.set("transform", "scaleY", scaleY);
    }
    else if(target.id=="toolcrib"){
      const scaleX = this.frame2.get("transform", "scaleX") * delta[0];
      const scaleY = this.frame2.get("transform", "scaleY") * delta[1];
      this.frame2.set("transform", "scaleX", scaleX);
      this.frame2.set("transform", "scaleY", scaleY);
    }
    else if(target.id=="autroom"){
      const scaleX = this.frame3.get("transform", "scaleX") * delta[0];
      const scaleY = this.frame3.get("transform", "scaleY") * delta[1];
      this.frame3.set("transform", "scaleX", scaleX);
      this.frame3.set("transform", "scaleY", scaleY);
    }

    this.setTransform(target);

  };
  
}

export default App;