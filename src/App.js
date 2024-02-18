import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {
  const name = 'Ney'
  const newName = name.toUpperCase()
  const nome = 'Maria'
  
  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
        <h1>Olá React</h1>
        <Frase></Frase>
        <Frase></Frase>
        <p>Meu Primeiro App</p>
        <h2>Alterando JSX</h2>
        <p>Olá {name}</p>
        <p>Olá {newName}</p>
        <p>Soma: {sum(1 ,2)}</p>
        <img src={url} alt="Minha Imagem"/>
        <HelloWorld></HelloWorld>
        <SayMyName nome="Ney Adrian"></SayMyName>
        <SayMyName nome="João"></SayMyName>
        <SayMyName nome={nome}></SayMyName>
        <Pessoa nome="Ney" idade="16" profissao="Estudante" foto="https://via.placeholder.com/150"></Pessoa>
    </div>
  )
}

export default App;