import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import KeywordListView from '../../components/postview/KeywordListView';
import { filterPostInTag, getPostInTag } from '../../modules/post';

const KeywordContainer = ({ match }) => {
  const { user, postInTag } = useSelector(({ user, post, loading }) => ({
    user: user.user,
    postInTag: post.postInTag,
    loading: loading,
  }));
  const reloaded = useSelector(({ reload }) => reload);
  const dispatch = useDispatch();
  const { tagId } = match.params;

  useEffect(() => {
    dispatch(getPostInTag(tagId));
  }, [dispatch, tagId]);

  useEffect(() => {
    if (reloaded) {
      if (reloaded.keyword === true) {
        dispatch(getPostInTag(tagId));
      }
    }
  }, [reloaded, dispatch, tagId]);

  const onFilteringDate = (startDate, endDate) => {
    const startDateToISO = new Date(startDate);
    const endDateToISO = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate(),
      23,
      59,
      59
    );
    dispatch(
      filterPostInTag({
        minimum_date: startDateToISO,
        maximum_date: endDateToISO,
        tag_id: parseInt(tagId),
      })
    );
  };

  if (!user || !postInTag) return null;

  return (
    <KeywordListView
      user={user}
      postInTag={postInTag}
      onFilteringDate={onFilteringDate}
    />
  );
};

export default withRouter(KeywordContainer);
