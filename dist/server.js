"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const fastify_1 = __importDefault(require("fastify"));
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const server = (0, fastify_1.default)({
    logger: true,
});
server.get("/", () => __awaiter(void 0, void 0, void 0, function* () {
    return { hello: "world" };
}));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.listen({ port: PORT });
        console.log(`server is up and running on port ${PORT}`);
    }
    catch (err) {
        server.log.error(err);
        // prisma.$disconnect();
        process.exit(1);
    }
});
exports.startServer = startServer;
