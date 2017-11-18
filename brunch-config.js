exports.files = {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {

    autoReload : {
        enabled: true,
        host: '0.0.0.0'
    },
    htmlPages: {
        htmlMin: {
            disabled: false
        }
    }
};

exports.server = {
    hostname: "0.0.0.0",
    port: 3000
};
