import React from 'react';
import Board from './Board';
import style from './App.module.css';
import Quoteapi from './Quoteapi';
import axios from 'axios';

class App extends React.Component{
render(){
  return(<div className={style.game}>
    <div className={style.game_info}> 
    <Board/>
    <div>
      <Quoteapi/>
    </div>

    </div>
  </div>
)
}
}
export default App;



