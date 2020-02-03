import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const addNotification = (status) => {
  switch (status) {
    case 'register-success':
      store.addNotification({
        title: 'Félicitation !',
        message: 'Votre inscription a bien été prise en compte, bienvenue chez O\'Foot !',
        type: 'success', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      break;
    case 'register-error':
      store.addNotification({
        title: 'Votre attention s\'il vous plaît !',
        message: 'Hum, nous avons rencontré un problème.\nVeuillez réessayer',
        type: 'danger', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      break;
    case 'create-team-success':
      store.addNotification({
        title: 'Félicitations !',
        message: 'Votre équipe a bien été créée !',
        type: 'success', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      break;

    case 'login-success':
      store.addNotification({
        title: 'Bienvenue Champion !',
        message: 'Comment vas-tu depuis le temps ?',
        type: 'success', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      break;

    case 'login-error':
      store.addNotification({
        title: 'Votre attention s\'il vous plaît !',
        message: 'Vos informations semblent incorrectes, veuillez réessayer',
        type: 'danger', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      break;

    case 'modify-team-success':
      store.addNotification({
        title: 'Félicitations Coach !',
        message: 'Votre équipe a bien été modifiée.\nVous pouvez fermer cette fenêtre.',
        type: 'success', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      break;

    case 'modify-team-error':
      store.addNotification({
        title: 'Votre attention s\'il vous plaît !',
        message: 'Un problème est survenu, veuillez réessayer',
        type: 'danger', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      break;

    case 'change-done':
      store.addNotification({
        title: 'Félicitations !',
        message: 'Vos modifications ont bien été prises en compte.',
        type: 'success', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 3000,
          showIcon: true,
        },
      });
      break;

    case 'change-not-done':
      store.addNotification({
        title: 'Oups !',
        message: 'Un problème est survenu, veuillez réessayer.',
        type: 'danger', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 3000,
          showIcon: true,
        },
      });
      break;

    default:
      store.addNotification({
        title: 'Votre attention s\'il vous plaît !',
        message: 'Réessayez, si l\'erreur persiste, contactez un administrateur.',
        type: 'info', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',
        animationIn: ['animated', 'fadeIn'], // animate.css classes
        animationOut: ['animated', 'fadeOut'], // animate.css classes
        dismiss: {
          duration: 3000,
          showIcon: true,
        },
      });
      break;
  }
};
