import React from "react"

function Parte_6(){
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

export default Parte_6