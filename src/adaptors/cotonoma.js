import fetch from 'node-fetch';
import restUrl from './rest_url';
import Coto from './coto';

export default class Cotonoma {
    constructor(props) {
        this.id = props.id;
        this.coto_id = props.coto_id;
        this.postId = props.postId;
        this.key = props.key;
        this.name = props.name;
        this.inserted_at = props.inserted_at;
        this.updated_at = props.updated_at;
    }

    cotos() {
        return fetch(restUrl(`cotonomas/${this.key}/cotos`)).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(({ cotos }) => cotos.map(coto => new Coto(coto)));
    }
}
