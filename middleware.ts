import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ============================================================================
// ⚠️ CRASH SIMULATION TOGGLE
// Set to `true` to crash the site with 503 Service Unavailable.
// Set to `false` (or delete this file) to restore the normal website immediately.
// ============================================================================
const SIMULATE_CRASH = true

export function middleware(request: NextRequest) {
  if (SIMULATE_CRASH) {
    const errorHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>503 Service Unavailable</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #fafafa;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .container {
      text-align: center;
      padding: 2rem;
    }
    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin: 0 0 0.5rem;
      letter-spacing: -0.05em;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 500;
      color: #666;
      margin: 0 0 1rem;
    }
    p {
      color: #888;
      font-size: 0.95rem;
      max-width: 440px;
      line-height: 1.6;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>503</h1>
    <h2>Service Unavailable</h2>
    <p>The server is temporarily unable to service your request. Please try again later.</p>
  </div>
</body>
</html>`

    return new NextResponse(errorHtml, {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '3600',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  // Matches all incoming routes except static assets and internal next files
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

