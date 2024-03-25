import assert from 'assert'
import { check } from 'tlds2'


const eduRegexp = /(?<org>[^./]+)\.(edu|ac)(\.[a-z]{2,3})?$/i

export default function guessAbbr(url: string) {
  const _url = new URL(url)
  const { hostname } = _url
  if (hostname.includes('.edu.') || hostname.includes('.ac.')) {
    const org = guessAbbrFromEdu(hostname)
    if (org) return org
  }
  const res = check(hostname)
  if (typeof res.error === 'string') {
    throw new Error(`Failed to get organization from ${url}: ${res.error}`)
  }
  assert(res.org)
  return res.org
}

function guessAbbrFromEdu(hostname: string) {
  const match = eduRegexp.exec(hostname)
  return match?.groups?.org
}
