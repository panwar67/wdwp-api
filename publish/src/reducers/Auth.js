const defaultUserInfo = {
  name: 'Demo User',
  email:'demo@whydoweplay.com',
  image: 'http://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png'
};


export const SET_USER_ID = 'AUTH/SET_USER_ID';
export const SET_USER_NAME = 'AUTH/SET_USER_NAME';
export const SET_USER_EMAIL = 'AUTH/SET_USER_EMAIL';

export const setUserId = userId=>(
    {
      type:SET_USER_ID,
      userId
    }
);

export const setUserName = userName=>(
    {
      type:SET_USER_NAME,
      userName
    }
);

export const setUserEmail = userEmail=>(
    {
      type:SET_USER_EMAIL,
      userEmail
    }
);

export default function reducer(state = {
  user: defaultUserInfo
}, action) {

  return state;
}