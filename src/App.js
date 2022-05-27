import logo from './logo.svg';

import monkey from './images/Funcky monkey.jpg';
import julian from './images/King Julien XIII.webp';
import panda from './images/Kong Fu Panda.jpg';
import mufasa from './images/Mufasa.jpg';
import sheep from './images/Sean The_Sheep.jpg';
import pooh from './images/Winnie the Pooh.jpg';

import angry from './images/icons/angry.png';
import happy from './images/icons/happy.png';
import yes from './images/icons/yes.png';
import no from './images/icons/no.png';
import reset from './images/icons/reset.png';

import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: null,
      index: 0,
      likes: 0,
      disLikes: 0,
      gameEnd: false,
    };
  }

  componentDidMount() {
    this.setState({
      animals: [
        { file: monkey, name: 'funky monkey' },
        { file: julian, name: 'julian' },
        { file: panda, name: 'panda' },
        { file: mufasa, name: 'mufsa' },
        { file: sheep, name: 'sheep' },
        { file: pooh, name: 'pooh' },
      ],
      index: 0,
      likes: 0,
      disLikes: 0,
    });
  }

  increase = (e, likes) => {
    e.preventDefault();
    console.log(this.state.animals.length);
    this.setState(
      (prevState) => {
        if (
          prevState.likes < prevState.animals.length &&
          prevState.disLikes + prevState.likes < prevState.animals.length &&
          prevState.index < prevState.animals.length
        )
          if (likes)
            return {
              likes: prevState.likes + 1,
            };
          else return { disLikes: prevState.disLikes + 1 };
      },
      () => {
        console.log('in setTimeout');
        setTimeout(() => {
          this.setState({
            index:
              this.state.index < this.state.animals.length - 1
                ? this.state.index + 1
                : this.state.index,
          });
        }, 1000);
        if (this.state.index === 5) this.setState({ gameEnd: true });
      }
    );
  };

  reset = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        animals: [...this.state.animals],
        index: 0,
        likes: 0,
        disLikes: 0,
        gameEnd: false,
      };
    });
  };

  render() {
    {
      return (
        this.state?.animals && (
          <div className='App'>
            <header className='App-header'>
              <div className='container'>
                <div className='row'>
                  <a href='#'>
                    <img src={angry} style={{ width: '100px' }} alt='' />
                    <i style={{ fontSize: '5rem', color: 'white' }}>
                      {this.state.disLikes}
                    </i>
                  </a>
                  <img src={logo} className='App-logo' alt='logo' />
                  <a href='#'>
                    <img src={happy} style={{ width: '100px' }} alt='' />
                    <i style={{ fontSize: '5rem', color: 'white' }}>
                      {this.state.likes}
                    </i>
                  </a>
                </div>
                <div className='row' style={{ justifyContent: 'center' }}>
                  <h5 style={{ margin: '0 0' }}>
                    {/* {console.log(this.state.animals)} */}
                    {this.state.animals[this.state.index].name}
                  </h5>
                </div>
                <div className='row' style={{ justifyContent: 'center' }}>
                  {!this.state.gameEnd && (
                    <img
                      src={this.state.animals[this.state.index].file}
                      alt={this.state.animals[this.state.index].name}
                      style={{
                        height: '400px',
                        width: '250px',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  {this.state.gameEnd &&
                    this.state.likes > this.state.disLikes && (
                      <div className='row'>
                        <h1>it look like you like animals</h1>
                      </div>
                    )}
                  {this.state.gameEnd &&
                    this.state.likes < this.state.disLikes && (
                      <div className='row'>
                        <h1>it look like you dont like animals</h1>
                      </div>
                    )}
                  {/* {console.log('index : ', this.state.index)} */}
                </div>

                <div className='row'>
                  <a href='#' onClick={(e) => this.increase(e, false)}>
                    <img src={no} style={{ width: '100px' }} alt='' />
                  </a>
                  <a href='#' onClick={(e) => this.reset(e)}>
                    <img
                      src={reset}
                      style={{
                        width: '100px',
                        backgroundColor: '#282c3451',
                      }}
                      alt=''
                    />
                  </a>
                  <a href='#' onClick={(e) => this.increase(e, true)}>
                    <img src={yes} style={{ width: '100px' }} alt='' />
                  </a>
                </div>
              </div>
            </header>
          </div>
        )
      );
    }
  }
}

export default App;
