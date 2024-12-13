import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token');
  console.warn(request.nextUrl.searchParams.get('token'));
  return NextResponse.json({ message: 'aaaa' }, { status: 200 });
}