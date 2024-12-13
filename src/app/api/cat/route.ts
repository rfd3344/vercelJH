import {
  type NextRequest,
  NextResponse,
} from 'next/server';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token');
  console.warn(request.nextUrl.searchParams.get('token'));
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}