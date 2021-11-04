import React from "react";
import Button from "../Parte_1/Button";
import ComponentA from "../Parte_1/ComponentA";
import ComponentB from "../Parte_1/ComponentB";
import Client from "./Cliente";

function Parte_5(){
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

export default Parte_5