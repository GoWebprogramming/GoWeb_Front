import axios from 'axios';

// 유저의 전체 태그만 받아옴
export const getTag = async () =>
  await axios({
    method: 'get',
    url: '/tag-keyword-view/alltag',
  });
// 유저의 전체 태그와 키워드
export const getTagKeyword = async () =>
  await axios({
    method: 'get',
    url: '/tag-keyword-view/alltag/keyword',
  });
// 특정 태그(tagId)에 있는 키워드만 받아옴
export const getKeywordInTag = async (tagId) =>
  await axios({
    method: 'get',
    url: `/tag-keyword-view/tag/${tagId}`,
  });
