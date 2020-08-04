import { request } from '../request'

export const SingerListData = (id, age) =>
    request({
        url: '/artist/list?type=' + id + '&limit=' + age
    })