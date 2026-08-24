export type RedirectEntry = {
  from: string
  to: string
  statusCode: string
}

export function normalizeRedirectPath(path: string): string {
  if (!path || path === '/') return '/'

  const normalized = path.replace(/\/+$/, '') || '/'

  return normalized === '' ? '/' : normalized
}

export function resolveRedirect(path: string, redirects: RedirectEntry[] | undefined) {
  if (!redirects || redirects.length === 0) {
    return null
  }

  const normalizedPath = normalizeRedirectPath(path)

  const match = redirects.find((redirect) => {
    const from = normalizeRedirectPath(redirect.from)
    return from === normalizedPath
  })

  if (!match) {
    return null
  }

  const destination = match.to.startsWith('http') ? match.to : normalizeRedirectPath(match.to)

  return {
    destination,
    statusCode: Number(match.statusCode || 301),
  }
}
