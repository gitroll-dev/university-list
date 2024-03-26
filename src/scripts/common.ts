import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import type { RawUniversity, University } from '../types'


export const rawListPath = path.resolve(__dirname, '../../university-domains-list/world_universities_and_domains.json')

export async function loadRawList() {
  return JSON.parse((await readFile(rawListPath)).toString()) as
    RawUniversity[]
}

export const listPath = path.resolve(__dirname, '../../src/list.json')

export async function saveList(list: University[]) {
  return writeFile(listPath, JSON.stringify(list, null, 2))
}

export async function saveMap(map: Map<number, University>) {
  return saveList([ ...map.values() ].sort((a, b) => a.id - b.id))
}
