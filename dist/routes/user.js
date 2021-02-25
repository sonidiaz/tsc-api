"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../controllers/users");
var router = express_1.Router();
router.get('/', users_1.getUsers);
router.get('/:id', users_1.getUser);
router.post('/', users_1.postUser);
router.put('/:id', users_1.putUser);
router.delete('/:id', users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map