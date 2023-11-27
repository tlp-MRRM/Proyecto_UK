import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";
import React, { createContext, useState, useEffect, useContext } from "react";
import { loginRequest, registerRequest } from "../api/AuthRequest";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) return;
    localStorage.getItem("token", token);
    if (token) {
      setToken(token);
    }
  }, [token]);

  const isAuthenticated = () => {
    return token != null;
  }

  // Función para iniciar sesión
  const login = async (email, password) => {
    try {
      const data = await loginRequest(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        setToken(null);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // Función para cerrar sesión



  const logout = () => {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro de que deseas cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setToken(null);
        window.location.href = "/iniciar-sesion";
      }
    });
  };
  const register = async (name, email, password, role) => {
    const data = await registerRequest(name, email, password, role);
    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    }
    setToken(null);
  };
  // Valor del contexto
  const authContextValue = {
    isAuthenticated,
    login,
    logout,
    register,
    token,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
