// const {
//   GraphQLInt,
//   GraphQLString,
//   GraphQLList,
//   GraphQLObjectType,
//   GraphQLSchema,
// } = require('graphql');
const db = require('./db')

// const User = new GraphQLObjectType({
//   name: 'User',
//   description: 'All users',
//   fields: () => {
//     return {
//       id: {
//         type: GraphQLInt,
//         resolve(user) {
//           return user.id
//         }
//       },
//       first: {
//         type: GraphQLString,
//         resolve(user) {
//           return user.first
//         }
//       },
//       last: {
//         type: GraphQLString,
//         resolve(user) {
//           return user.last
//         }
//       },
//       imgUrl: {
//         type: GraphQLString,
//         resolve(user) {
//           return user.imgUrl
//         }
//       },
//       email: {
//         type: GraphQLString,
//         resolve(user) {
//           return user.email
//         }
//       },
//       password: {
//         type: GraphQLString,
//       },
//       // salt: {},
//       googleId: {
//         type: GraphQLString,
//         resolve(user) {
//           return user.googleId
//         }
//       },
//     }
//   }
// });

// const Prompt = new GraphQLObjectType({
//   name: 'Prompt',
//   description: 'Entry prompts',
//   fields: () => {
//     return {
//       id: {
//         type: GraphQLInt,
//         resolve(prompt) {
//           return prompt.id
//         }
//       },
//       prompt: {
//         type: GraphQLString,
//         resolve(prompt) {
//           return prompt.prompt
//         }
//       },
//       userId: {
//         type: GraphQLInt,
//         resolve(prompt) {
//           return prompt.userId
//         }
//       }
//     }
//   }
// })

// const Entry = new GraphQLObjectType({
//   name: 'Entry',
//   description: 'All entries',
//   fields: () => {
//     return {
//       id: {
//         type: GraphQLInt,
//         resolve(entry) {
//           return entry.id;
//         }
//       },
//       prompt: {
//         type: GraphQLString,
//         resolve(entry) {
//           return entry.prompt;
//         }
//       },
//       text: {
//         type: GraphQLString,
//         resolve(entry) {
//           return entry.text;
//         }
//       },
//       tags: {
//         type: new GraphQLList(GraphQLString),
//         resolve(entry) {
//           return entry.tags
//         }
//       },
//       userId: {
//         type: GraphQLInt,
//         resolve(entry) {
//           return entry.userId
//         }
//       }
//     }
//   }
// })

// const Query = new GraphQLObjectType({
//   name: 'Query',
//   description: 'Root Query',
//   fields: () => {
//     return {
//       users: {
//         type: new GraphQLList(User),
//         // args: {
//         //   id: {
//         //     type: GraphQLInt,
//         //   },
//         //   email: {
//         //     type: GraphQLString,
//         //   },
//         //   googleId: {
//         //     type: GraphQLString,
//         //   }
//         // },
//         resolve(root, args) {
//           return db.models.user.findAll({where: args})
//         }
//       },
//       entries: {
//         type: new GraphQLList(Entry),
//         // args: {
//         //   id: {
//         //     type: GraphQLInt,
//         //   },
//         //   userId: {
//         //     type: GraphQLInt,
//         //   },
//         // },
//         resolve(root, args) {
//           return db.models.entries.findAll({where: args})
//         }
//       },
//       prompts: {
//         type: new GraphQLList(Prompt),
//         // args: {
//         //   id: {
//         //     type: GraphQLInt,
//         //   },
//         //   userId: {
//         //     type: GraphQLInt,
//         //   }
//         // },
//         resolve(root, args) {
//           return db.models.prompts.findAll({where: args})
//         }
//       },
//     }
//   }
// })

// module.exports = new GraphQLSchema({
//   query: Query,
// })

const {buildSchema} = require('graphql')
export const schema = buildSchema(`
  type Query {
    user(id: Int!): User
    allUsers(): [User]
  },
  type User {
    id: Int
    first: String
    last: String
    email: String!
    googleId: Int
    password: String!
    tags: [String]!
  }
`)
const getUser = (...args) => {
  const userID = args.indexOf
  return users.filter(user => user.id === userID)[0]
}
const users = (...args) => db.Users.findAll()

export const root = {
  getUser,
  users
}
