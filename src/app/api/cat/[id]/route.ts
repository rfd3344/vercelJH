import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

import { getDocById, deleteDocById } from 'src/libs/mongodb';


const COLLECTION_NAME = 'cat';

interface Options {
  params: Promise<{
    id: string
  }>
}

export async function GET(req: NextRequest, options: Options) {
  const params = await options.params;

  const resp = await getDocById(COLLECTION_NAME, params.id).catch(err => {
    console.error('error', err);
    return {
      ...err,
      error: 'Fail to connect MongoDB',
    };
  });

  if (resp.error) {
    return NextResponse.json(resp, { status: 400 });
  }

  return NextResponse.json(resp, { status: 200 });
}

export async function DELETE(req: NextRequest, options: Options) {
  const params = await options.params;

  const resp = await deleteDocById(COLLECTION_NAME, params.id).catch(err => {
    console.error('error', err);
    return {
      ...err,
      error: 'Fail to connect MongoDB',
    };
  });

  if (resp.error) {
    return NextResponse.json(resp, { status: 400 });
  }

  return NextResponse.json(resp, { status: 200 });
}
