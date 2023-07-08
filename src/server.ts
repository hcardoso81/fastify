// ESM
import Fastify, { FastifyInstance, RouteHandlerMethod } from 'fastify'

const fastify: FastifyInstance = Fastify({
    logger: true
})


fastify.get('/', async (request, reply) => {
    return { hello: 'Negro' };
});


/**
 * Run the server!
 */
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()