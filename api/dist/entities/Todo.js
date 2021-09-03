"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoEntity = void 0;
const core_1 = require("@mikro-orm/core");
exports.TodoEntity = new core_1.EntitySchema({
    name: "todo",
    properties: {
        id: { type: "number", primary: true },
        todo: { type: "string" },
        date: {
            type: "Date",
            onCreate: () => new Date(),
            onUpdate: () => new Date(),
        },
    },
});
//# sourceMappingURL=Todo.js.map