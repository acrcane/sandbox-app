import React from "react";
import {
  ListElem,
  PostsBody,
  PostsId,
  PostsTitle,
} from "../PostsList/PostsList.styled";
import { STATUSES } from "services/constans";
import { RotatingLines } from "react-loader-spinner";
import { Title } from "pages/HomePage/HomePage.styled";

export const SearchResult = ({ result, status, error }) => {
  const showNoPostMessage =
    status === STATUSES.successes &&
    Array.isArray(result) &&
    result.length === 0;
  const showPost = status === STATUSES.successes && Array.isArray(result);
  return (
    <>
      {STATUSES.error && <p>No post</p>}
      {status === STATUSES.pending && (
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
      {showNoPostMessage && <Title>Not found</Title>}
      {showPost && result.map((find) => (
          <ListElem key={find.id}>
          <PostsTitle>Title: {find.title}</PostsTitle>
          <PostsId>ID: {find.id}</PostsId>
          <PostsBody>Body: {find.body}</PostsBody>
        </ListElem>
      ))}
    </>
  );
};
