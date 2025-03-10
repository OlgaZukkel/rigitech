import {createMonoHook, useFetch, useLazyFetch} from 'use-mono-hook';
import {useEffect, useState} from "react";
import {GetPostsRequest} from "@/types.js";
import {mockFunction} from "utils/mockFunction.js";
import {useParams} from "wouter";


const _useGetPosts = () => {
  const [_postId, setPostId] = useState<number>();

  const [{data, loading, error}, onUpdateData] = useLazyFetch({
    url: `https://jsonplaceholder.typicode.com/posts`,
    cache: false,
  });
  const {data: commentsData, loading: commentsLoading} = useFetch({
    url: `https://jsonplaceholder.typicode.com/comments`,
    cache: false,
  });
  const comments = commentsData?.filter((item) => _postId === item.postId);


  useEffect(() => {
    onUpdateData().catch(console.error);
  }, [onUpdateData]);


  return {
    data: data as GetPostsRequest,
    loading,
    comments,
    setPostId
  };
};
export const useGetPosts = createMonoHook<typeof _useGetPosts>(_useGetPosts, {
  defaults: {
    data: undefined,
    comments: undefined,
    setPostId: mockFunction
  }
}).useHook;
