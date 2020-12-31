import {
    fetch
} from '../api/axios'

export const hotRank = (params) => {
    return fetch("/juhe/toutiao/index", params);
};

export const hotRankType = () => {
    return fetch("/tophub/GetAllType");
}

export const hotRankList = (params) => {
    return fetch("/tophub/GetAllInfoGzip", params);
}

export const calendarEvents = (params) => {
    return fetch("/xmt/calendar/events", params);
}

export const hotEvents = () => {
    return fetch("/hot/weibo/platform/hot/event");
}