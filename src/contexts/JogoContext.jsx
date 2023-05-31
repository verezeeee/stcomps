import {useState, createContext, useContext} from 'react'

export const JogoContext = createContext({})

export function JogoProvider({children}){
    const [tabuleiro, setTabuleiro] = useState('x')
    const [playerAtivo, setPlayerAtivo] = useState([null,null,null,null,null,null,null,null,null])
    
    function changePlayer(){
        if(playerAtivo === 'x'){
            setPlayerAtivo('o')
        }else{
            setPlayerAtivo('x')
        }
    }

    function ModificarTabuleiro(index, valor){
        var copia = tabuleiro
        copia[index] = valor
        setTabuleiro(copia)
    }

    return(
        <JogoContext.Provider value={{playerAtivo, tabuleiro, changePlayer, ModificarTabuleiro}}>
            {children}
        </JogoContext.Provider>
    )
}

export function useJogoContext(){
    const context = useContext(JogoContext)
    return(context)
}