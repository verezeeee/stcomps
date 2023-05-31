import { Wrapper } from "./components/styles/StyleWrapper";
import { Title } from "./components/styles/Title";
import TemplateBox from './components/TemplateBox'
import { JogoProvider } from "./contexts/JogoContext";


function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'rgb(16 38 64 / 84%)',
      
    }}>
      <JogoProvider>
      <Title>
          <h1 id='titulo'>Tic Tac Toe</h1>
      </Title>
      <Wrapper>
        <TemplateBox valor={9}/>
        <TemplateBox valor={8}/>
        <TemplateBox valor={7}/>
        <TemplateBox valor={6}/>
        <TemplateBox valor={5}/>
        <TemplateBox valor={4}/>
        <TemplateBox valor={3}/>
        <TemplateBox valor={2}/>
        <TemplateBox valor={1}/>
      </Wrapper>
      </JogoProvider>
    </div>
  );
}

export default App;
