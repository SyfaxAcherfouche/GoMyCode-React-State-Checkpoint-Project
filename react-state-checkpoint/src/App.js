import './App.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person :{
        FullName:"Syfax Acherfouche",
        Bio:"I am a young Algerian from the city of Tigzirt, I am 22 years old and I like diving",
        Profession:"Full-Stack Developer",
        imgSrc:"./Assets/img.jpg"
      },
      show: true,
      count:0
    };
  }
  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
    
  }
  render() {
    return (
      <div className="App" style={{backgroundColor:'#F8BBD0', width:'100%', height:'100vh'}}>
        <button style={{border:'transparent', borderRadius:'1em' ,marginTop:"1em", backgroundColor:"#C1F4F0", fontSize:"small", fontWeight:'lighter'}} onClick={()=>this.setState({show:!this.state.show})} >Show/Hide the profile</button>
        <div style={{color:"black",fontWeight:"normal",textAlign:"center"}}>
You have spent <span style={{color:"blue",fontWeight:"bolder"}} >{this.state.count} seconds </span>looking at my profile.</div>
            {this.state.show?
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"10px",width:"20em",height:"27em",margin:"auto",backgroundColor:"#F1F2E2 ",marginTop:"30px"}}>
            <img src={this.state.Person.imgSrc} style={{width:"8em", height:"8em", border:'solid 5px #E91E63' ,borderRadius:"50%"}} alt="profile" />
            <h1 style={{color:"#E91E63"}} >{this.state.Person.FullName}</h1>
            <h4 style={{color:"#9E9E9E"}}>{this.state.Person.Bio}</h4>
            <h2 style={{color:"#212121", fontSize:'1em'}}>{this.state.Person.Profession}</h2>
        </div>
        :null
        }

      </div>
    );
  }
}

export default App;
