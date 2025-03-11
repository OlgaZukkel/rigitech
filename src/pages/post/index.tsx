import {Card, CardContent, CardFooter, CardHeader} from 'components/ui/card.js'
import {Button} from "components/ui/button.js"
import {memo, useState} from "react";
import {Accordion, AccordionContent, AccordionItem} from "components/ui/accordion.js";
import {usePost} from "hooks/usePost.js";

const PostComponent = () => {
  const {loadComments, commentsData, data} = usePost();
  const [triggerAccordion, setTriggerAccordion] = useState<string | null>(null);
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader className="p-4">
          <h1 className='capitalize font-semibold text-lg'>{data?.email}</h1>
        </CardHeader>
        <CardContent className="p-4">
          <p>
            {data?.body}
          </p>
        </CardContent>
        <CardFooter className="p-4">
          <Button
            className='bg-black hover:bg-black'
            onClick={() => {
              setTriggerAccordion(triggerAccordion === "item-1" ? null : "item-1");
              loadComments()
            }}>
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
                commentsData?.map((comment, index) => (
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

