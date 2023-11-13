import React from 'react'

export const Unauthorized = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <main className='w-25 p-4' style={{ height: 'fit-content' }}>
                <div>
                    <div className='d-flex align-items-center flex-column'>
                        <h3 style={{ width: 'fit-content' }}>ERROR</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-access" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#88afca" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                            <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                            <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                            <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                            <path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                            <path d="M10 11v-2a2 2 0 1 1 4 0v2" />
                        </svg>
                    </div>
                    <p className='text-center'>No tienes permiso para ver esta pagina</p>
                    <div className='d-flex justify-content-center w-100'><a className='btn' style={{ backgroundColor: '#88afca', color: 'white', fontWeight: 'bold' }} href='/'>Volver al inicio</a></div>

                </div>
            </main>
        </div>
    )
}
