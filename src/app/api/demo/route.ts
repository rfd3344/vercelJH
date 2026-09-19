import {
  type NextRequest,
  NextResponse,
} from 'src/lib/next';

export async function GET(request: NextRequest) {
  const resp = { message: 'Hello Demo' };
  return NextResponse.json(resp);
}

export async function POST(request: NextRequest) {
  const resp = { message: 'Hello Demo' };
  return NextResponse.json(resp);
}