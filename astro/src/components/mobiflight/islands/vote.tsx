import { useState } from "react"
import { Badge } from "./shadcn/components/ui/Badge"
import { Button } from "./shadcn/components/ui/Button"
import IconThumbUp from "@/components/mobiflight/islands/icons/icon-thumb-up"

export interface VoteProps {
  votes: number
}

const Vote = ({ votes }: VoteProps) => {
  const [ currentVotes, setCurrentVotes] = useState(votes)
  return (
    <div className="flex flex-row gap-2 items-center">
    <span className="sr-only">Votes</span>
    <Badge variant="outline" size={"md"} className="rounded-lg pr-0 py-0 text-sm [&_svg]:size-4">
      <IconThumbUp />
      {currentVotes ?? 0}
      <Button variant="default" size={"sm"} className="rounded-l-none pl-3" onClick={() => setCurrentVotes(currentVotes + 1)}> +1 </Button>
    </Badge>
  </div>
  )
}
export default Vote