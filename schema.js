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

const CotonomaType = new GraphQLObjectType({
    name: 'Cotonoma',
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString,
        },
        key: {
            type: GraphQLString,
        },
        inserted_at: {
            type: GraphQLString,
        },
        updated_at: {
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

    mutation: new GraphQLObjectType({
	name: 'Mutation',
	fields: {
            createCoto: {
                type: CotoType,
                args: {
                    content: {
                        name: 'content',
                        type: GraphQLString
                    },
                },
                resolve(obj, {content}) {
                    return {
                        content,
                    };
                },
            },
            deleteCoto: {
                type: CotoType,
                args: {
                    id: {
                        name: 'id',
                        type: GraphQLInt
                    },
                },
                resolve(obj, {id}) {
                    return {
                        content: 'example coto',
                    };
                },
            },
            createCotonoma: {
                type: CotoType,
                args: {
                    cotonoma_id: {
                        name: 'cotonoma_id',
                        type: GraphQLInt,
                    },
                    name: {
                        name: 'name',
                        type: GraphQLString,
                    },
                    postId: {
                        name: 'postId',
                        type: GraphQLInt,
                    },
                },
                resolve(obj, {cotonoma_id, name, postId}) {
                    return {
                        content: name,
                    };
                },
            }
        }
    }),
});

export default schema;
