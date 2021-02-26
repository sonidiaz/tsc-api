import {DataTypes} from 'sequelize'
import DB from '../db/conection';

const BASE_DB = new DB()
const UserModel = BASE_DB.init().define('user', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.BOOLEAN
  }
})

export default UserModel