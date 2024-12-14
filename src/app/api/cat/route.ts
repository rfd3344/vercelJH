import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

import main from 'src/libs/mongodb'


export async function GET(request: NextRequest) {

  const resp = await main()

  console.warn(resp)

  return NextResponse.json(resp, { status: 200 });
}