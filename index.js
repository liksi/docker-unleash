const unleash = require('unleash-server');
const keycloakAdminAuth = require('./keycloak-auth-hook');

let options = {
    adminAuthentication: 'custom',
    preRouterHook: keycloakAdminAuth
};

unleash.start(options);

