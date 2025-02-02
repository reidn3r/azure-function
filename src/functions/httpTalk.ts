import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { client } from "../model/client";

export async function httpTalk(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const name = request.query.get('name') || await request.text() || 'world';
    const message = name === "world" ? "Hello, world" : await client.generate(name);
    return { body: `${message}!` };
};

app.http('httpTalk', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpTalk
});
