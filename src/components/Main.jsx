import './Main.css'

const Main = () => {
    return (
        <section className='mainSection'>
            <div className='bodySection'>
                <header>
                    <h1 className='main-title'>Home</h1>
                    <p className='main-description' >Hi - Welcome to my Web Page!!</p>
                </header>
                <main>
                    <section>
                        <h3>Updates</h3>
                        <div className='updatesSection'>
                            <div className='targetUpdate'>
                                <p>Day 1</p>
                                <p>App Home Page</p>
                            </div>
                            <div className='targetUpdate'>
                                <p>Day 2</p>
                                <p>User profile</p>
                            </div>
                            <div className='targetUpdate'>
                                <p>Day 3</p>
                                <p>Sign up page</p>
                            </div>
                            <div className='targetUpdate'>
                                <p>Day 4</p>
                                <p>Chat screen</p>
                            </div>
                        </div>
                    </section>
                    <section className='about'>
                        <h3>About</h3>
                        <div className='about-section'>
                            <div>
                                <p>Soy Giovanny Andres Montero Carvajal, nací en la ciudad de Bogotá, y actualmente vivo en la ciudad de Manizales, Colombia.<br />Soy desarrollador web desde el año 2020 de manera autodidacta y actualmente estoy estudiando una tecnología en Análisis y Desarrollo de Sistemas de Información (SENA).</p>
                            </div>
                            <div>
                                imagen...
                            </div>
                        </div>

                    </section>
                </main>

            </div>
        </section>
    )
}

export default Main;