export interface RawUniversity {
  /**
   * The human readable name of the university
   * @example "Foo Bar University"
   */
  name: string
  /**
   * Email domains of the university
   * @example [ "foo.edu", "stu.bar.edu" ]
   */
  domains: string[]
  /**
   * Web pages of the university
   * @example [ "https://www.foo.edu/" ]
   */
  web_pages: string[]
  /**
   * Country names
   *
   * NOTE:
   *
   * 1. Some entries are using ISO 3166 country names while some are not.
   *    Follow the country name in existing entries when adding new entries.
   * 2. GitRoll is not using this field, it is kept only for easier diff-ing
   *    with the upstream.
   * @example "United Kingdom"
   */
  country: string
  /**
   * Two-letter ISO 3166 country code
   * @example "GB"
   */
  alpha_two_code: string
  /**
   * Home state or province of the university if known (not used by GitRoll)
   * @example "Texas"
   */
  'state-province': string | null
}

export interface University extends RawUniversity {
  /**
   * The unique and **stable** university ID
   * @example 1
   */
  id: number
  /**
   * University abbreviation (country name may be appended if the abbreviation
   * is too common)
   * @example "MIT"
   */
  abbr: string
}
