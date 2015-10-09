Package.describe({
    name: "stratosphere:frontend",
    summary: "Stratosphere Frontend",
    version: "1.0.0-rc1",
    git: "https://github.com/sebakerckhof/stratosphere.git"
});

Package.onUse(function (api) {

    api.versionsFrom(['METEOR@1.2.0.2']);

    api.use([
        'static-html',
        'stratosphere:core',
        'angular:angular@1.4.7',
        'angular:angular-animate@1.4.7',
        'angular:angular-aria@1.4.7',
        'angular:angular-resource@1.4.7',
        'angular',
        'angular:angular-material@0.11.2',
        'angularui:angular-ui-router@0.2.15',
        'jquery',
        //'bootstrap@4.0.0-alpha',
        'fourseven:scss@3.4.0-beta1',
        'fortawesome:fontawesome@4.4.0'
    ]);

    api.addFiles([], ['server','client']);

    api.addFiles([
        //Components
        'client/package/module.js',
        'client/package/controller.js',
        'client/package/view.ng.html',
        'client/package/version.ng.html',

        'client/packages/module.js',
        'client/packages/controller.js',
        'client/packages/view.ng.html',

        'client/tracks/module.js',
        'client/tracks/controller.js',
        'client/tracks/view.ng.html',

        'client/track/module.js',
        'client/track/controller.js',
        'client/track/view.ng.html',
        'client/track/version.ng.html',

        'client/app.js',
        'client/IndexCtrl.js',
        'client/index.html',

    ], ['client']);

    api.addFiles([], ['server']);

});