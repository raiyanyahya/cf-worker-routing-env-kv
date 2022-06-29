import { Router } from 'itty-router';


const router = Router()

router.get("/pingpong", () => {
    return new Response("OK")
})
router.get("/foo/pingpong", () => {
    return new Response("OK")
})
router.all("*", () => new Response("404, not found!", {
    status: 404
}))

addEventListener('fetch', (e) => {
    const headerPayload = Object.fromEntries(e.request.headers)
    e.respondWith(router.handle(e.request, headerPayload))
})