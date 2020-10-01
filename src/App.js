import React,{useState, useContext, useEffect} from 'react';
import FontSizeChanger from 'react-font-size-changer';
import { SketchPicker } from 'react-color';


import './body.css'
import './toolbar.css';
//WHAT YOU WERE DOING WHEN YOU LEFT OFF: Changing App State from other component

class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      color: '#000000',
      fontWeight: 'normal',
      textAlign: 'left',
      overline: '',
      lineThrough: '',
      underline: '',

    }
    console.log(this.state)
    this.updateColor = this.updateColor
    this.updateFontWeight = this.updateFontWeight
    this.updateTextAlign = this.updateTextAlign
    this.updateOverline = this.updateOverline
    this.updateUnderline = this.updateUnderline
    this.updateLineThrough = this.updateLineThrough
    
    
    
  }
  
  updateColor = hex => {this.setState({color: hex})}
  updateTextAlign = alignment =>{this.setState({textAlign: alignment})}
  updateOverline = () =>{
    if (this.state.overline === ''){
      this.setState({overline: 'overline'})
    } else {
      this.setState({overline: ''})
    }
  }
  updateUnderline = () =>{
    if (this.state.underline === ''){
      this.setState({underline: 'underline'})
    } else {
      this.setState({underline: ''})
    }
  }
  updateLineThrough = () =>{
    if (this.state.lineThrough === ''){
      this.setState({lineThrough: 'line-through'})
    } else {
      this.setState({lineThrough: ''})
    }
  }
  updateFontWeight = () => {
    if (this.state.fontWeight === 'normal'){
      this.setState({fontWeight: 'bold'})
    } else {
      this.setState({fontWeight: 'normal'})
    }
  }
 




  render(){
    
    return (
    <div>
    <Toolbar 
    updateColorCB={this.updateColor} 
    iconColor={this.state.color} 
    updateFontWeightCB={this.updateFontWeight} 
    updateTextAlignCB={this.updateTextAlign} 
    updateOverlineCB={this.updateOverline}
    updateUnderlineCB={this.updateUnderline}
    updateLineThroughCB={this.updateLineThrough} />
    
      <DocumentBody 
      textColor={this.state.color} 
      fontWeight={this.state.fontWeight} 
      textAlign={this.state.textAlign} 
      overline={this.state.overline}
      underline={this.state.underline}
      lineThrough={this.state.lineThrough} />
    <Footer />
    </div>  
      )
  }
  
}



export function DocumentBody(props){
  return( 
  
  <div className="document" id="document">
            <div 
            style={{
              'color': props.textColor, 
              'fontWeight': props.fontWeight, 
              'textAlign': props.textAlign,
              'textDecoration': `${props.overline} ${props.underline}`,
              'textDecorationLine': props.lineThrough,
            }} 
            className="page" 
            contentEditable="true">First <code>.page</code>Welcome to TeamWork, a collaborative word processing application.</div>

  </div>
  )
}





export function Toolbar(props){
  const [isColor, setIsColor] = useState(false)
  const handleColorToggle = () =>{
    setIsColor(true)
  }
  
  
  



    const colorButtonStyle = {
      'position': 'absolute',
      'width': '60px',
      'height': '40px',
      'background': 'white',
      'border': '1px solid #737373',
      'borderRadius': '5px',
      'marginLeft':'10px',
      'top': '5px',
      'fontSize': '36px',
      'color': props.iconColor,
        }

    const boldButtonStyle = {
      'position': 'absolute',
      'width': '60px',
      'height': '40px',
      'background': 'white',
      'border': '1px solid #737373',
      'borderRadius': '5px',
      'marginLeft':'80px',
      'fontWeight': 'bold',
      'fontSize': '36px',
      'color': '#737373',
    }

    const leftAlignStyle ={
        'position': 'absolute',
        'width': '60px',
        'height': '40px',
        'background': 'white',
        'border': '1px solid #737373',
        'borderRadius': '5px',
        'marginLeft':'150px',
        'fontWeight': 'bold',
        'fontSize': '36px',
        'color': '#737373',
        'textAlign': 'left',
    }

    const centerAlignStyle ={
      'position': 'absolute',
      'width': '60px',
      'height': '40px',
      'background': 'white',
      'border': '1px solid #737373',
      'borderRadius': '5px',
      'marginLeft':'220px',
      'fontWeight': 'bold',
      'fontSize': '36px',
      'color': '#737373',
      'textAlign': 'center',
  }

  const rightAlignStyle ={
    'position': 'absolute',
    'width': '60px',
    'height': '40px',
    'background': 'white',
    'border': '1px solid #737373',
    'borderRadius': '5px',
    'marginLeft':'290px',
    'fontWeight': 'bold',
    'fontSize': '36px',
    'color': '#737373',
    'textAlign': 'right',
  }

  const justifyAlignStyle ={
    'position': 'absolute',
    'width': '60px',
    'height': '40px',
    'background': 'white',
    'border': '1px solid #737373',
    'borderRadius': '5px',
    'marginLeft':'360px',
    'fontWeight': 'bold',
    'fontSize': '36px',
    'color': '#737373',
    'textAlign': 'justify',
  }

  const overlineStyle ={
    'position': 'absolute',
    'width': '60px',
    'height': '40px',
    'background': 'white',
    'border': '1px solid #737373',
    'borderRadius': '5px',
    'marginLeft':'430px',
    'fontWeight': 'bold',
    'fontSize': '36px',
    'color': '#737373',
    'textDecoration': 'overline',
  }

  const underlineStyle ={
    'position': 'absolute',
    'width': '60px',
    'height': '40px',
    'background': 'white',
    'border': '1px solid #737373',
    'borderRadius': '5px',
    'marginLeft':'500px',
    'fontWeight': 'bold',
    'fontSize': '36px',
    'color': '#737373',
    'textDecoration': 'underline',
  }

  const lineThroughStyle ={
    'position': 'absolute',
    'width': '60px',
    'height': '40px',
    'background': 'white',
    'border': '1px solid #737373',
    'borderRadius': '5px',
    'marginLeft':'570px',
    'fontWeight': 'bold',
    'fontSize': '36px',
    'color': '#737373',
    'textDecorationLine': 'line-through',
  }


  const printStyle ={
    'position': 'absolute',
    'width': '60px',
    'height': '40px',
    'background': 'white',
    'border': '1px solid #737373',
    'borderRadius': '5px',
    'marginLeft':'640px',
    'fontWeight': 'bold',
    'fontSize': '36px',
    'color': '#737373',
    
  }
  
    return (
      
    <nav className="toolbar">
      <h1>Lax Co: TeamWork.</h1>      
      <div className="tools">
      <FontSizeChanger
          targets={[' .page']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px', 'fontWeight': 'bold'}}>A&#8679;</span>,
            down: <span style={{'fontSize': '36px',}}>A&#8681;</span>,
            style: {
              backgroundColor: 'white',
              color: '#737373',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px',
            },
            buttonsMargin: 10
          }}          
        />
      <button onClick={handleColorToggle} style={colorButtonStyle} className="colourPicker">A</button>
      
        { isColor ?
         <div>
           <SketchPicker onChangeComplete={(color) => props.updateColorCB(color.hex)}/>
           <button style={{'background':'red'}} onClick={()=>setIsColor(false)}>X</button>
          </div> : null }
          <button onClick={()=>props.updateFontWeightCB()} style={boldButtonStyle} className="boldButton">B</button>
          <button onClick={()=>props.updateTextAlignCB('left')} style={leftAlignStyle} className="leftAlignButton">I</button>
          <button onClick={()=>props.updateTextAlignCB('center')} style={centerAlignStyle} className="centerAlignButton">I</button>
          <button onClick={()=>props.updateTextAlignCB('right')} style={rightAlignStyle} className="rightAlignButton">I</button>
          <button onClick={()=>props.updateTextAlignCB('justify')} style={justifyAlignStyle} className="justifyAlignButton">I</button>
          <button onClick={()=>props.updateOverlineCB()} style={overlineStyle} className="overlineButton">A</button>
          <button onClick={()=>props.updateUnderlineCB()} style={underlineStyle} className="underlineButton">A</button>
          <button onClick={()=>props.updateLineThroughCB()} style={lineThroughStyle} className="lineThroughButton">A</button>
          <button onClick={()=>window.print()} style={printStyle} className="printButton">	&#128438;</button>
      </div>
      
         
    </nav>
    )
};

export function Footer(){


return(
<nav className="footer">
  <h2 style={{color: 'white', 'paddingTop':'30px', 'float': 'right','paddingRight':'10px'}}>	&#9400; {new Date().getFullYear()} Liam West-Cahill </h2>
</nav>)
}



export default App;


