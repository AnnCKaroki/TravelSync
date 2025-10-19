import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Best-effort image URL sizing for common CDNs
export function getOptimizedImageUrl(originalUrl, { width = 320, height, quality = 75 } = {}) {
  if (!originalUrl || typeof originalUrl !== 'string') return originalUrl
  try {
    const url = new URL(originalUrl)
    const host = url.hostname

    // NewsAPI often proxies unsized images; try common patterns
    // Cloudinary
    if (host.includes('res.cloudinary.com')) {
      const parts = url.pathname.split('/')
      const uploadIdx = parts.indexOf('upload')
      if (uploadIdx !== -1) {
        const transform = [`c_fill`, `q_${quality}`, `f_auto`, `w_${width}`]
        if (height) transform.push(`h_${height}`)
        parts.splice(uploadIdx + 1, 0, transform.join(','))
        url.pathname = parts.join('/')
        return url.toString()
      }
    }

    // imgix-like
    url.searchParams.set('auto', 'format,compress')
    url.searchParams.set('q', String(quality))
    url.searchParams.set('w', String(width))
    if (height) url.searchParams.set('h', String(height))
    return url.toString()
  } catch {
    return originalUrl
  }
}