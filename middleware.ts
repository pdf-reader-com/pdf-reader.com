import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    // 根路径不重定向，作为可被 Google 索引的静态入口页
    // 解决 "网页会自动重定向" 导致的索引问题
    const pathname = request.nextUrl.pathname;
    if (pathname === '/' || pathname === '') {
        const response = NextResponse.next();
        response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
        response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
        response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
        return response;
    }

    const response = intlMiddleware(request);

    // Required for SharedArrayBuffer (LibreOffice WASM)
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
    response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ],
};
