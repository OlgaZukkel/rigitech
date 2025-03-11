import {createMonoHook, useFetch, useLazyFetch} from 'use-mono-hook';
import {useCallback, useEffect, useRef, useState} from "react";
import {GetPostsRequest} from "@/types.js";
import {mockFunction} from "utils/mockFunction.js";
import {API_URL} from "@/constsnts.js";

const POSTS_LIMIT = 10

const _usePosts = () => {
  const [postIndex, setPostIndex] = useState(0);
  const [posts, setPosts] = useState<any>([]);
  const [start, setStart] = useState(0);
  const [reachEnd, setReachedEnd] = useState(false);
  const {data, loading, error} = useFetch({
    url: `${API_URL}/posts?_limit=${POSTS_LIMIT}&_start=${start}`,
    cache: false,
  });

  const onReachedEnd = useCallback(() => {
    if (reachEnd) {
      return
    }
    setStart((prevState) => prevState + POSTS_LIMIT);
  }, [setPosts, setStart, start, data, reachEnd])

  useEffect(() => {
    if (!data || !data.length) {
      return
    }
    setPosts((prevState) => ([...prevState, ...data]));
  }, [data]);

  useEffect(() => {
    if (!data || data.length !== 0) {
      return;
    }
    setReachedEnd(true)
  }, [data]);


  return {
    data: data as GetPostsRequest,
    loading,
    postIndex,
    setPostIndex,
    setStart,
    start,
    posts,
    setPosts,
    onReachedEnd
  };
};
export const usePosts = createMonoHook<typeof _usePosts>(_usePosts, {
  defaults: {
    data: undefined,
    postIndex: 0,
    setPostIndex: mockFunction,
    start: null,
    setStart: mockFunction,
    posts: undefined,
    setPosts: mockFunction,
    onReachedEnd: mockFunction,
  }
}).useHook;
