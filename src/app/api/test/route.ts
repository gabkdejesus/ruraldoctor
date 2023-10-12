// Accept query rather than slug
// Expected /api/test?rad=x&loc=y
import { NextRequest, NextResponse } from 'next/server';
import { getNearbyGroceries } from '../../../../lib/getNearbyGroceries';

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const rad = url.searchParams.get("rad") || "";
    const loc = url.searchParams.get("loc") || "";

    const data = await getNearbyGroceries(rad, loc);

    return NextResponse.json(data);
}