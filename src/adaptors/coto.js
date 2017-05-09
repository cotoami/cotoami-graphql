import Cotonoma from './cotonoma';

export default class Coto {
    constructor(props) {
        this.id = props.id;
        this.postId = props.postId;
        this.cotonoma_key = props.cotonoma_key;
        this.as_cotonoma = props.as_cotonoma;
        this.content = props.content;
        this.amishi = props.amishi;
        this.inserted_at = props.inserted_at;
        this.updated_at = props.updated_at;
        this._posted_in = props.posted_in;
    }

    posted_in() {
        if (!this._posted_in) {
            return null;
        }

        return new Cotonoma(this._posted_in);
    }
}
