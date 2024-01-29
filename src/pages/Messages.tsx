import React from "react";
import CardLobbyComponent from "../components/CardLobbyComponent";

export default function Messages() {
  interface Messages {
    title: string;
    body: string;
  }
  const [messages, setMessages] = React.useState<Messages[]>([
    {
      title: "Olá, Alan!",
      body: "Olá, Alan!",
    },
    {
      title: "Olá, Any!",
      body: "Olá, Any!",
    },
  ]);
  return (
    <>
      {messages.map((item, index) => (
        <CardLobbyComponent key={index} title={item.title} body={item.body} />
      ))}
    </>
  );
}
