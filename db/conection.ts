import { Sequelize } from 'sequelize'

const db = new Sequelize('nodeMySql', 'root', 'root' , {
  host: 'localhost',
  dialect: 'mysql',
  // logging: false
})

export default db