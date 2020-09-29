"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("dotenv/config");
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const routes_1 = __importDefault(require("./routes"));
require("./database/connection");
const PORT = Number(process.env.PORT) || 3030;
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
