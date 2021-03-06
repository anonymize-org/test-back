import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { context } from './context'

const server = new ApolloServer({
  schema: schema,
  context: context,
})

server.listen(3333).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`)
})