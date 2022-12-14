import logo from './logo.svg';
import './App.css';

function App(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((num, index) => 
  <li key={index}>{num}</li>
  );
  return (
    <ul>{listItems}</ul>
  )
}

export default App;
