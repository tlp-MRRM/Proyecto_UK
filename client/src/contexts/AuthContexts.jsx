// import React, { createContext, useState, useContext } from 'react';
// import { loginRequest, registerRequest } from '../api/AuthRequest';

// export const AuthContext = createContext();

// export const useAuthContext = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [token, setToken] = useState(localStorage.getItem('token'));
//     // Función para iniciar sesión
//     const login = async(email, password) => {
//       const data =  await loginRequest(email, password);
//         if(data.token){	
//             setIsLoggedIn(true);
//             localStorage.setItem('token', data.token);
//             setToken(data.token);
//         }
//         setIsLoggedIn(false);
//         setToken(null);
//     };

//     // Función para cerrar sesión
//     const logout = () => {
//         localStorage.removeItem('token');
//         setIsLoggedIn(false);
//         setToken(null);
//     };
//     const register = async (name, email, password, role) => {
//         const data = await registerRequest(name, email, password, role);
//         if  (data.token){
//             localStorage.setItem('token', data.token);
//             setToken(data.token);


//         }
//         setIsLoggedIn(true);
//         setToken(null);
//     };
//     // Valor del contexto
//     const authContextValue = {
//         isLoggedIn,
//         login,
//         logout,
//         register,
//         token,

//     };

//     return (
//         <AuthContext.Provider value={authContextValue}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
