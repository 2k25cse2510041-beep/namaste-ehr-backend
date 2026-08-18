const app = require("./app");

const PORT = 5000;

const server = app.listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});

server.on("error", (error) => {
    console.error("SERVER ERROR:", error);
});

setInterval(() => {
    console.log("Server is still alive...");
}, 5000);