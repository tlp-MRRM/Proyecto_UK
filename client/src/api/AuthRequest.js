export const loginRequest = async (email, password) => {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("Error en el login.");
    const data = await response.json();
    return data;
};


export const registerRequest = async (name, email, password, role) => {
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
    });
    if (!response.ok) throw new Error("Error en el registro.");
    const data = await response.json();
    return data;
}