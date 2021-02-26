import { Sequelize } from 'sequelize'

class DB {
  private HOST = process.env.DB_HOST || ''
  private DB_NAME = process.env.DB_NAME || ''
  private DB_USER_NAME = process.env.DB_USER_NAME || ''
  private DB_USER_PASS = process.env.DB_USER_PASS || ''
  constructor() {
    this.init()
  }
  init() {
    return new Sequelize(this.DB_NAME, this.DB_USER_NAME, this.DB_USER_PASS, {
      host: this.HOST,
      dialect: 'mysql',
      ssl: true,
      "dialectOptions": {
         "ssl": {
            "require": true,
            "rejectUnauthorized": false // <<<<<<< YOU NEED THIS
         }
       }
      // logging: false
    })
  }
}

export default DB