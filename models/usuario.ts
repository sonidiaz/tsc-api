import {DataTypes} from 'sequelize'
import db from '../db/conection';

const UserModel = db.define('user', {
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