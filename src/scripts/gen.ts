import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import type { RawUniversity, University } from '../types'
import guessAbbr from './helpers/guessAbbr'


/**
 * Generate a **new** list from the raw list provided by
 * university-domains-list without considering any historical data
 */
async function main() {
  const rawPath = path.resolve(__dirname, '../../university-domains-list/world_universities_and_domains.json')
  const rawUniversities = JSON.parse((await readFile(rawPath)).toString()) as
    RawUniversity[]
  const list = rawUniversities.map((university, i) => ({
    ...university,
    id: i + 1,
    abbr: guessAbbr(university.web_pages[0])
  } satisfies University))
  const outPath = path.resolve(__dirname, '../../src/list.json')
  console.log('Generating new list at', outPath)
  await writeFile(outPath, JSON.stringify(list, null, 2))
  console.log('Generated new list at', outPath)
}

main()
