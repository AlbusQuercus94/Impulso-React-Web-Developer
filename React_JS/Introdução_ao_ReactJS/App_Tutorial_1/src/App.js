// import logo from './logo.svg';
import './App.css';
import Button from './Components/Button'
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';


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

//Função Principal
function App() {
  return (
    <div className="container">
      <h1>Hello, World! I'm learning React JS</h1>
      {myName()}
      <Button onClick={()=>console.log(soma(30,94))} name='Somar' /> {/*Assim é como se chama um componente.*/}
      <ComponentA>
        <Button onClick={()=>console.log(soma(60,84))} name='Comp.A' />
        <ComponentB>
          <Button onClick={()=>console.log(soma(50,14))} name='Comp.B' />
        </ComponentB>
      </ComponentA>
      
    </div>
  );
}

export default App;
