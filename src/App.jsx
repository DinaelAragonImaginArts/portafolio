import Header from './components/Header'
import Home from './pages/Home';
import Trabajos from './pages/Trabajos';

const App = () => {
  return (
    <>
      <header className='header-container'>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <section>
        <Trabajos />
      </section>
    </>
  )
}

export default App



