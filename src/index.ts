import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
    ctx.body = "Koa Skeleton Template";
    await next();
});

router.get("/hello", async (ctx, next) => {
    ctx.body = {
        status: 'success',
        json: { msg: "Hello World" }
    };
    await next();
});

app.use(router.routes());
app.listen(3005, () => {
    console.log("Server is ready.");
});