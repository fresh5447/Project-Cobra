const path           = require('path'),
 express             = require('express'),
 bodyParser          = require('body-parser'),
 app                 = express(),
 ModulesRouter       = require('./routes/modules'),
 SubmissionRouter    = require('./routes/submissions'),
 CheckpointsRouter   = require('./routes/checkpoints'),
 ResourcesRouter    = require('./routes/resources'),
 passport            = require('passport'),
 session             = require('express-session'),
 flash               = require('connect-flash'),

 mongoose            = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lms');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

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
