// import logo from './logo.svg';
import './App.css';


function soma (a, b){
  return a + b
}

function myName (){
  return (
    <div>
      <h1>My name is Pedro!</h1>
      <h2>Introdução ao React JS</h2>
      <p> Soma de 10 e 5: {soma(10,5)}</p>
    </div>
  )}


function App() {
  return (
    <div className="container">
      <h1>Hello, World! I'm learning React JS</h1>
      {myName()}
    </div>
  );
}

export default App;
