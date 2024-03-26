import { University } from '../../types'
import hk from './hk'


export default function patch(map: Map<number, University>) {
  console.log('Patching abbreviations')
  hk(map)
  console.log('Patched abbreviations')
}
