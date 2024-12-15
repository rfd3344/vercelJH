import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

import { getDocs, getDocById } from 'src/libs/mongodb';

interface Options {
  params: Promise<{
    id: string
  }>
}

export async function GET(request: NextRequest, options: Options) {
  const params = await options.params;

  const resp = await getDocById('cat', params.id).catch(err => {
    console.error('error', err)
    return {
      ...err,
      error: 'Fail to connect MongoDB',
    }
  });

  if (resp.error) {
    return NextResponse.json(resp, { status: 400 });
  }

  return NextResponse.json(resp, { status: 200 });
}
