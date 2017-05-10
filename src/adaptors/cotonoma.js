import fetch from 'node-fetch';
import { getJson } from './rest';
import Coto from './coto';

export default class Cotonoma {
    constructor(props) {
        this.id = props.id;
        this.coto_id = props.coto_id;
        this.postId = props.postId;
        this.key = props.key;
        this.name = props.name;
        this.owner = props.owner;
        this.inserted_at = props.inserted_at;
        this.updated_at = props.updated_at;
    }

    cotos(args, context) {
        return getJson(context, `cotonomas/${this.key}/cotos`)
            .then(({ cotos }) => cotos.map(coto => new Coto(coto)));
    }

    members(args, context) {
        return getJson(context, `cotonomas/${this.key}/cotos`)
            .then(({ members }) => members);
    }
}
