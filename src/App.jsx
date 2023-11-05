import { NavBar } from './Components/NavBar/NavBar';
import { ContainerBox } from './Components/ContainerBox/ContainerBox';
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <ContainerBox greeting={"Bienvenidos a Orange Perfumería"} />
    </>
  )
}

export default App