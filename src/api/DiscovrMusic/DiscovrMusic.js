import { request } from '../request'

export const BannerData = () =>
    request({
        url: '/banner'
    })

export const RecommendListData = () =>
    request({
        url: '/personalized'
    })


export const ExclusiveDate = () =>
    request({
        url: '/personalized/privatecontent'
    })

export const RecommendMvData = () =>
    request({
        url: '/personalized/mv'
    })
export const RecommendAnchorData = () =>
    request({
        url: '/personalized/djprogram'
    })