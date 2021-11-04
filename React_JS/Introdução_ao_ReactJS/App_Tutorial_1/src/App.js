// import logo from './logo.svg';
import './App.css';
import Button from './Components/Parte_1/Button'
import ComponentA from './Components/Parte_1/ComponentA';
import ComponentB from './Components/Parte_1/ComponentB';
import Clock from './Components/Parte_1/Clock';


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

function parte_1(){
  return (
    <div>
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
      <div className='clock'>
        <Clock></Clock>
      </div>
    </div>
  )
}

//Função Principal
function App() {
  return (
    <div>
      {parte_1()}
    </div>
  );
}

export default App;
