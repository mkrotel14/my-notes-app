"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const Todo_1 = require("../entities/Todo");
exports.options = {
    type: "sqlite",
    entities: [Todo_1.TodoEntity],
    entitiesTs: ["src/entities"],
    dbName: ":memory",
    debug: true,
};
//# sourceMappingURL=mikro-orm.config.js.map