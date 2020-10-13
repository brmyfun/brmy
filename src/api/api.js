import {
    fetch
} from '../api/axios'

export const hotRank = (params) => {
    return fetch("/toutiao/index", params);
};