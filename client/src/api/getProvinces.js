
export const getProvinces = async (form) => {
    try {
        const response = await fetch("http://localhost:5000/api/provincias", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
};
export const getLocalities = async (form) => {
    try {
        if (form.province === "") return setLocalities([]);

        const response = await fetch(
            `http://localhost:5000/api/provincia/${form.province}/localidades`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
};