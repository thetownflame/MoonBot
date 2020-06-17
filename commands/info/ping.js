module.exports = {
    name: "ping",
    category: "other",
    description: "Returns latency and API ping",
    async execute(client, message, args) {
       message.channel.send(`Pong - ${client.ws.ping}ms`)
    }
}
