'use client'

import { useState } from "react";
import { useSocket } from "../context/SocketProvider"

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState('');
  return (
    <div className="w-full h-screen bg-slate-900 py-24">
      <div className="w-[600px] space-y-3 mx-auto h-full flex flex-col">
        <div className="h-1/2 rounded-lg w-full bg-slate-800">
          {
            messages.map((msg) => (
              <li className="list-none text-white text-base">{msg}</li>
            ))
          }
        </div>
        <div className="w-full flex bg-blue-800 p-3">
          <input className=" w-[85%]" type="text" placeholder="Message..." onChange={(e) => setMessage(e.target.value)} />
          <button onClick={() => sendMessage(message)} className="">Send</button>
        </div>
      </div>
    </div>
  )
}