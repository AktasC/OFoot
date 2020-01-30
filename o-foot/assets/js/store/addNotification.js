import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const addNotification = ( status ) => {
    
  console.log('hey tiens ta notif');

  switch (status) {    
    case 'register-success':
      store.addNotification({
        title: 'Félicitation !',
        message: 'Votre inscription à bien été prise en compte, veuillez vous connecter maintenant',
        type: 'success',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ["animated", "fadeIn"],     // animate.css classes
        animationOut: ["animated", "fadeOut"],   // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true
        }
      }) 
      break; 
    case 'register-error': 
      store.addNotification({
        title: 'Votre attention svp !',
        message: 'Hum, nous avons rencontré un problème, Veuillez réessayer',
        type: 'danger',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ["animated", "fadeIn"],     // animate.css classes
        animationOut: ["animated", "fadeOut"],   // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true
        }
      })   
      break;
    case 'create-team-success':
      store.addNotification({
        title: 'Félicitation !',
        message: 'Votre équipe est crée',
        type: 'success',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ["animated", "fadeIn"],     // animate.css classes
        animationOut: ["animated", "fadeOut"],   // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true
        }
      }) 
      break;
      
    case 'login-success':
      store.addNotification({
        title: 'Bienvenue Champion !',
        message: 'Comment vas-tu depuis le temps ?',
        type: 'success',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ["animated", "fadeIn"],     // animate.css classes
        animationOut: ["animated", "fadeOut"],   // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true
        }
      }) 
      break;   
      
    case 'login-error':
      store.addNotification({
        title: 'Votre attention svp !',
        message: 'Vos informations sont incorrectes, veuillez réessayer',
        type: 'danger',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ["animated", "fadeIn"],     // animate.css classes
        animationOut: ["animated", "fadeOut"],   // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true
        }
      }) 
      break; 
    
    case 'change-done':
      store.addNotification({
        title: 'Bravo !',
        message: 'Les modifications ont bien été prises en compte',
        type: 'success',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ["animated", "fadeIn"],     // animate.css classes
        animationOut: ["animated", "fadeOut"],   // animate.css classes
        dismiss: {
          duration: 3000,
          showIcon: true
        }
      }) 
      break; 
    
    case 'change-not-done':
      store.addNotification({
        title: 'Oups !',
        message: 'Un problème est survenu, vous pouvez réessayer',
        type: 'danger',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ["animated", "fadeIn"],     // animate.css classes
        animationOut: ["animated", "fadeOut"],   // animate.css classes
        dismiss: {
          duration: 3000,
          showIcon: true
        }
      }) 
      break;

      default:
      store.addNotification({
        title: 'Votre attention svp !',
        message: 'Réessayez, si l\'erreur se répete, contactez un administrateur',
        type: 'info',                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ["animated", "fadeIn"],     // animate.css classes
        animationOut: ["animated", "fadeOut"],   // animate.css classes
        dismiss: {
          duration: 3000,
          showIcon: true
        }
      }) 
      break;

  }  

}