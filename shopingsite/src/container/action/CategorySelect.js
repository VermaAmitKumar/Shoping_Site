import * as authService from '../Service/SelectCategory'
import { INVALID_USER, LOGIN_SUCCESSFUL,LOGOUT } from '../../Redux/SelectCategory';
export const loginuser = () => {
    return (dispatch) => {
        authService.login().then((response) => {
            if (response.status === 200) {
                // localStorage.setItem("TOKEN", response.data[0].Token)
                debugger;
                dispatch(
                    {
                        type: SUCCESSFUL_Fetch,
                        data: {
                            [category.Product_id]: response.data
                        }
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: INVALID_DATA, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
// export const logoutuser = (credentails) => {
//     return (dispatch) => {
//         dispatch(
//             {
//                 type: LOGOUT
//             })
//         localStorage.removeItem("TOKEN")
//     }
// };