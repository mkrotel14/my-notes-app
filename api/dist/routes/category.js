"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const category_1 = require("../controller/category");
const router = (0, express_1.Router)();
router.get("/", (0, cors_1.default)(), (0, category_1.CategoryController)().getCategories);
exports.default = router;
//# sourceMappingURL=category.js.map