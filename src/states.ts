import { atom } from "recoil";

export const screenWidthState=atom({
    key:'screenWidth',
    default:window.innerWidth
})