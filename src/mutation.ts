import { objectType } from "nexus"

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.nonNull.boolean("test", {
      resolve: () => true
    })
  },
})