
import Hour from './hour';
import Minute from './minute';
import Seconde from './seconde';
import './App.css';
import React, { Component } from 'react';

const ms = 0;

function tohour(ms) {
  const mspersecond = 1000
  const mspermin = mspersecond * 60
  const msperhour = mspermin * 60
  const hour = Math.floor(ms / msperhour)
  const resthour = ms % msperhour
  const min = Math.floor(resthour / mspermin)
  const restmin = resthour % mspermin
  const second = Math.floor(restmin / mspersecond)



  return [hour, min, second]



}


// const tab=tohour(ms)


class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ms
    }

    
  }
      start = () => {
        if(this.state.interval) {
          return }
          const interval=setInterval(
          () => {
            this.setState({ test: this.state.test+1000 },console.log(this.state.test))
          
        },
          1000)
          this.setState({
            interval: interval  }) 
            // tzidi interval fi satete  yali hwa valeur ki nenzel bech ya9a fama valeur fi satute donc true
          }
            pause = () => {
              if(!this.state.interval) {
                return }
                 
               clearInterval(this.state.interval)
                this.setState({interval: undefined})
               
              
                
              }
              reset = () =>{  this.setState({ test:0 })
                  
              }
              // reset = () => {
              //   if(!this.state.interval) {
              //     return }
                   
                 
              //    this.state.test=0
                
                  
              //   }


      
  


  render() {
    return (<div className="App">
      <Hour hour={tohour(this.state.test)[0]} />
      <Minute min={tohour(this.state.test)[1]} />
      <Seconde second={tohour(this.state.test)[2]} />
      <input
                type="button"
                value="Start"
                onClick={this.start } />
                <input
                type="button"
                value="pause"
                onClick={this.pause } />
                <input
                type="button"
                value="reset"
                onClick={this.reset } />
    </div>)
  }
}

// function App() {
//   const tab=tohour(ms)
//   return (
//     <div className="App">
//       <Hour hour={tab[0]}/>
//       <Minute min={tab[1]}/>
//       <Seconde second={tab[2]}/>

//     </div>
//   );
// }

export default Timer;
