import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagView from '../../components/postview/TagView';
import { getTag } from '../../modules/tagkeyword';
import { check } from '../../modules/user';

const TagViewContainer = () => {
  const { user, tags } = useSelector(({ user, tagkeyword }) => ({
    user: user.user,
    tags: tagkeyword.tags,
  }));
  const reloaded = useSelector(({ reload }) => reload);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTag());
  }, [dispatch]);

  useEffect(() => {
    dispatch(check());
  }, [dispatch]);

  useEffect(() => {
    if (reloaded) {
      if (reloaded.tag === true) {
        dispatch(getTag());
      }
    }
  }, [reloaded, dispatch]);

  return <TagView user={user} tags={tags} />;
};

export default TagViewContainer;
