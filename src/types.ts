export interface RawUniversity {
  name: string
  domains: string[]
  web_pages: string[]
  country: string
  alpha_two_code: string
  'state-province': string | null
}

export interface University extends RawUniversity {
  id: number
  abbr: string
}
