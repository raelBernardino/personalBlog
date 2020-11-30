import { atom } from 'recoil'

export const isNavOpenAtom = atom({
    key: 'isNavOpen',
    default: false
});

export const isNavPrioritizedAtom = atom({
    key: 'isNavPrioritized',
    default: false
});

export const dataAtom = atom({
    key: 'data',
    default: null
})