"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const port = process.env.APP_PORT;
    await app.listen(port, () => {
        console.log(`server is runing on port:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map