// initial state
const initialState = {
  userInformations: 
    
      {
        "id": 1,
        "first_name": "Kylian",
        "last_name": "M'Bappé",
        "roles": "User",
        "email": "Kykydu75@psg.fr",
        "picture_user": "https://resize-elle.ladmedia.fr/r/300,,forcex/crop/300,386,center-middle,forcex,ffffff/img/var/plain_site/storage/images/personnalites/kylian-mbappe/87919214-1-fre-FR/Kylian-Mbappe.jpg",
        "team": [
          {
          "team_name": "Paris Saint Germain",
          "team_img": "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1024px-Paris_Saint-Germain_Logo.svg.png"
          },
          {
          "team_name": "Équipe de France",
          "team_img": "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_%C3%89quipe_France_Football_2018.svg/679px-Logo_%C3%89quipe_France_Football_2018.svg.png"
          },
          {
          "team_name": "A.S. Monaco",
          "team_img": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/ba/AS_Monaco_FC.svg/1200px-AS_Monaco_FC.svg.png"
          },
          {
          "team_name": "A.S. Bondy",
          "team_img": "https://static.wixstatic.com/media/debf2a_ee799a3146cd46dd826d6e128f2c608b.png"
          }
        ]
      } 
  };

  export const USER_PROFIL_INFO = 'USER_PROFIL_INFO';
  export const LOAD_INFOS_FROM_AXIOS = 'LOAD_INFOS_FROM_AXIOS';
  export const CHANGE_AVATAR = 'CHANGE_AVATAR'; 
  export const CHANGE_NAME = 'CHANGE_NAME'; 
  export const CHANGE_EMAIL = 'CHANGE_EMAIL'; 
  // ---- reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) { 
      case LOAD_INFOS_FROM_AXIOS:
        return {
          ...state,
          userInformations: action.value,
        };
  
      case CHANGE_AVATAR: 
        return {
          ...state, 
          userInformations: action.value, 
        }; 
  
      case CHANGE_NAME: 
        return {
          ...state, 
          userInformations: {...initialState.userInformations, first_name:action.value }, 
        };
  
      case CHANGE_EMAIL: 
        return {
          ...state, 
          userInformations: action.value, 
        };
  
      default: return state;
      }
  };

  
  export const userProfilInfo = () => ({
  type: USER_PROFIL_INFO,
  })
  
  export const loadInfoFromAxios = (value) => ({
  type: LOAD_INFOS_FROM_AXIOS,
  value,
  })
  
  export const changeAvatar = (value) => ({
  type: CHANGE_AVATAR,
  value, 
  })
  
  export const changeName = (value) => ({
  type: CHANGE_NAME, 
  value, 
  })
  
  export const changeEmail = (value) => ({
  type: CHANGE_EMAIL, 
  value, 
  })

  export const modifyUserInfo = (value) => ({
    type: MODIFY_INFO, 
    value, 
  })
  // ---- export
  export default reducer;