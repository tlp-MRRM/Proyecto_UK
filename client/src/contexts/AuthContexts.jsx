import Swal from "sweetalert2";
import React, { createContext, useState, useEffect, useContext } from "react";
import { loginRequest, registerRequest } from "../api/AuthRequest";
import { Navigate } from "react-router-dom";
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

  const loginFunction = async (email, password) => {
    try {
      const data = await loginRequest(email, password);
      console.log(data)
      let redirectTo = null;
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);

        if (data.role === "admin") {
          redirectTo = "/admin";
        } else if (data.role === "institute") {
          const response = await fetch(
            `http://localhost:5000/api/get-main-institute/${data.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`,
              },
            }
          );
          console.log(response)

          const institute = await response.json();
          if (response.status === 200) {
            redirectTo = `/instituto/${institute[0].id}`;
          } else {
            redirectTo = "/registro/instituto";
          }
        } else {
          redirectTo = "/";
        }
      } else {
        setToken(null);
      }

      Swal.fire({
        title: "Success",
        text: "Logged in successfully!",
        icon: "success",
      });

      return { data, redirectTo };
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
      });
    }
  };




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
  const authContextValue = {
    isAuthenticated,
    loginFunction,
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
