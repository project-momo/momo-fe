import { atom } from "recoil"

export const myProfile = atom<any>({
    key: 'myProfile',
    default: {point: 0}
})

export const mypageHostMeetings = atom<any>({
    key: 'mypageHostMeetings',
    default: {content: []}
})

export const mypageAttendingMeetings = atom<any>({
    key: 'mypageAttendingMeetings',
    default: {content: []}
})

export const myPoint = atom<any>({
    key: 'myPoint',
    default: []
})

export const modalState = atom<string>({
    key: 'modalState',
    default: ''
})