import { app } from './firebase';

export const getNews = () =>
  app.content.get('news')
    .then(products => console.log('All of your products:', products))
    .catch(error => console.log(error))


