import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import loggerMiddleware from "./loggerMiddleware.ts";
import router from "./routes.ts"

const app = new Application()

app.use(loggerMiddleware)

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port: ${APP_PORT}...`)

await app.listen(`${APP_HOST}:${APP_PORT}`)