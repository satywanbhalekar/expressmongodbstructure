const express = require('express')
require("./db/conn")
const cors = require('cors');
const projectsRoute = require('./routers/men');
// app.js
const userRoutes = require('./ExpressAuthJwt/routes/userRoutes');
const app = express()
const port = process.env.PORT|| 3000




app.use(cors());
app.use(express.json());
app.use(projectsRoute);
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Load Routes
app.use("/api/user", userRoutes)



 const server = app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

module.exports = server;



