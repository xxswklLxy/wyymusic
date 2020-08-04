import { request } from '../request'

export const FlashLyricData = (id) =>
    request({
        url: '/lyric?id=' + id
    })

export const FlashSongData = (id) =>
    request({
        url: '/song/url?id=' + id
    })