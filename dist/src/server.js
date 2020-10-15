"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv/config");
const PORT = Number(process.env.PORT) || 3030;
app_1.app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
