import * as types from './types';

export function refresh() {
    return {
        type: types.FIND_ALL
    };
}
