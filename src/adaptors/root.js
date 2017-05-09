import { getJson, postJson, getText, deleteThenReturnTrue } from './rest';
import Coto from './coto';
import Cotonoma from './cotonoma';

class Root {
    cotos(args, context) {
        return getJson(context, 'cotos')
            .then(cotos => cotos.map(coto => new Coto(coto)));
    }

    cotonoma({ key }, context) {
        return getJson(context, `cotonomas/${key}/cotos`)
            .then((data) => {
                const { cotonoma } = data;
                return new Cotonoma(cotonoma);
            });
    }

    cotonomas({ cotonoma_id }, context) {
        const path = cotonoma_id ? `cotonomas?cotonoma_id=${cotonoma_id}` : 'cotonomas';
        return getJson(context, path)
            .then(cotonomas => cotonomas.map(cotonoma => new Cotonoma(cotonoma)));
    }

    amishi({ email }, context) {
        return getJson(context, `amishis/email/${email}`);
    }

    session(args, context) {
        return getJson(context, 'session');
    }

    createCoto({ cotonoma_id, postId, content }, context) {
        const body = {
            coto: {
                cotonoma_id,
                postId,
                content,
            },
        };
        return postJson(context, 'cotos', body)
            .then(props => new Coto(props));
    }

    // It might be better to return a coto object
    // but now it can't. Because the RESTful API does
    // not have an api that retrieve a coto specified by
    // an ID.
    deleteCoto({id}, context) {
        return deleteThenReturnTrue(context, `cotos/${id}`);
    }

    createCotonoma(args, context) {
        const body = {
            cotonoma: args,
        }
        return postJson(context, 'cotonomas', body)
            .then(props => new Cotonoma(props));
    }

    signin({email, save_anonymous}, context) {
        return getText(context, `signin/request/${email}/${save_anonymous}`)
    }
};

export default Root;
