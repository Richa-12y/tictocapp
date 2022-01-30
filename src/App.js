import React from 'react';
import Board from './Board';
import style from './App.module.css';

class App extends React.Component{
render(){
  return(<div className={style.game}>
    <div className={style.game_info}> 
    <Board/>

    </div>
  </div>
)
}
}
export default App;



