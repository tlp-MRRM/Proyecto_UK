import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Nav = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="mt-5 mb-5">
                        <a href="/" className="material-symbols-outlined"> home </a>
                    </div>

                    <div>
                        <a href="/preguntas" className="material-symbols-outlined">
                            quiz
                        </a>
                    </div>

                    <div>
                        <a href="/buscador" className="material-symbols-outlined">
                            travel_explore
                        </a>
                    </div>
                    <div>
                        <a href="/iniciar-sesion" className="material-symbols-outlined">
                            login
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}
