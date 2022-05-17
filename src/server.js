import express from "express"
import initWebRouter from "./router/web"
import connection from './config/connectDB';

require('dotenv').config()

const app = express()
const port = process.env.PORT

// viewEngine
app.use(express.static('./src/public'))
app.set('view engine', 'ejs');
app.set('views', './src/views');

initWebRouter(app); // các route tìm kiếm đường link


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})