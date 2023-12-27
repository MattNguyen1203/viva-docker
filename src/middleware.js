import { NextResponse, userAgent } from 'next/server'

const defaultLocale = 'en'
let locales = ['it', 'fr']

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/robots.txt'
      // Your other files in `public`
    ].includes(pathname)
  )
    return

  // Check if the default locale is in the pathname
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    // e.g. incoming request is /en/products
    // The new URL is now /products
    return NextResponse.redirect(
      new URL(pathname.replace(`/${defaultLocale}`, pathname === `/${defaultLocale}` ? '/' : ''), request.url)
    )
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    const { device } = userAgent(request)
    const viewport = device.type === 'mobile' ? 'mobile' : device.type === 'tablet' ? 'tablet' : 'desktop'

    const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url)

    if (request.nextUrl.searchParams) {
      newUrl.search = request.nextUrl.searchParams.toString()
      newUrl.searchParams.set('viewport', viewport)
      return NextResponse.rewrite(newUrl)
    }
    // e.g. incoming request is /products
    // Tell Next.js it should pretend it's /en/products
    newUrl.searchParams.set('viewport', viewport)
    return NextResponse.rewrite(newUrl)
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)'
  ]
}
