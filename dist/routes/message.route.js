"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = require("../controllers/message.controller");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    (0, message_controller_1.getMessages)(req, res);
});
router.post('/', (req, res) => {
    (0, message_controller_1.createMessage)(req, res);
});
exports.default = router;
