import React from "react"

import { TMessageHistory } from "../../../store"

export interface IMessage {
  message: TMessageHistory
  userJid: string
  is?: string
}

export const SystemMessage: React.FC<IMessage> = ({ message, userJid }) => {
  console.log(userJid)
  return (
    <div
      style={{
        textAlign: "center",
        color: "#6ea9d7",
        fontSize: ".8em",
        boxSizing: "border-box",
        fontFamily: "Helvetica Neue,Segoe UI,Helvetica,Arial,sans-serif",
      }}
      key={message.key}
    >
      {message.body}
    </div>
  )
}
