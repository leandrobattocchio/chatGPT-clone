import styles from '@/styles/Home.module.css'
import ChatForm from './ChatForm'
import MessageContainer from './MessageContainer'

const Chat = () => {
  return (
    <main className={styles.chat}>
      <MessageContainer />
      <ChatForm />
    </main>
  )
}

export default Chat
