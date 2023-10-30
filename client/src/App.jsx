// import { Container } from 'r eact-bootstrap'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScree from './Screen/HomeScree';
function App() {

  return (
    <>
      <Header/>
      <main className='py-3'>
<Container>
  <HomeScree></HomeScree>
      <h1>Wlcome to E-Shop</h1>
      </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App
