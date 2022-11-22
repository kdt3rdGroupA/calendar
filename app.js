const express = require('express');
const session = require('express-session');
const app = express();
const http = require('http').Server(app);

const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret : "\(^Д^)/\(^Д^)/\(^Д^)/\(^Д^)/",
  resave : false,
  saveUninitialized : true
}));


app.get('/', (req, res) => {
  res.render('index');
});

// login과 관련된 인증들
const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

// todo관련 정보
const todoRouter = require('./routes/todo');
app.use('/todo', todoRouter);

// 404 Page
app.get('*', (req,res) => {
  res.render('404');
});

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});