import assert from 'assert'
import { check } from 'tlds2'


export default function guessAbbr(url: string) {
  const _url = new URL(url)
  const { hostname } = _url
  const res = check(hostname)
  if (typeof res.error === 'string') {
    throw new Error(`Failed to get organization from ${url}: ${res.error}`)
  }
  assert(res.org)
  return res.org
}
