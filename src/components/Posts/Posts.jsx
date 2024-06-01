import React from "react";
import { PostsList } from "components/PostsList/PostsList";
import { List, Title } from "./Posts.styled";

export const Posts = ({postsM, statusM, errorM}) => {
  return (
    <>
      <Title>Weekly posts</Title>
      <List>
        <PostsList postsP={postsM} statusP={statusM} errorP={errorM}/>
      </List>
    </>
  );
};
