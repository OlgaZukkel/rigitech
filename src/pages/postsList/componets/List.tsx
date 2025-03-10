import {Virtuoso} from "react-virtuoso";
import {cn} from "@/lib/utils.js";
import {forwardRef, memo} from "react";
import {useGetPosts} from "hooks/useGetPosts.js";
import {Link, useParams} from "wouter";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "components/ui/card.js";
import {Button} from "components/ui/button.js";

const Item = memo(({item}: any) => {
  const {setPostId} = useGetPosts();
  return (
    <Link to={`/posts/:${item.id}`} onClick={() => setPostId(item.id)}>
      <Card className="w-full cursor-pointer">
        <CardHeader>
          <CardTitle className='capitalize'>{item?.title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
})
const List = () => {
  const {data} = useGetPosts();
  return (
      <Virtuoso
        data={data}
        style={{height: `50rem`, width: '100%',}}
        totalCount={data?.length}
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
        itemContent={(index, item) => <Item item={item}/>}
      />
  )
}
export default memo(List);