import { useMessageStore } from '@/store/messageStore'
import styles from '@/styles/Home.module.css'
import HomeExplain from './HomeExplain'
import Message from './Message'

const MessageContainer = () => {
  const [messages] = useMessageStore((state) => [state.messages])

  return (
    <section className={styles.messageContainer}>
      {messages.length > 0 ? (
        <>
          {messages.map((message) => {
            return <Message key={message.id} message={message} />
          })}
        </>
      ) : (
        <HomeExplain />
      )}
    </section>
  )
}

export default MessageContainer
