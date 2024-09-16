import { useEffect } from "react"
import { Container } from "@mui/material"
import { useParams } from "react-router"

import ChatDetailCard from "./ChatDetailCard"
import MembersList from "./MembersList"
import xmpp from "../../xmpp"

export default function ChatRoomDetails() {
  const { roomJID }: any = useParams()
  useEffect(() => {
    xmpp.getRoomMemberInfo(roomJID)
    xmpp.getRoomInfo(roomJID)
  }, [])

  return (
    <Container maxWidth="xl">
      <ChatDetailCard />
      <MembersList />
    </Container>
  )
}
