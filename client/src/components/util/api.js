import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOAD_ING,
  LOAD_SUCCESS,
  DELETE_SUCCESS
} from "../reducers/bubbleReducers";

export const baseURL = "http://localhost:5000";

export const apiWithAuth = () => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("MTN-token")
    }
  });
};

export const login = (credentials, dispatch) => {
  dispatch({ type: LOAD_ING });
  axios
    .post(`${baseURL}/api/login`, credentials)
    .then(res => {
      localStorage.setItem("MTN-token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getColors = dispatch => {
  if (!localStorage.getItem("MTN-token")) return;

  dispatch({ type: LOAD_ING });

  apiWithAuth()
    .get("/api/colors")
    .then(res => {
      console.log(res.data, "get request");

      dispatch({ type: LOAD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

// export const addFriends = (friend, dispatch) => {
//   if (!localStorage.getItem("MTN-token")) return;

//   apiWithAuth()
//     .post("/api/friends", friend)
//     .then(res => {
//       console.log("axios POST /api/friends response:");
//       console.log(res.data);
//       dispatch({ type: ADD_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// export const editFriends = (newFriend, id, friendState, dispatch) => {
//   console.log(id);
//   apiWithAuth()
//     .put(`/api/friends/${id}`, newFriend)
//     .then(res => {
//       console.log(`/api/friends/${id} response:`);
//       console.log(res);

//       const updatedFriend = { ...newFriend, id: id };
//       const updatedIndex = friendState.friendList.findIndex(
//         item => item.id === id
//       );
//       const frontFriendList = friendState.friendList.slice(0, updatedIndex);
//       const backFriendList = friendState.friendList.slice(updatedIndex + 1);
//       const newFriendList = frontFriendList
//         .concat([updatedFriend])
//         .concat(backFriendList);

//       dispatch({ type: EDIT_SUCCESS, payload: newFriendList });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

export const deleteColor = (id, colorState, dispatch) => {
  apiWithAuth()
    .delete(`/api/colors/${id}`)
    .then(res => {
      console.log(`axios DELETE /api/colors/${id} response:`);
      console.log(res, "delete request");

      // the response is just a success message; we need to adjust the state ourselves
      const newColorList = colorState.colors.filter(item => item.id !== id);

      dispatch({ type: DELETE_SUCCESS, payload: newColorList });
    })
    .catch(err => {
      console.log(err);
    });
};
