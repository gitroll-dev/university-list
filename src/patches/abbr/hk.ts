import assert from 'assert'
import { University } from '../../types'


const abbrs: [ number, string ][] = [
  [ 3788, 'HKCHC' ],
  [ 3789, 'CityU' ],
  [ 3790, 'CUHK' ],
  [ 3791, 'HKAPA' ],
  [ 3792, 'HKBU' ],
  [ 3793, 'HKSYU' ],
  [ 3794, 'HKU' ],
  [ 3795, 'LingU' ],
  [ 3796, 'HKMU' ],
  [ 3797, 'PolyU' ],
  [ 3798, 'HKUST' ],
  [ 3799, 'EdUHK' ]
]

export default function patch(map: Map<number, University>) {
  for (const [ id, abbr ] of abbrs) {
    const uni = map.get(id)
    assert(uni, `University ${id} not found`)
    uni.abbr = abbr
  }
}
