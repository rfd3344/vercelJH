import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

// import { openAiChat } from 'src/libs/openai';

export async function GET(req: NextRequest) {

  // const resp = await openAiChat([
  //   {
  //     role: 'user',
  //     content: 'Write a resume for software developer',
  //   },
  // ]);
  // console.warn('resp', resp);
  return NextResponse.json({ message: 'Hello World' });
}

export async function POST(req: NextRequest) {
  // const body = await req.json();


  // const resp = await openAiChat(body);

  return NextResponse.json({ message: 'Hello World' });
}