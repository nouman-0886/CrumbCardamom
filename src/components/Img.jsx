import { useState } from 'react'
// Lazy image with a warm fallback block if the URL ever fails to load.
export default function Img({ src, alt, className = '', eager = false, ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={`img-fallback ${className}`} role="img" aria-label={alt} />
  return <img src={src} alt={alt} className={className} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} {...rest} />
}
