import Swal from "sweetalert2";
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
    return token !== null && token !== undefined && token !== "";
  };
  // Función para iniciar sesión

  const login = async (email, password) => {
    try {
      const data = await loginRequest(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        if (data.role === "admin") {
          window.location.href = "/admin";
        } else if (data.role === "institute") {
          const institute = await fetch(
            `http://localhost:5000/api/get-institute-main-institute/${data.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`,
              },
            }
          );
          if (institute.status === 200) {
            window.location.href = `/instituto/${institute.id}`;
          } else if (institute.status === 404) {
            window.location.href = `/registro/instituto`;
          }
        } else {
          window.location.href = "/";
        }
      } else {
        setToken(null);
      }

      Swal.fire({
        title: "Success",
        text: "Logged in successfully!",
        icon: "success",
      });

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
      });
    }
  };
  // Función para cerrar sesión

  const logout = () => {
    Swal.fire({
      title: "Confirmación",
      text: "¿Estás seguro de que deseas cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
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
