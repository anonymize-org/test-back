import { objectType } from "nexus";
import { Movie as NexusMovie } from 'nexus-prisma'

export const Movie = objectType({
  name: NexusMovie.$name,
  description: NexusMovie.$description,
  definition(t) {
    t.field(NexusMovie.id);
    t.field(NexusMovie.budget);
    t.field(NexusMovie.original_language);
    t.field(NexusMovie.original_title);
    t.field(NexusMovie.overview);
    t.field(NexusMovie.popularity);
    t.field(NexusMovie.poster_path);
    t.field(NexusMovie.release_date);
    t.field(NexusMovie.revenue);
    t.field(NexusMovie.runtime);
    t.field(NexusMovie.status);
  },
})