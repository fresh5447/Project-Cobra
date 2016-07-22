const path           = require('path'),
  express             = require('express'),
  bodyParser          = require('body-parser'),
  app                 = express(),
  ModulesRouter       = require('./routes/modules'),
  SubmissionRouter    = require('./routes/submissions'),
  RequestRouter    = require('./routes/requests'),
  CatRouter           = require('./routes/categories'),
  CheckpointsRouter   = require('./routes/checkpoints'),
  FeedbackRouter   = require('./routes/feedback'),
  ResourcesRouter     = require('./routes/resources'),
  passport            = require('passport'),
  session             = require('express-session'),
  nodemailer          = require('nodemailer'),
  async               = require('async'),
  flash               = require('connect-flash'),
  uriUtil             = require('mongodb-uri'),

 mongoose            = require('mongoose');


 var options = {
 server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
 };
 var mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/lms";
 var mongooseUri = uriUtil.formatMongoose(mongodbUri);

 mongoose.connect(mongooseUri, options);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

var csp = require('helmet-csp')

app.use(csp({
  // Specify directives as normal.
  directives: {
    frameAncestors: ["'self'", '*.github.com']
  },

  // Set to true if you only want browsers to report errors, not block them.
  // You may also set this to a function(req, res) in order to decide dynamically
  // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
  reportOnly: false,

  // Set to true if you want to blindly set all headers: Content-Security-Policy,
  // X-WebKit-CSP, and X-Content-Security-Policy.
  setAllHeaders: false,

  // Set to true if you want to disable CSP on Android where it can be buggy.
  disableAndroid: false,

  // Set to false if you want to completely disable any user-agent sniffing.
  // This may make the headers less compatible but it will be much faster.
  // This defaults to `true`.
  browserSniff: true
}))

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  const chokidar = require('chokidar');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.dev');
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(session({
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
app.use(flash());

require('./config/passport')(passport);
require('./routes/user.js')(app, passport);


app.use('/img', express.static('img'));



app.use('/api/v1/modules', ModulesRouter);
app.use('/api/v1/resources', ResourcesRouter);
app.use('/api/v1/modules', CheckpointsRouter);
app.use('/api/v1/submissions', SubmissionRouter);
app.use('/api/v1/cats', CatRouter);
app.use('/api/v1/requests', RequestRouter);
app.use('/api/v1/feedback', FeedbackRouter);

// app.get('/*', (req, res) => {
//   res.sendFile('index.html', { root: PUBLIC_DIR });
// });


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 fired up 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 \n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 on " + port + " 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")
});
