import axios from 'axios';

export const search = async (content) =>
  await axios({
    method: 'post',
    url: '/search',
    data: { content },
  });
