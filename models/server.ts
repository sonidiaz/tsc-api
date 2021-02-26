import express, {Application} from 'express'
import userRoutes from '../routes/user'
import cors from 'cors'
import DB from '../db/conection';

class Server {

  private app: Application;
  private port: string
  private apiPath = {
    users: '/api/users'
  }

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8000'
    this.dbConnection();
    // initial methods
    this.middlewares()
    this.routes()
  }
  middlewares() {
    // cors
    this.app.use(cors())
    //  read the body
    this.app.use(express.json())

    // directory public
    this.app.use(express.static('public'))
  }
  routes() {
    this.app.use(this.apiPath.users, userRoutes)
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log('server run in port ' + this.port)
    })
  }
  async dbConnection() {
    try {
      const BASE_DB = new DB();
      await BASE_DB.init().authenticate()
      console.log('paso la base de datos')
    } catch (error) {
      throw new Error(error)
    }
  }
}


export default Server;