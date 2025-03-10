import {Card} from '@/components/ui/card.js'
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="p-4">
        <div className="flex items-center space-x-4">
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder-user.jpg" alt="@jaredpalmer" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <span className="font-semibold not-italic">@jaredpalmer</span>
          </Link>
          <Button size="sm" variant="outline" className="border-gray-300 dark:border-gray-700">
            Follow
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p>
          I&apos;m absolutely loving the new design library from Shadcn. It makes creating components so much easier! 💯
        </p>
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <Button size="none" variant="unstyled" className="gap-1">
              <HeartIcon className="w-4 h-4" />
              <span className="sr-only">Like</span>
            </Button>
            <span className="font-medium">305</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="none" variant="unstyled" className="gap-1">
              <MessageSquareIcon className="w-4 h-4" />
              <span className="sr-only">Comment</span>
            </Button>
            <span className="font-medium">32</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="none" variant="unstyled" className="gap-1">
              <ShareIcon className="w-4 h-4" />
              <span className="sr-only">Share</span>
            </Button>
            <span className="font-medium">12</span>
          </div>
        </div>
      </CardFooter>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="grid gap-4 p-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="font-medium not-italic">@shadcn</span>
                <span className="text-sm not-italic text-gray-500 dark:text-gray-400">2m</span>
              </div>
              <p>Looking good! 👍</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="font-medium not-italic">@maxleiter</span>
                <span className="text-sm not-italic text-gray-500 dark:text-gray-400">5m</span>
              </div>
              <p>Great to hear! 😊</p>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <form className="flex space-x-4">
            <Avatar className="w-10 h-10 order-1">
              <AvatarImage src="/placeholder-user.jpg" alt="@shuding_" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className="grid gap-2 w-full">
              <Textarea placeholder="Write a comment..." className="min-h-[3rem] text-sm" />
              <div className="flex items-center space-x-2">
                <Button size="sm">Comment</Button>
                <Button size="sm" variant="outline">
                  <SmileIcon className="w-4 h-4" />
                  <span className="sr-only">Add a reaction</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Card>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}