import { atom, selector } from "recoil"

export const minState = atom({
  key:'minutes',
  default:0
})


export const hourSelector = selector<number>({
  key:'hours',
  get: ({get}) => {
    const min = get(minState)
    return min /60
  },
  set: ({set},newValue) => {
    const min = +newValue * 60
    set(minState,min)
  }
})