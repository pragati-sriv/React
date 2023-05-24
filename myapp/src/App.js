// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import store from './components/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
