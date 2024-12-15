import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

import { getSampleUsers, getDocs, postDoc } from 'src/libs/mongodb';



const COLLECTION_NAME = 'cat';

export async function GET() {
  const resp = await getDocs(COLLECTION_NAME).catch(err => {
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


export async function POST(req: NextRequest) {
  const body = await req.json();

  const resp = await postDoc(COLLECTION_NAME, body).catch(err => {
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

export async function PATCH(req: NextRequest) {


  return NextResponse.json('resp', { status: 200 });
}


export async function DELETE(req: NextRequest) {

  return NextResponse.json('resp', { status: 200 });
}
