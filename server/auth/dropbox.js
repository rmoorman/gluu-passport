var passport = require('passport');
var DropboxStrategy = require('passport-dropbox').Strategy;

var setCredentials = function(credentials) {
    var callbackURL = global.applicationHost.concat("/passport/auth/dropbox/callback");
    passport.use(new DropboxStrategy({
            consumerKey: credentials.clientID,
            consumerSecret: credentials.clientSecret,
            callbackURL: callbackURL
        },
        function(accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));
};

module.exports = {
    passport: passport,
    setCredentials: setCredentials
};
