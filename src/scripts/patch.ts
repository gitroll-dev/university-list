import universities from '../list.json'
import abbr from '../patches/abbr'
import type { PatchFunc } from '../patches/types'
import { listPath, saveMap } from './common'


const patches: PatchFunc[] = [
  abbr
]

async function main() {
  const map = new Map(universities.map(uni => [ uni.id, uni ]))
  await Promise.all(patches.map(patch => patch(map)))
  console.log('Saving patched list at', listPath)
  await saveMap(map)
  console.log('Saved patched list at', listPath)
}

main()
