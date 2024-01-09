import { messagesData } from "../../shared/constants"
import Message from "./Message"
import styles from './MessageComponent.module.css'

const MessageComponent = ()=>{
    return <div>
    <div className={styles.container}>
      {messagesData.map((data, index) => (
        <div key={index} className={styles.messageBox}>
          <Message {...data} />
        </div>
      ))}
    </div>
  </div>
}

export default MessageComponent