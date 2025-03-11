import {createMonoHook, useFetch, useLazyFetch,} from 'use-mono-hook';
import {useRoute} from "wouter";
import {mockFunction} from "utils/mockFunction.js";
import {useCallback, useEffect} from "react";
import {API_URL} from "@/constsnts.js";
import {TypesComment, TypesComments} from "@/types.js";


const _usePost = () => {
  const postId = useRoute<{ id: string }>('/posts/:id').at?.(1)?.id

  const [{data: data, loading: loading}, fetchPost] = useLazyFetch({
    url: `${API_URL}/posts/{postId}`,
  });

  const [{data: commentsData, loading: commentsLoading}, fetchComments] = useLazyFetch({
    url: `${API_URL}/posts/{postId}/comments`,
  });

  const loadComments = useCallback(() => {
    fetchComments({
      url: `${API_URL}/posts/${postId}/comments`,
    }).catch(console.error);
  }, [postId, fetchComments]);

  useEffect(() => {
    if (!postId) {
      return
    }
    fetchPost({
      url: `${API_URL}/posts/${postId}`,
    }).catch(console.error)
  }, [postId, fetchPost]);

  return {
    data: data as TypesComment,
    loading,
    commentsData: commentsData as TypesComments,
    commentsLoading,
    loadComments
  };
};
export const usePost = createMonoHook<typeof _usePost>(_usePost, {
  defaults: {
    data: undefined,
    loading: true,
    commentsData: undefined,
    commentsLoading: false,
    loadComments: Promise.resolve
  }
}).useHook;
