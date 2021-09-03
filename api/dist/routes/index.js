"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = __importDefault(require("./todo"));
const category_1 = __importDefault(require("./category"));
const routes = (0, express_1.Router)();
routes.use("/todo", todo_1.default);
routes.use("/category", category_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map