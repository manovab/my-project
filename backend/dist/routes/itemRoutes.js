"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemsControllers_1 = require("../controllers/itemsControllers");
const router = express_1.default.Router();
router.get("/", itemsControllers_1.getItems);
router.post("/", itemsControllers_1.createItem);
exports.default = router;
