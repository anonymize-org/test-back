# Secrecy Backend Test 🔐

First you need to run `yarn` to install the dependencies.
Then `yarn generate` to generate the prisma client and typing files.

From here you can launch `yarn dev` and stick with it.

## Description

This project is a graphql api with nexus and prisma.
The database contains a movie list.

## Links

  * [Prisma Documentation](https://www.prisma.io/docs/)
  * [Nexus Documentation](https://nexusjs.org/docs/)
  * [Nexus Prisma Documentation](https://nexus.prisma.io)

## Steps

- Add a User table to the database with a unique id, a name, and a list of favorite movies.
- Add mutations to add and remove movies from the user's favorite list.
- Add a query to get the user's favorite movies.