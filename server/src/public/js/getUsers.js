addEventListener('DOMContentLoaded', async () => {
    const response = await fetch("http://localhost:5000/api/get-all-institutes", {
        method: "GET",
    })
})