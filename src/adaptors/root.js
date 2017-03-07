
class Root {
    cotos() {
        return [
            {
                id: 1,
                as_cotonoma: false,
                cotonoma_key: 'abcdefg',
                content: 'sample coto 1',
                inserted_at: '2017-02-01 12:58:59',
                updated_at: '2017-02-01 12:58:59',
                posted_in: {
                    id: 2,
                    name: 'exmaple cotonoma',
                    key: 'abcdefg',
                    inserted_at: '2017-02-01 12:58:59',
                    updated_at: '2017-02-01 12:58:59',
                },
            },
            {
                id: 2,
                as_cotonoma: true,
                cotonoma_key: 'abcdefg',
                content: 'example cotonoma',
                inserted_at: '2017-02-01 12:58:59',
                updated_at: '2017-02-01 12:58:59',
                posted_in: null,
            },
        ];
    }

    cotonoma({key}) {
        return {
            id: 2,
            name: 'exmaple cotonoma',
            key,
            inserted_at: '2017-02-01 12:58:59',
            updated_at: '2017-02-01 12:58:59',
            cotos: [
                {
                    id: 1,
                    as_cotonoma: false,
                    cotonoma_key: 'abcdefg',
                    content: 'sample coto 1',
                    inserted_at: '2017-02-01 12:58:59',
                    updated_at: '2017-02-01 12:58:59',
                    posted_in: {
                        id: 2,
                        name: 'exmaple cotonoma',
                        key,
                        inserted_at: '2017-02-01 12:58:59',
                        updated_at: '2017-02-01 12:58:59',
                    },
                },
            ],
        };
    }

    session() {
        return {
            id: 1,
            email: 'foo@example.com',
            display_name: 'bar',
            avatar_url: 'http://example.com/foo.png',
        }
    }

    createCoto({content}) {
        return {
            id: 1,
            as_cotonoma: true,
            cotonoma_key: 'abcdefg',
            content,
            inserted_at: '2017-02-01 12:58:59',
            updated_at: '2017-02-01 12:58:59',
            posted_in: null,
        };
    }

    deleteCoto({id}) {
        return {
            id,
            as_cotonoma: true,
            cotonoma_key: 'abcdefg',
            content: 'example cotonoma',
            inserted_at: '2017-02-01 12:58:59',
            updated_at: '2017-02-01 12:58:59',
            posted_in: null,
        };
    }

    createCotonoma({cotoami_id, name, postId}) {
        return {
            id: 2,
            name: 'exmaple cotonoma',
            key,
            inserted_at: '2017-02-01 12:58:59',
            updated_at: '2017-02-01 12:58:59',
            cotos: [],
        };
    }

    signin(email, save_anonymous) {
        return 'ok';
    }
};

export default Root;
