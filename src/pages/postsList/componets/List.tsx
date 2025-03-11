import {Virtuoso} from "react-virtuoso";
import {cn} from "@/lib/utils.js";
import {forwardRef, memo} from "react";
import {usePosts} from "hooks/usePosts.js";
import {Link, useParams} from "wouter";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "components/ui/card.js";
import {Button} from "components/ui/button.js";

const Item = memo(({item, index}: any) => {
  const {setPostIndex} = usePosts();

  return (
    <Link to={`/posts/${item?.id}`} onClick={() => {
      console.log('index', index)
      setPostIndex(index)
    }}>
      <Card className="w-full cursor-pointer">
        <CardHeader>
          <CardTitle className='capitalize'>{item?.title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
})
const List = () => {
  const {postIndex, posts, onReachedEnd} = usePosts();

  // console.log('posts', posts)
  return (
    <Virtuoso
      data={posts}
      style={{height: `30rem`, width: '100%',}}
      totalCount={posts?.length}
      components={{
        List: ({children, ...props}) => (
          <div
            {...props}
            className={cn("space-y-2  p-4 rounded-lg")}
          >
            {children}
          </div>
        ),
      }}
      itemContent={(index, item) => <Item item={item} index={index}/>}
      endReached={onReachedEnd}
      initialTopMostItemIndex={postIndex}
    />
  )
}
export default memo(List);