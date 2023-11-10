import React, {useEffect, useState} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { socket } from '@/util/socket';
import ConnectionPage from '../ResponsiveConnectionPage/ConnectionPage/ConnectionPage';
import ResponsiveConnectionPage from '../ResponsiveConnectionPage/ResponsiveConnectionPage';
import ChatPage from '../ChatPage/ChatPage';

function ChatRouter() {
  const [session, setSession] = useLocalStorage("session", {});
  const [stats, setStats] = useState({queueVenter: 0, queueListener: 0});

  useEffect(()=>{
    function onSession(session: any) {
      socket.auth = { sessionID: session.sessionID };
      setSession(session);
    }

    socket.on("session", onSession);

    return () => {
      socket.off("session", onSession);
    };
  }, [session, setSession]);

  useEffect(()=>{
    function onStats(stats: any) {
      setStats(stats);
    }

    socket.on("stats", onStats);

    return () => {
      socket.off("stats", onStats);
    }
  },[stats, setStats]);

  useEffect(()=>{
    socket.connect();

    return () => {
      socket.disconnect();
    }
  },[]);

  return (
    <ChatPage/>
  )
}

export default ChatRouter