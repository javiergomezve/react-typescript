import axios from 'axios';

import { SubsResponseFromApi, Sub } from '../types';

const fetchSubs = (): Promise<SubsResponseFromApi> => {
    return axios
        .get('http://localhost:9001/subs')
        .then(response => response.data);
};

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
    return apiResponse.map(subFromApi => ({
        nick: subFromApi.nick,
        subMonths: subFromApi.months,
        avatar: subFromApi.profileUrl,
        description: subFromApi.description,
    }));
};

export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSubs);
};
