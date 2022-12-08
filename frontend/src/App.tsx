import React, { FC } from 'react';
import { TodoItems } from './features/todoItems/Items';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TodoItems/>
      </header>
    </div>
  );
}

export default App;
