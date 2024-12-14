import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

interface Options {
  params: Promise<{
    id: string
  }>
}



export async function GET(request: NextRequest, options: Options) {
  // const token = request.cookies.get('token');
  // console.warn(request.nextUrl.searchParams.get('token'));
  const params = await options.params
  console.warn('params', params)


  return NextResponse.json({ message: 'aaaa' }, { status: 200 });
}
