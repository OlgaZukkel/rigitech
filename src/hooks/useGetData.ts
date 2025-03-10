import {createMonoHook, useFetch} from 'use-mono-hook';
import {mockFunction} from 'utils/mockFunction.js';
import {useEffect} from "react";

const _useGetData = () => {

  const {data, loading, error} = useFetch({
    url: `https://jsonplaceholder.typicode.com/posts`,
    cache: false,
  });


  return {
    data,
    loading,
  };
};
export const useGetData = createMonoHook<typeof _useGetData>(_useGetData, {
  defaults: {
    data: undefined,
  } as any
}).useHook;
