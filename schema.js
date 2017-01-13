import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const CotoType = new GraphQLObjectType({
    name: 'Coto',
    fields: () => ({
        content: {
            type: GraphQLString,
        },
    }),
});

const SessionType = new GraphQLObjectType({
    name: 'Session',
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        email: {
            type: GraphQLString,
        },
        display_name: {
            type: GraphQLString,
        },
        avatar_url: {
            type: GraphQLString,
        },
    }),
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            cotos: {
                type: new GraphQLList(CotoType),
                resolve() {
                    return [
                        { content: 'sample coto 1' },
                        { content: 'sample coto 2' },
                    ];
                }
            },
            session: {
                type: SessionType,
                resolve() {
                    return {
                        id: 1,
                        email: 'foo@example.com',
                        display_name: 'bar',
                        avatar_url: 'http://example.com/foo.png',
                    }
                }
            },
        },
    }),
});

export default schema;
