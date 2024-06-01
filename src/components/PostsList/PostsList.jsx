import React from "react";
import { ListElem, PostsBody, PostsId, PostsTitle } from "./PostsList.styled";
import { STATUSES } from "services/constans";
import { RotatingLines } from "react-loader-spinner";

export const PostsList = ({ postsP, statusP, errorP }) => {
  const showNoPostMessage =
    statusP === STATUSES.successes &&
    Array.isArray(postsP) &&
    postsP.lenght === 0;
  const showPosts = statusP === STATUSES.successes && Array.isArray(postsP);

  return (
    <>
      {statusP === STATUSES.error && <p>Oooops some error occured {errorP}</p>}
      {showNoPostMessage && <p>You don't have posts</p>}
      {statusP === STATUSES.pending && (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          strokeColor="#4187cc"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      )}
      {showPosts &&
        postsP.map((post) => (
          <ListElem key={post.id}>
            <PostsTitle>Title: {post.title}</PostsTitle>
            <PostsId>Post ID: {post.id}</PostsId>
            <PostsBody>Post body: {post.body}</PostsBody>
          </ListElem>
        ))}
    </>
  );
};
