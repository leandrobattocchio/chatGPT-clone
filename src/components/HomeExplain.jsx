import { useMessageStore } from '@/store/messageStore'
import { SunIcon, ThunderIcon, WarningIcon } from './Icons'
import styles from '@/styles/Home.module.css'

const HomeExplain = () => {
  const [sendQuestion] = useMessageStore((state) => [state.sendQuestion])

  const examplesButtons = [
    'Explain quantum computing in simple terms',
    'Got any creative ideas for a 10 year old’s birthday?',
    'How do I make an HTTP request in Javascript?'
  ]

  const capabilitiesButtons = [
    'Remembers what user said earlier in the conversation',
    'Allows user to provide follow-up corrections',
    'Trained to decline inappropriate requests'
  ]

  const limitationsButtions = [
    'May occasionally generate incorrect information',
    'May occasionally produce harmful instructions or biased content',
    'Limited knowledge of world and events after 2021'
  ]

  const handleClick = (text) => {
    sendQuestion({ userQuestion: text })
  }

  return (
    <div className={styles.noMessages}>
      <h1>ChatGPT</h1>
      <div className={styles.displayInfo}>
        <div>
          <h2>
            <SunIcon />
            Examples
          </h2>
          <ul>
            {examplesButtons.map((button, index) => {
              return (
                <li key={index}>
                  <button onClick={() => handleClick(button)}>{button}</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h2>
            <ThunderIcon />
            Capabilities
          </h2>
          <ul>
            {capabilitiesButtons.map((capability, index) => {
              return <li key={index}>{capability}</li>
            })}
          </ul>
        </div>
        <div>
          <h2>
            <WarningIcon />
            Limitations
          </h2>
          <ul>
            {limitationsButtions.map((limitation, index) => {
              return <li key={index}>{limitation}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeExplain
