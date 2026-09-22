import {
  type NextRequest,
  NextResponse,
} from '@/lib/next';

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: 'Hello API' });
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: 'Hello API' });
}