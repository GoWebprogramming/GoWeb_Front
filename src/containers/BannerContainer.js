import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentPost, getFavoritePost } from '../api/post';
import { favoritePost } from '../modules/post';
import Banner from '../components/Banner';
import { reloadAction } from '../modules/reload';

const BannerContainer = () => {
  const [timData, setTimData] = useState(null);
  const reloaded = useSelector(({ reload }) => reload);
  const dispatch = useDispatch();

  const LogContainerfetch = async () => {
    try {
      const data = await getRecentPost();
      setTimData(data);
    } catch (e) {}
  };

  const onFavorite = (post_id) => {
    dispatch(favoritePost(post_id));
    dispatch(reloadAction('timLog'));
  };
  useEffect(() => {
    LogContainerfetch();
  }, []);

  //데이터 실시간 갱신 시에 리프레시 해주는 코드
  useEffect(() => {
    if (reloaded) {
      if (reloaded.timLog === true) {
        console.log('fsdfsdfsdfdsfds');
        LogContainerfetch();
      }
    }
  }, [reloaded]);

  if (timData === null) {
    return <>loading</>;
  }

  if (typeof timData === 'string') {
    return <div>아직 데이터가 없습니다!</div>;
  }
  return <Banner timData={timData} onFavorite={onFavorite} />;
};
export default BannerContainer;
