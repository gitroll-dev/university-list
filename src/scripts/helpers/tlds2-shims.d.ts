declare module 'tlds2' {
  export interface FailedCheckResult {
    error: string
    punycode: false
    info: string
  }
  export interface SuccessfulCheckResult {
    error: null
    punycode: boolean
    validTLD: true
    org: string | null
    tld: string
    subDomain: string
  }
  export type CheckResult = SuccessfulCheckResult | FailedCheckResult
  export function check(domain?: unknown): CheckResult
}
