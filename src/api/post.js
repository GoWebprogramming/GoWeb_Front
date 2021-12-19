import axios from 'axios';

export const createPost = async (formData) =>
  await axios({
    method: 'post',
    url: '/posts/upload',
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });

export const editPost = async (formData) =>
  await axios({
    method: 'post',
    url: '/posts/edit',
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });

export const deletePost = async (post_id) =>
  await axios({
    method: 'post',
    url: '/posts/delete',
    data: { post_id },
  });

export const favoritePost = async (post_id) =>
  await axios({
    method: 'post',
    url: '/posts/favorite',
    data: { post_id },
  });

// 즐겨찾기 게시글 가져오기
export const getFavoritePost = async () =>
  await axios({
    method: 'get',
    url: '/postview/favorite/',
  });
// 최근 포스트 5개 불러오기
export const getRecentPost = async () =>
  await axios({
    method: 'get',
    url: '/postview/recent',
  });

//포스트하나만 불러오기
export const getOnePostView = async (post_id) =>
  await axios({
    method: 'get',
  });

// 키워드(keywordId) 내 게시물 보기
export const getPostInKeyword = async (keywordId) =>
  await axios({
    method: 'get',
    url: `/postview/keyword/${keywordId}`,
  });
// 태그(tagId) 내의 키워드와 포스트 불러오기
export const getPostInTag = async (tagId) =>
  await axios({
    method: 'get',
    url: `/postview/tag/${tagId}`,
  });

export const filterPostInTag = async (filteringParams) =>
  await axios({
    method: 'post',
    url: '/postview/period/tag',
    data: filteringParams,
  });

export const filterPostInKeyword = async (filteringParams) =>
  await axios({
    method: 'post',
    url: '/postview/period/keyword',
    data: filteringParams,
  });
