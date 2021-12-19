import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentPost } from '../api/post';
import { favoritePost } from '../modules/post';
import Banner from '../components/Banner';
import { reloadAction } from '../modules/reload';

const BannerContainer = () => {
  const [recentTimData, setRecentTimData] = useState(null);
  const reloaded = useSelector(({ reload }) => reload);
  const dispatch = useDispatch();

  const LogContainerfetch = async () => {
    try {
      const response = await getRecentPost();
      setRecentTimData(response.data);
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
        LogContainerfetch();
      }
    }
  }, [reloaded]);

  if (typeof recentTimData === 'string') {
    return <div>아직 데이터가 없습니다!</div>;
  }
  return <Banner recentTimData={recentTimData} onFavorite={onFavorite} />;
};
export default BannerContainer;
