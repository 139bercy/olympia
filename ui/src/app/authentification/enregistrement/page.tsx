"use client";

import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./enregistrement.module.css"

type InputState = 'default' | 'success' | 'error' | undefined;

type RegistrationCredentials = {
    username: string,
    password: string,
    passwordValidation: string,
    mail: string
}

export default function Enregistrement() {
    const router = useRouter();
    const [mailInputState, setMailInputState] = useState<InputState>("default")
    const [mailInputMessage, setMailInputMessage] = useState<String>("default")
    const [usernameInputState, setUsernameInputState] = useState<InputState>("default")
    const [usernameInputMessage, setUsernameInputMessage] = useState<String>("default")
    const [passwordInputState, setPasswordInputState] = useState<InputState>("default")
    const [passwordInputMessage, setPasswordInputMessage] = useState<String>("default")
    const [passwordValidationInputState, setPasswordValidationInputState] = useState<InputState>("default")
    const [passwordValidationInputMessage, setPasswordValidationInputMessage] = useState<String>("default")
    const [credentials, setCredentials] = useState<RegistrationCredentials>({
        username: "",
        password: "",
        passwordValidation: "",
        mail: ""
    });
    const charsInPassword = "#";

    const validateMail = (mail: string) => {
        if (!mail.endsWith('@finances.gouv.fr')) {
            setMailInputState('error');
            setMailInputMessage('Seul les adresses mails terminant par @finances.gouv.fr sont autorisées.');
            return;
        }

        setMailInputState('default');
    }

    const validateUsername = (username: string) => {
        if (username.includes(' ')) {
            setUsernameInputState('error')
            setUsernameInputMessage("Ne doit pas contenir d'espace")
            return;
        }

        if (username.length < 5) {
            setUsernameInputState('error')
            setUsernameInputMessage("Doit contenir au moins 5 caractères.")
            return;
        }

        setUsernameInputState('default')
    }

    const validatePassword = (password: string) => {
        if (password.length < 10) {
            setPasswordInputState('error')
            setPasswordInputMessage('Doit contenir au moins 10 caractères.')
            return;
        }
        setPasswordInputState('default');
    }

    const validateDoublePassword = (passwordValidation: string) => {
        if (credentials.password !== passwordValidation) {
            setPasswordValidationInputState('error');
            setPasswordValidationInputMessage("Ne correspond pas au mot de passe")
            return;
        }
        if (credentials.password === passwordValidation) {
            setPasswordValidationInputState('success');
            setPasswordValidationInputMessage("Les deux mots de passe sont identiques.");
            return;
        }
        setPasswordValidationInputState('default');
        return;
    }

    const handleLogin = async () => {
        console.log("LOGIN")
        console.log(credentials)
        /* const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user/enregistrement", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });

        if (res.status === 201) {
            router.push(process.env.NEXT_PUBLIC_DEPLOIEMENT + "/authentification/connexion");
        } */
    };

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value
        });

        if (name === "mail") {
            validateMail(value)
        }

        if (name === "username") {
            validateUsername(value);
        }
        if (name === "password") {
            validatePassword(value);
        }
        if (name === "passwordValidation") {
            validateDoublePassword(value);
        }
    };

    return (
        <>
            <h1>S'enregistrer</h1>
            <div className={styles['input-width']}>
                <Input
                    label="Email"
                    state={mailInputState}
                    stateRelatedMessage={mailInputMessage}
                    value={credentials.mail}
                    onChange={handleInputChange}
                    nativeInputProps={{
                        type: "mail",
                        pattern: ".+@finances.gouv.fr",
                        name: "mail"
                    }}
                />
            </div>
            <div className={styles['input-width']}>
                <Input
                    label="Identifiant"
                    state={usernameInputState}
                    stateRelatedMessage={usernameInputMessage}
                    value={credentials.username}
                    onChange={handleInputChange}
                    nativeInputProps={{
                        name: "username"
                    }}
                />

            </div>
            <div className={styles['input-width']}>
                <Input
                    label="Mot de passe"
                    state={passwordInputState}
                    stateRelatedMessage={passwordInputMessage}
                    value={credentials.password}
                    onChange={handleInputChange}
                    nativeInputProps={{
                        name: "password",
                        type: "password"
                    }}
                />
            </div>
            <div className={styles['input-width']}>
                <Input
                    label="Confirmer votre mot de passe"
                    state={passwordValidationInputState}
                    stateRelatedMessage={passwordValidationInputMessage}
                    value={credentials.passwordValidation}
                    onChange={handleInputChange}
                    nativeInputProps={{
                        name: "passwordValidation",
                        type: "password"
                    }}
                />
            </div>
            <div className={styles['button-margin']}>
                <Button
                    onClick={handleLogin}
                >
                    S'enregistrer
                </Button>
            </div>
        </>
    );
}
function setEmailMessage(arg0: string) {
    throw new Error("Function not implemented.");
}

function setEmailState(arg0: string) {
    throw new Error("Function not implemented.");
}

