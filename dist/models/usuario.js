"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var conection_1 = __importDefault(require("../db/conection"));
var BASE_DB = new conection_1.default();
var UserModel = BASE_DB.init().define('user', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = UserModel;
//# sourceMappingURL=usuario.js.map