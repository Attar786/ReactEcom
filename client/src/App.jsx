// import { Container } from 'r eact-bootstrap'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
// import HomeScree from './Screen/HomeScree';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <main className='py-3'>
<Container>
<Outlet></Outlet>
      <h1>Wlcome to E-Shop</h1>
      </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App
