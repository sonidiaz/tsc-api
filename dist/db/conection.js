"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var DB = /** @class */ (function () {
    function DB() {
        this.HOST = process.env.DB_HOST || '';
        this.DB_NAME = process.env.DB_NAME || '';
        this.DB_USER_NAME = process.env.DB_USER_NAME || '';
        this.DB_USER_PASS = process.env.DB_USER_PASS || '';
        this.init();
    }
    DB.prototype.init = function () {
        return new sequelize_1.Sequelize(this.DB_NAME, this.DB_USER_NAME, this.DB_USER_PASS, {
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
        });
    };
    return DB;
}());
exports.default = DB;
//# sourceMappingURL=conection.js.map