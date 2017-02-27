import onFinished from 'on-finished';
import logger from './logger';

export default function accessLog(req, res, next) {
    onFinished(res, (err, res) => {
        logger.info({ req, res, err });
    });
    next();
}
