"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!process.env.TS_NODE_DEV) {
    require('module-alias/register');
}
require("dotenv/config");
const app_1 = require("./app");
const PORT = Number(process.env.PORT) || 3030;
app_1.app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
