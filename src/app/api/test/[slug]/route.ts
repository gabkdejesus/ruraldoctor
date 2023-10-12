import { NextResponse } from "next/server";

import { getNearbyGroceries } from "../../../../../lib/getNearbyGroceries";

export async function GET(request: Request, { params } : { params: {slug: string} } ) {
    const radius = params.slug;
    const data = await getNearbyGroceries(radius);
    
    return NextResponse.json(data);
  }