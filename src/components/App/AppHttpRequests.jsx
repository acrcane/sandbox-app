import React, { useState, useEffect } from "react";
import { Posts } from "components/Posts/Posts";
import { 
  requestsPosts, 
  // requestsPostsByQuery 
} from "services/api";
import { STATUSES } from "services/constans";

import { SearchPage } from "pages/SearchPage/SearchPage";

const AppHttpRequests = () => {
  const [isPost, setIsPost] = useState(null);
  const [isStatus, setIsStatus] = useState(STATUSES.idle);
  const [isError, setIsError] = useState(null);
  const [isSearchValue, setIsSearchValue] = useState('')

  useEffect(() => {
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
    fetchPosts()
  }, [isSearchValue]);

  const handleSubmit = (seatchValue) => {
    setIsSearchValue(seatchValue)
  }

  return (
    <>
      <SearchPage onSubmit={handleSubmit} />
      <Posts postsM={isPost} statusM={isStatus} errorM={isError} />
    </>
  );
};

export default AppHttpRequests;
