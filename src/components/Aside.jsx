import { useMessageStore } from '@/store/messageStore'
import styles from '@/styles/Home.module.css'
import { PlusIcon } from './Icons'

const Aside = () => {
  const [resetChat] = useMessageStore((state) => [state.resetChat])

  const handleReset = () => {
    resetChat()
  }

  return (
    <aside className={styles.aside}>
      <nav>
        <button className={styles.asideButton} onClick={handleReset}>
          <PlusIcon />
          New chat
        </button>
      </nav>
    </aside>
  )
}

export default Aside
