import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

import { getDocById,  deleteDocById } from 'src/libs/mongodb';

export async function GET(req: NextRequest, options: any) {
  const { id, collection } = await options.params;

  const resp = await getDocById(collection, id).catch(err => {
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



export async function DELETE(req: NextRequest, options: any) {
  const { id, collection } = await options.params;

  const resp = await deleteDocById(collection, id).catch(err => {
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
