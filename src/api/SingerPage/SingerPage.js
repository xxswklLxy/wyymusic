import { request } from '../request'

export const SingerPageData = (id) =>
    request({
        url: '/artist/desc?id=' + id
    })
export const SingerAlbumData = (id, iid) =>
    request({
        url: '/artist/album?id=' + id + '&limit=' + iid
    })
export const SingerAContentData = (id) =>
    request({
        url: '/album?id=' + id
    })