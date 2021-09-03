"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexInstance = void 0;
const knex_1 = require("knex");
const config = {
    client: "sqlite",
    debug: true,
};
exports.knexInstance = (0, knex_1.knex)(config);
//# sourceMappingURL=knex-orm.config.js.map