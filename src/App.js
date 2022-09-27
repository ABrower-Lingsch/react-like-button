
import './App.css';

import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount(count + 1);
  }

  const updateWord = () => {
    if (count === 0 || count > 1) {
      return `${count} Likes`
    } else {
      return `${count} Like`
    };
  }



  return (
    <div className="App">
      <button id="likeButton" onClick={handleClick} >{updateWord()}</button>
    </div>
  );
}


export default App;
