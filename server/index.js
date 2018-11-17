const express = require('express');
const session = require('express-session');
const https = require('https');
const fs = require('fs');
const passport = require('passport');
const MediaWikiStrategy = require('passport-mediawiki-oauth').OAuthStrategy;
const config = require('./config');

// Express
const app = express();
app.set( 'port', ( config.APP_PORT ) );

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use( passport.initialize() );
app.use( passport.session() );

passport.serializeUser( function ( user, done ) {
  done( null, user );
} );

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use('mediawiki', new MediaWikiStrategy({
    baseURL: config.BASE_URL,
		consumerKey: config.CONSUMER_KEY,
		consumerSecret: config.CONSUMER_SECRET,
    callbackURL: 'https://localhost:' + config.APP_PORT + config.CALLBACK_URL,
  },
  function(token, tokenSecret, profile, done) {
			profile.oauth = {
				consumer_key: config.CONSUMER_KEY,
				consumer_secret: config.CONSUMER_SECRET,
				token: token,
				token_secret: tokenSecret
			};
			return done( null, profile );
  }
));

app.get('/auth/mediawiki',
  passport.authenticate('mediawiki'));

app.get('/auth/mediawiki/callback',
  passport.authenticate('mediawiki', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, send auth token to client.
    res.json({ "oauth_token": req.query.oauth_token});
  });

var sslOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
  passphrase: 'ad340'
};
https.createServer(sslOptions, app).listen(app.get( 'port' ) );

// app.listen( app.get( 'port' ) );
console.info( '==> Go to https://localhost:%s', app.get( 'port' ) );