import { objectType, nonNull, intArg } from "nexus"

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allMovies', {
      type: 'Movie',
      resolve: (_parent, _args, { prisma }) => {
        return prisma.movie.findMany()
      },
    })

    t.nullable.field('movie', {
      type: 'Movie',
      args: {
        id: nonNull(intArg({ description: 'The id of the Movie' })),
      },
      resolve: (_parent, { id }, { prisma }) => {
        return prisma.movie.findUnique({
          where: { id },
        })
      },
    })
  }
})
