import { useState } from 'react'
import { Container } from '../styles/pages/Gerador'

export default function Gerador() {
  const [sorteando, setSorteando] = useState(false)
  const [sorteados, _setSorteados] = useState([])
  const [sorteado, setSorteado] = useState('-')
  const [numeros, _setNumeros] = useState(
    {
      b: [],
      i: [],
      n: [],
      g: [],
      o: []
    }
  )
  const [rows, setRows] = useState([])

  function handleSortear(){
    const sorteado = getRandomInt(1, 75);

    switch(true){
      case sorteado >= 1 && sorteado < 16: addTable('b', sorteado); break;
      case sorteado >= 16 && sorteado < 31: addTable('i', sorteado); break;
      case sorteado >= 31 && sorteado < 46: addTable('n', sorteado); break;
      case sorteado >= 46 && sorteado < 61: addTable('g', sorteado); break;
      case sorteado >= 61 && sorteado < 76: addTable('o', sorteado); break;
    }
  }

  function addTable(letter, number){
    setSorteado(`${letter.toUpperCase()} - ${number}`)
    numeros[letter].push(number)
    let maiorColuna = Object.values(numeros).map(letter => letter.length).reduce((a, b) => Math.max(a, b));
    let newRow = []
    for(let i = 0; i < maiorColuna; i++){
      newRow = [
        ...newRow,
        <tr>
          <td className={number === numeros['b'][i] && 'sorteado'}>{numeros['b'][i] || '-'}</td>
          <td className={number === numeros['i'][i] && 'sorteado'}>{numeros['i'][i] || '-'}</td>
          <td className={number === numeros['n'][i] && 'sorteado'}>{numeros['n'][i] || '-'}</td>
          <td className={number === numeros['g'][i] && 'sorteado'}>{numeros['g'][i] || '-'}</td>
          <td className={number === numeros['o'][i] && 'sorteado'}>{numeros['o'][i] || '-'}</td>
        </tr>
      ]
    }
    setRows(newRow)
    if(!Object.values(numeros).map(numero => numero.length >= 15).includes(false)){
      setSorteando(true)
      setSorteado('Acabou os números!!')
    }
  }

  const getRandomInt = (min, max) => {
    let sorteado;
    if(typeof sorteados !== 'object') return;

    function random() {
        sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        if(sorteados.includes(sorteado)){
            return random()
        }
        sorteados.push(sorteado)
        return sorteado
    }

    return random();
}

  return (
    <Container>
      <header>
        <h2>Gerador de numeros</h2>
      </header>
      <div className='container-sorteado'>
          <h2>{sorteado}</h2>
      </div>
      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>B</th>
              <th>I</th>
              <th>N</th>
              <th>G</th>
              <th>O</th>
            </tr>
          </thead>
          <tbody>
            {
             rows.length > 0 ? rows : 
              <tr>
                <td colSpan={5}>
                  Nenhum numero sorteado!
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <button onClick={() => !sorteando ? handleSortear() : null}>
        SORTEAR NÚMERO
      </button>
    </Container>
  )
}
