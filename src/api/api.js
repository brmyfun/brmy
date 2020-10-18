import {
    fetch
} from '../api/axios'

export const hotRank = (params) => {
    return fetch("/juhe/toutiao/index", params);
};

export const hotRankType = () => {
    return fetch("/tophub/GetAllType");
}