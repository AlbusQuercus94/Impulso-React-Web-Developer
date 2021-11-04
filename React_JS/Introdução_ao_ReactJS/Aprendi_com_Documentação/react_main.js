'use strict';

const e = React.createElement
const button = (value) => e('button',{},value)
const p = (text) => e('p',{},text)
// const buttonB = <button>Second Button</button>

class App extends React.Component{
    
    render(){
      return e('div',{},
        p('Bem vindo a aula da Dio'),
        button('First Button'),
        button('Second Button'))
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);
