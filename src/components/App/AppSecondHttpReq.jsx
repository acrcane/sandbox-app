import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { STATUSES } from "services/constans";
import { requestsPosts, requestsPostsById } from "services/api";
import {
  Header,
  // Title,
  CustomNavLink,
} from "./AppSecondHttpReq.styled";
import { HomePage } from "pages/HomePage/HomePage";
import { Posts } from "components/Posts/Posts";
import { SearchPage } from "pages/SearchPage/SearchPage";
import { SearchResult } from "components/SearchResult/SearchResult";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";

export const AppSecondHttpReq = () => {
  const [isPost, setIsPost] = useState(null);
  const [isStatus, setIsStatus] = useState(STATUSES.idle);
  const [isError, setIsError] = useState(null);
  const [searchResult, setSearctResult] = useState(null);

  const fetchPosts = async () => {
    try {
      setIsStatus(STATUSES.pending);
      const posts = await requestsPosts();
      setIsPost(posts);
      setIsStatus(STATUSES.successes);
    } catch (error) {
      setIsError(error.message);
      setIsStatus(STATUSES.error);
    }
  };

  const fetchPostById = async (id) => {
    try {
      setIsStatus(STATUSES.pending);
      const post = await requestsPostsById(id);
    //   setSearctResult([post]);
        setSearctResult(post.length > 0 ? post : []);
      setIsStatus(STATUSES.successes);
    } catch (error) {
      setIsError(error.message);
      setIsStatus(STATUSES.error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (seatchValue) => {
    fetchPostById(seatchValue);
  };
  return (
    <>
      <Header>
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="posts">Posts</CustomNavLink>
        <CustomNavLink to="search">Search</CustomNavLink>
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/posts"
            element={
              <Posts postsM={isPost} statusM={isStatus} errorM={isError} />
            }
          />
          <Route
            path="/search"
            element={<SearchPage onSubmit={handleSubmit} />}
          />
          <Route
            path="/search/result"
            element={
              <SearchResult
                result={searchResult}
                status={isStatus}
                error={isError}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};
