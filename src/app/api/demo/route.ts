import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';


// import { example } from 'src/libs/openai';



export async function GET(request: NextRequest) {

  // const res = await example();
  // console.warn(res);

  const resp = { message: 'Hello World' };
  return NextResponse.json(resp);
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {





  const resp = { message: 'Hello World' };
  return NextResponse.json(resp);
}