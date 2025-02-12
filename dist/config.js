'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _logUtils = require('./logUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The default configuration for the webServer:
 */
/**
 * The configuration parameters module of the webserver adapter.
 *
 * The property values of this object will be resolved during the startup process.
 * This object will appear as the default setup within the `container.config.webServer` property during the startup process, when the `startup` function of this adapter is called.
 *
 * In order to change the values of the configuration parameters, use either the corresponding environment variables, or merge your config object, with this default config setup.
 *
 * @module config
 */
module.exports = {
    /**
     * The webserver related configuration object, that will be merged into the `container.config` object.
     *
     * @property {Array} logBlackList - The array of URIs that should not be logged. Default: `[]`. Env.: `WEBSERVER_LOG_BLACKLIST`, the comma-separated list of URI strings.
     * @property {Number} port - The port where the webserver will listen. Env.: `WEBSERVER_PORT`. Default: `3007`.
     * @property {Boolean} useCompression - If `true` then the server will use the compression middleware. Env: `WEBSERVER_USE_COMPRESSION`. Default: `false`.
     * @property {Boolean} usePdms - If `true` the adapter will use the API call forwarding towards NATS topics. Env.: `WEBSERVER_USE_PDMS`. Default: `false`.
     * @property {String} pdmsTopic - The name of the NATS topic where the PDMS adapter will forward the REST API endpoint calls. Env.: `WEBSERVER_PDMS_TOPIC`. Default: `easer`.
     * @property {Object} middlewares -The dictionary of middleware functions needs to be added. Defaults: `{ preRouting: [], postRouting: [] }`.
     * @property {String} restApiPath -The path to the root file of the swagger/OpenApi descriptor file(s) Env.: `WEBSERVER_RESTAPIPATH`.
     * @property {String} staticContentBasePath -The base path to the static endpoints of the REST API. Env.: `WEBSERVER_STATIC_CONTENT_BASEPATH`.
     * @property {Boolean} ignoreApiOperationIds - Ignores the `operationId` property of the API endpoint descriptor if `true`. Env.: `WEBSERVER_IGNORE_API_OPERATION_IDS`. Default: `false`.
     * @property {Boolean} enableMocking - Responses the first example found in the `examples` array of endpoint descriptor if there is any. For proper working, it requires the `ignoreApiOperationIds` config parameter to be `true` in case the `operationId`s of the endpoints are defined. Env.: `WEBSERVER_ENABLE_MOCKING`. Default: `false`.
     * @property {String} basePath - Define the base-path (prefix) for the REST API endpoints. Env.: `WEBSERVER_BASEPATH. `Default: `/`.
     * @property {Object} oasConfig - The swagger-parser configuration object. Defaults: `{ parse: { yaml: { allowEmpty: false }, resolve: { file: true } } }`
     * @property {Object} bodyParser - The request body parser configuration object. Defaults: all types default to false.
     */
    webServer: {
        logBlackList: (0, _logUtils.getLogBlackList)(process.env.WEBSERVER_LOG_BLACKLIST),
        port: process.env.WEBSERVER_PORT || 3007,
        useCompression: process.env.WEBSERVER_USE_COMPRESSION || false,
        useResponseTime: process.env.WEBSERVER_USE_RESPONSE_TIME || false,
        usePdms: process.env.WEBSERVER_USE_PDMS || false,
        pdmsTopic: process.env.WEBSERVER_PDMS_TOPIC || 'easer',
        middlewares: { preRouting: [], postRouting: [] },
        restApiPath: process.env.WEBSERVER_RESTAPIPATH || _path2.default.resolve(),
        staticContentBasePath: process.env.WEBSERVER_STATIC_CONTENT_BASEPATH || _path2.default.resolve(),
        ignoreApiOperationIds: process.env.WEBSERVER_IGNORE_API_OPERATION_IDS || false,
        enableMocking: process.env.WEBSERVER_ENABLE_MOCKING || false,
        basePath: process.env.WEBSERVER_BASEPATH || '/',
        oasConfig: {
            parse: {
                yaml: {
                    allowEmpty: false // Don't allow empty YAML files
                },
                resolve: {
                    file: true // Resolve local file references
                }
            }
        },
        bodyParser: {
            raw: process.env.PARSE_RAW_BODY || true,
            json: process.env.PARSE_JSON_BODY || false,
            xml: process.env.PARSE_XML_BODY || false,
            urlencoded: process.env.PARSE_URL_ENCODED_BODY || false
        }
    }
};