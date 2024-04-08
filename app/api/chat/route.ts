import { StreamingTextResponse } from 'ai';
import type { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages'
import { Ai } from '@cloudflare/ai'
import { CloudflareStream } from '../../components/CloudflareStream';

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: NextRequest) {
    const resJson: any = await req.json();
    let messages: any = resJson["messages"];
    console.log(messages);
    let msg = { role: "system", content: "You are a therapist assistant for helping people at risk of suicide. Be as compassionate and epathetic as possible. Encourage the user to get help but not overly. Act as if you are a best friend checking up on someone. " }


    const ai = new Ai(getRequestContext().env.AI);
    const stream = await ai.run("@hf/thebloke/mistral-7b-instruct-v0.1-awq", {
        messages,
        stream: true,
    }) as ReadableStream;

    let response = new Response(stream, {
        headers: { "content-type": "text/event-stream" }
    });

    let cStream = CloudflareStream(response);

    // Respond with the stream
    return new StreamingTextResponse(cStream);
}