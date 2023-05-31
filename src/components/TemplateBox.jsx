import React, { useState } from 'react'
import { StyleTemplateBox } from './styles/StyleTemplateBox'
import { JogoProvider } from '../contexts/JogoContext'
import { useJogoContext } from '../contexts/JogoContext'

const TemplateBox = ({valor}) => {
  const [Valor, setValor] = useState(null)
  const {playerAtivo, tabuleiro, changePlayer, ModificarTabuleiro} = useJogoContext()
  function click(){
    ModificarTabuleiro(valor-1, playerAtivo)
    setValor(playerAtivo)
    changePlayer()
  }
  function testWin(){
    //Linhas
    if(
      tabuleiro[0]===playerAtivo && tabuleiro[1]===playerAtivo && tabuleiro[2]===playerAtivo
    ){
      console.log("Parabéns, você ganhou o jogo.")
      document.getElementById('titulo').innerHTML +=  '<h1>Parabéns Você Ganhou o Jogo</h1>'
    }else if(
      tabuleiro[3]===playerAtivo && tabuleiro[4]===playerAtivo && tabuleiro[5]===playerAtivo
    ){
      console.log("Parabéns, você ganhou o jogo.")
      document.getElementById('titulo').innerHTML +=  '<h1>Parabéns Você Ganhou o Jogo</h1>'
    }else if(
      tabuleiro[6]===playerAtivo && tabuleiro[7]===playerAtivo && tabuleiro[8]===playerAtivo
    ){
      console.log("Parabéns, você ganhou o jogo.")
      document.getElementById('titulo').innerHTML +=  '<h1>Parabéns Você Ganhou o Jogo</h1>'
    }
    //Colunas
    if(
      tabuleiro[0]===playerAtivo && tabuleiro[3]===playerAtivo && tabuleiro[6]===playerAtivo
    ){
      console.log("Parabéns, você ganhou o jogo.")
      document.getElementById('titulo').innerHTML +=  '<h1>Parabéns Você Ganhou o Jogo</h1>'
    }else if(
      tabuleiro[1]===playerAtivo && tabuleiro[4]===playerAtivo && tabuleiro[7]===playerAtivo
    ){
      console.log("Parabéns, você ganhou o jogo.")
      document.getElementById('titulo').innerHTML +=  '<h1>Parabéns Você Ganhou o Jogo</h1>'
    }else if(
      tabuleiro[2]===playerAtivo && tabuleiro[5]===playerAtivo && tabuleiro[8]===playerAtivo
    ){
      console.log("Parabéns, você ganhou o jogo.")
      document.getElementById('titulo').innerHTML +=  '<h1>Parabéns Você Ganhou o Jogo</h1>'
    }
  }

  return (
    <JogoProvider>
      <StyleTemplateBox onClick={() => {click(); testWin()}}>
        {Valor}
      </StyleTemplateBox>
    </JogoProvider>    
  )
}

export default TemplateBox