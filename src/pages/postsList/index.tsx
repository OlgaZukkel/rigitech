import {memo, useRef} from "react";
import {usePosts} from "hooks/usePosts.js";
import List from "pages/postsList/componets/List.js";


const PostList = () => {
  return (
    <div className='w-full h-full flex justify-center items-center '>
      <section className='w-full max-w-[77.5rem]  p-10 border border-gray-200 rounded-lg bg-gray-100' >
        <List />
      </section>
    </div>

  )
}
export default memo(PostList);