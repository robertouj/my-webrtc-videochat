const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

/**
 * - socket.io object
 *   this create the server
 * - second parentheses for options
 * */
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Running");
});

io.on("connection", (socket) => {

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
