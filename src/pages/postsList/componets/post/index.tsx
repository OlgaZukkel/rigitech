import {Card, CardContent, CardFooter, CardHeader} from 'components/ui/card.js'
import {Button} from "components/ui/button.js"
import {useParams} from "wouter";
import {memo, useMemo, useState} from "react";
import {useGetPosts} from "hooks/useGetPosts.js";
import {Accordion, AccordionContent, AccordionItem} from "components/ui/accordion.js";

const PostComponent = () => {
  const {data, comments} = useGetPosts();
  const params = useParams<{ id: string }>();
  const findPost = useMemo(() => {
    return data?.find((item) => item.id === Number(params.id.substring(1)))
  }, [params, data])
  const [triggerAccordion, setTriggerAccordion] = useState<string | null>(null);
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader className="p-4">
          <h1 className='capitalize font-semibold text-lg'>{findPost?.title}</h1>
        </CardHeader>
        <CardContent className="p-4">
          <p>
            {findPost?.body}
          </p>
        </CardContent>
        <CardFooter className="p-4">
          <Button onClick={() => setTriggerAccordion(triggerAccordion === "item-1" ? null : "item-1")}>
            <p>Show comments</p>
          </Button>
        </CardFooter>
        <Accordion
          type="single"
          collapsible
          value={triggerAccordion}
          onValueChange={setTriggerAccordion}>
          <AccordionItem value="item-1">
            <AccordionContent className='border-t border-gray-200 p-4 flex flex-col gap-4'>
              {
                comments.map((comment, index) => (
                  <div key={index} className='flex flex-col w-full gap-1'>
                    <h2 className='font-medium text-md'>{comment.email}</h2>
                    <p className='font-light text-sm ml-2'>{comment.body}</p>
                  </div>
                ))
              }
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  )
}
export default memo(PostComponent);

