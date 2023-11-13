import React from 'react'

export const PageNotFound404 = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <main className='w-25 p-4' style={{ height: 'fit-content' }}>
                <div>
                    <div className='d-flex align-items-center flex-column'>
                        <h3 style={{ width: 'fit-content' }}>ERROR</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-error-404" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#88afca" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7v4a1 1 0 0 0 1 1h3" />
                            <path d="M7 7v10" />
                            <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" />
                            <path d="M17 7v4a1 1 0 0 0 1 1h3" />
                            <path d="M21 7v10" />
                        </svg>
                    </div>
                    <p className='text-center'>La pagina a la que intentas acceder no existe o se ha movido</p>
                    <div className='d-flex justify-content-center w-100'><a className='btn' style={{ backgroundColor: '#88afca', color: 'white', fontWeight: 'bold' }} href='/'>Volver al inicio</a></div>

                </div>
            </main>
        </div>
    )
}
