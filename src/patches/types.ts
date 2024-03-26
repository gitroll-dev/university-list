import type { University } from '../types'


export type PatchFunc = (map: Map<number, University>) => Promise<void> | void
