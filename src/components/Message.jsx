import { IaIcon, UserIcon } from './Icons'
import styles from '@/styles/Home.module.css'
import TypeMessageEffect from './TypeMessageEffect'

const Message = ({ message }) => {
  const avatar = message.ia ? <IaIcon /> : <UserIcon />
  const text = message.ia ? (
    <TypeMessageEffect text={message.message} />
  ) : (
    message.message
  )

  return (
    <div className={`${message.ia ? styles.chatIa : styles.chat}`}>
      <div className={styles.chatMessage}>
        {avatar}
        <article>
          <p>{text}</p>
        </article>
      </div>
    </div>
  )
}

export default Message
