import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import { addNewPost, flagPost, deletePost } from '../reducers/postReducer';
import { isHashTagLink } from '../utils';

import Post from '../components/post';

export default function PostContainer() {
  const postData = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const postRef = useRef();

  const _handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const newPost = {
      id: nanoid(),
      message: data.get('post'),
      isFlag: false,
      isRemove: false,
      category: '',
      date: new Date(),
    };
    dispatch(addNewPost(newPost));

    postRef.current.value = '';
  };

  const _handleFlagPost = (id) => () => {
    dispatch(flagPost(id));
  };

  const _handleDeletePost = (id) => () => {
    dispatch(deletePost(id));
  };

  return (
    <Post>
      <Post.Title>Post</Post.Title>
      <Post.Form onSubmit={_handleSubmit}>
        <Post.FormGroup>
          <Post.Label labelId="newPost">Add new post</Post.Label>
          <Post.Input
            inputId="newPost"
            name="post"
            forwardRef={postRef}
            required
          />
          <Post.ButtonGroup>
            <Post.Button>Post</Post.Button>
          </Post.ButtonGroup>
        </Post.FormGroup>
      </Post.Form>
      <Post.Group>
        {postData?.map((post) => (
          <Post.List key={post.id}>
            <Post.Message>
            {post.message}
            </Post.Message>
            <Post.ButtonGroup>
              <Post.FlagButton onClick={_handleFlagPost(post.id)}>
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  size="xs"
                  color={post.isFlag ? '#9e9e9e' : '#ff9800'}
                />
              </Post.FlagButton>
              <Post.DeleteButton onClick={_handleDeletePost(post.id)}>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  size="xs"
                  color="#f44336"
                />
              </Post.DeleteButton>
            </Post.ButtonGroup>
          </Post.List>
        ))}
      </Post.Group>
    </Post>
  );
}
