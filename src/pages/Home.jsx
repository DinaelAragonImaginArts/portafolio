import Loader from "../components/Loader"

const Home = () => {

    const seccionTo = (id) => {
        const headerOffset = 45;
        let seccion = document.querySelector(`#${id}`);
        let elementPosition = seccion.getBoundingClientRect().top;
        let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }

    
    return (
        <main className='home-container'>
            <div className="presentacion-container">
                <div className="animacion">
                    <Loader />
                </div>
                <div className="elyo">
                    <h1>Desarrollador Web con 3 años de experiencia desarrollando Frontend asi mismo 2 años en backend y 1 año en Devops.</h1>
                </div> 
            </div>
            <button className="down" onClick={()=>seccionTo('trabajos')}><p>|</p></button>
        </main>
    )
}

export default Home