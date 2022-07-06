const express= require ("express")
const cors= require ("cors")

const jobproductController = require ("./controllers/product.controller")
const resumeController = require ("./controllers/resume.controller")
const userController = require ("./controllers/user.controller")


const app = express()


app.use(express.json());
app.use(cors())

app.use("/jobs", jobproductController)
app.use("/resume", resumeController)
app.use("/register", userController)


module.exports = app 