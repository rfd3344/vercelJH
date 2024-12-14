import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

import { getSampleUsers, getDocs } from 'src/libs/mongodb'


export async function GET(request: NextRequest) {
  const resp = await getDocs('cat').catch(err => {
    return {
      ...err,
      error: 'Fail to connect MongoDB'
    };
  })

  if (resp.error) {
    return NextResponse.json(resp, { status: 400 });
  }


  return NextResponse.json(resp, { status: 200 });
}