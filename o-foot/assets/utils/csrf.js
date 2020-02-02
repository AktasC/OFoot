export const getCSRF = () => {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === 'csrf_token') {
      return metas[i].getAttribute('content');
    }
  }
};

export default getCSRF;
