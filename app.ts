import dotenv from 'dotenv'
import Server from './models/server';

if(!process.env.NODE_ENV || process.env.NODE_ENV.indexOf('production') === -1) {
  dotenv.config()
}

const server = new Server()

server.listen()