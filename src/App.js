import React from 'react'
import TextInput from './components/TextInput/'
import Header from './components/Header'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <TextInput/>
      </div>
    );
  }
}

export default App;
