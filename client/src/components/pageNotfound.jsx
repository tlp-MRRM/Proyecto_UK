//page not found con gif de error

export const PageNotFound = () => {
    return (
        <body>
            <main>
                <h2 className="text-center text-danger font-monospace">¡Oh no! Parece que te has perdido. La página que buscas no está disponible. Revisa la URL o vuelve a la página de inicio. ¡Buena suerte en tu búsqueda! 🌐🔍

                </h2>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <img src="/img/404.gif" alt="404" />
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

