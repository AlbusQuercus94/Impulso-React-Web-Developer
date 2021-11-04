// import logo from './logo.svg';
import './App.css';
import Button from './Components/Parte_1/Button'
import ComponentA from './Components/Parte_1/ComponentA';
import ComponentB from './Components/Parte_1/ComponentB';
import Clock from './Components/Parte_1/Clock';
import Client from './Components/Parte_5/Cliente';


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

function parte_5(){
  const hasCostumer = true;
  
  const renderHistory = (
      <div>
        <p>Clique o botão abaixo para visualizar o histórico de clientes.</p>
        <Button onClick={() => console.log('Funfou')} name="Client's de history"/>
      </div>
    )
  const renderAdd = (
      <div>
        <p>Clique o botão abaixo para adicionar um clientes.</p>
        <Button onClick={() => console.log('Funfou')} name='Add new client'/>
        {showClient()}{/*Como o Show Client returna null se HasCostumer é false, então ele não é renderizado, mesmo sendo chamado. */}
      </div>
    )
  function showClient(){
    if(!hasCostumer) return null;
    return(
      <div>
        <Client gender='Male' name='Pedro' age='27'/>
      </div>
    )
  }

  return (
    <div>
      <p>Aula de Renderização de Condicionais</p>
      <p>Aula assistida na Digital Innovation One</p>
      <br/>
      {/*If Inline begin */}
      {hasCostumer && (
        <div>
            <p>Clique o botão abaixo para visualizar o histórico de clientes.</p>
            <Button onClick={() => console.log('Funfou')} name='Historico de Cliente'/>
            {showClient()}
        </div>
      )}
      {/*If Inline ends */}

      {/*If Else inline begins */}
      {hasCostumer? renderHistory : renderAdd }
      {/*If Else inline ends */}

    </div>
  )
}

function parte_6(){
  const customers = [
    {
      id: 1,
      name:'Garnet Dil',
      job: "Summoner"
    },
    {
      id: 2,
      name: 'Vivi',
      job: "Black Mage"
    },
    {
      id: 3,
      name: 'Zidane',
      job: "Thief"
    },
    {
      id: 4,
      name:'Steiner',
      job: "Knight"
    }
  ]
  /*Renderizando Multiplos Elementos Início */
  /*Sempre separar a chamada em blocos e camadas de serviços. */
  function renderCustomers(customer,index){
    return (
      <div key={`"customer: ${customer.id}`} /*Chaves devem ser únicas entre elementos irmãos*/>
        <li>
          Customer: {customer.name} <br/>
          Position: {index + 1} <br/>
          Jobs: {customer.job} {/*Visivelmente mais agradável. */}
        </li>
        <br/>
        {/*{renderJobs(customer, index)}{/*Feito na aula /}*/}
      </div>
    )
  }
  /*Renderizando Multiplos Elementos Fim */

  function renderJobs(customer,index){
    return (
      <li>
        Jobs: {customer.job}
        <br/>
      </li>
    )
  }


  return(
    <div>
      <p>Aula de Renderização de Condicionais</p>
      <p>Aula assistida na Digital Innovation One</p>
      <div>
        <ul>
          {customers.map(renderCustomers)}
        </ul>
      </div>
    </div>
  )
}

//Função Principal
function App() {
  return (
    <div>
      {parte_6()}
    </div>
  );
}

export default App;
