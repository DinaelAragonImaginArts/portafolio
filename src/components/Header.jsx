

const Header = () => {

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
        <div className="content">
            <div className="logo">
                <span >Dinael Aragon</span>
            </div>
            <nav>
                <button className="btn-enlace" onClick={()=>seccionTo('trabajos')}>Trabajos</button>
                <button className="btn-enlace">Experience</button>
            </nav>
        </div>
    )
}

export default Header