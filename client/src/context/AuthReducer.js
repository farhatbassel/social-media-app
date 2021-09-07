const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return{
                user: null,
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return{
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return{
                user: false,
                isFetching: false,
                error: action.payload
            };
        case "FOLLOW":
            return{
                ...state,
                user: {
                    ...state.user,
                    followings: [...state.user.followings, action.payload]
                }
            };      
        case "UNFOLLOW":
            return{
                ...state,
                user: {
                    ...state.user,
                    followings: state.user.followings.filter(following => following !== action.payload)
                }
            };
        case "FAVORITE":
            return{
                ...state,
                user: {
                    ...state.user,
                    favorites: [...state.user.favorites, action.payload]
                }
            };
        case "UNFAVORITE":
            return{
                ...state,
                user: {
                    ...state.user,
                    favorites: state.user.favorites.filter(favorite => favorite !== action.payload)
                }
            };
        default:
            return state
    }
}

export default AuthReducer