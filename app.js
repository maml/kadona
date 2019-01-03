const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = {data: 'Hello World'};
});

app.use(router.routes());

module.exports = app.listen(8080);
