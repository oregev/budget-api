import fastify from "fastify";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = fastify({
  logger: true,
});

server.get("/", async (): Promise<{ hello: string }> => {
  return { hello: "world" };
});

export const startServer = async (): Promise<void> => {
  try {
    await server.listen({ port: PORT });
    console.log(`server is up and running on port ${PORT}`);
  } catch (err) {
    server.log.error(err);
    // prisma.$disconnect();
    process.exit(1);
  }
};
