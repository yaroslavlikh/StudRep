import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
	const token = request.cookies.get('token')?.value

	if (!token && request.nextUrl.pathname === '/mentors') {
		return Response.redirect(new URL('/', request.url))
	}

	if (token && request.nextUrl.pathname !== '/mentors') {
		return Response.redirect(new URL('/mentors', request.url))
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
