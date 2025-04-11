import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

import { getDocList, postDoc, patchDoc } from 'src/libs/mongodb';


export async function GET(req: NextRequest, options: any) {
  const { collection } = await options.params;

  const resp = await getDocList(collection).catch(err => {
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


export async function POST(req: NextRequest, options: any) {
  const body = await req.json();
  const { collection } = await options.params;

  const resp = await postDoc(collection, body).catch(err => {
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

export async function PATCH(req: NextRequest, options: any) {
  const body = await req.json();
  const { id, collection } = await options.params;

  const resp = await patchDoc(collection, body).catch(err => {
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