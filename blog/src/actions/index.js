import _ from 'lodash'
import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());

    //  create an array of unique userIds
    // const userIds = _.uniq(_.map(getState().posts, 'userId'))
    // userIds.forEach(id => dispatch(fetchUser(id)));

    //  the chain method provides the first argument for the next chained method.
    //  the returned value of the current chain becomes the first argument of the next chain
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

export const fetchPosts = () => async (dispatch) => {

    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (userId) => async (dispatch) => {

    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({ type: 'FETCH_USER', payload: response.data })
}

