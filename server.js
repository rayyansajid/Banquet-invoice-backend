const fastify = require('fastify')({
    logger: true
})

const cors = require('@fastify/cors')
// const routes = require('./src/routes/mainRoutes')
const routes = require('./src/routes/testRoutes')
const dotenv = require('dotenv')
const { syncModels } = require('./src/utils/syncModels')
dotenv.config()

fastify.register(cors,{
    origin: "*",
    methods:['GET','POST','PUT','DELETE']
});

routes.forEach(route=>{
    fastify.route(route)
});

syncModels();

// fastify.get('/', async (request, reply) => {
//   return { message: 'Hello from Fastify!' };
// });

const start = async () => {
  try {
    await fastify.listen({ port: process.env.SERVER_PORT });
    console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
