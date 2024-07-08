import { Input } from "@codegouvfr/react-dsfr/Input"
import { Button } from "@codegouvfr/react-dsfr/Button"
import  Styles from './chat.module.css'

const Chat = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.messages}>
                Messages
            </div>
            <div>
            <Input
                label="Label champs de saisie"
                addon={<Button>Envoyer</Button>}
            />
            </div>

        </div>

    )
}

export default Chat;