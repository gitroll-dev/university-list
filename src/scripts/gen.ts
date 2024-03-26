import type { University } from '../types'
import { listPath, loadRawList, saveList } from './common'
import guessAbbr from './helpers/guessAbbr'


/**
 * Generate a **new** list from the raw list provided by
 * university-domains-list without considering any historical data
 */
async function main() {
  const rawUniversities = await loadRawList()
  const list = rawUniversities.map((university, i) => ({
    ...university,
    id: i + 1,
    abbr: guessAbbr(university.web_pages[0])
  } satisfies University))
  console.log('Generating new list at', listPath)
  await saveList(list)
  console.log('Generated new list at', listPath)
}

main()
