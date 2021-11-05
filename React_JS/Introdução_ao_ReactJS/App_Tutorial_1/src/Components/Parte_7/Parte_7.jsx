import React from "react";
import Button from "../Parte_1/Button";
import Parte6 from "../Parte_6/Parte_6";


function showEvent(){
    return console.log('Ebéheeents')
}

function handleChange(e){
    const {value} = e.target
    console.log(value)
}

function Parte7(){
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
    function handleClick (e, id) {
        console.log('Delete Client', id)
    }
    
    function renderCustomers(customer,index){
        return (
          <div key={`customer: ${customer.id}`} /*Chaves devem ser únicas entre elementos irmãos*/>
            <li>
              Customer: {customer.name} <Button onClick={(e) => handleClick(e, customer.id)} name='Deletar Cliente'/> <br/>
              Position: {index + 1} <br/>
              Jobs: {customer.job} {/*Visivelmente mais agradável. */}
            </li>
            <br/>
            {/*{renderJobs(customer, index)}{/*Feito na aula /}*/}
          </div>
        )
    }
    return(
      <div>
          <h1>Manipulando Eventos</h1>
          <input onChange={handleChange} />
          <Button onClick={showEvent} name="Mostrar eventos"/>
          {customers.map(renderCustomers)}
      </div>
    )
}

export default Parte7