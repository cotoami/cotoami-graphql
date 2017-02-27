import bunyan from 'bunyan';

const logger = bunyan.createLogger({
    name: 'cotoami',
    serializers: bunyan.stdSerializers
});

export default logger;

