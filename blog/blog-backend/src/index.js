const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const api = require('./api');

router.get('/', (ctx) => {
  ctx.body = '홈';
});

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `${name}의 소개` : '소개';
});
router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `post #${id}` : 'no post ID';
});
router.use('/api', api.routes());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

//app 인스턴스에 라우터 적용
app.listen(4000, () => {
  console.log('Listening to port 4000');
});
