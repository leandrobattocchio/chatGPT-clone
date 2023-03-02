import { useMessageStore } from '@/store/messageStore'
import styles from '@/styles/Home.module.css'
import { useRef } from 'react'
import { SendIcon } from './Icons'

const ChatForm = () => {
  const [sendQuestion] = useMessageStore((state) => [state.sendQuestion])
  const promp = useRef('')

  const handleSubmit = (event) => {
    event?.preventDefault()
    const { value } = promp.current
    // Funcion del estado de zustand, que recibe la pregunta, y guarda la respuesta de la IA en el estado.
    if (value.trim().length > 0) sendQuestion({ userQuestion: value })

    promp.current.value = ''
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleChange = () => {
    const el = promp.current

    el.style.height = '0px'
    const scrollHeight = el.scrollHeight
    el.style.height = scrollHeight + 'px'
  }

  return (
    <div className={styles.footer}>
      <div className={styles.textArea}>
        <form onSubmit={handleSubmit}>
          <textarea
            ref={promp}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            defaultValue=''
            maxLength='284'
            rows={1}
            tabIndex={0}
            autoFocus
            required
          />
          <button className={styles.formButtom}>
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatForm
