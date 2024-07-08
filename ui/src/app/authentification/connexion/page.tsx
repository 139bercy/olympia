"use client";

// Styling
import '../../globals.css'
import styles from './connexion.module.css'

// Components
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FooterOlympia } from "@/components/FooterOlympia";
import HeaderOlympia from "@/components/HeaderOlympia";
import { BASE_APP_URL } from '../../../components/constantes/constantes.jsx';


type Credential = {
    username: string,
    password: string,
    provider: string,
    refresh: string
}

type InputState = 'default' | 'success' | 'error' | undefined;

export default function Connexion() {
    const router = useRouter();
    const [usernameInputState, setUsernameInputState] = useState<InputState>("default")
    const [passwordInputState, setPasswordInputState] = useState<InputState>("default")
    const [credentials, setCredentials] = useState<Credential>({
        username: "",
        password: "",
        provider: "db",
        refresh: "true"
    });

    const validateUsername = (username: string) => {
        if (username.includes(' ')) {
            setUsernameInputState('error')
        } else {

            setUsernameInputState('default')
        }
    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
        if (name === 'username') {
            validateUsername(value);
        }
    };

    const handleLogin = async () => {
        /* const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/security/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials)
        });
    
        const loginResult = await res.json();
        const access_token = loginResult['access_token'] */
        console.log(BASE_APP_URL);
        const access_token = 'ACCES VALIDE'

        if (access_token) {
            localStorage.setItem('bearToken', access_token)
            router.push(BASE_APP_URL + "/");
        }
    };

    // Rediriger l'utilisateur s'il est déjà connecté
    /* useEffect(() => {
      if (localStorage.getItem("bearToken") !!= null) {
        router.push(BASE_APP_URL + "/")
      }
    }, []) */

    return (
        <>
            <div className='container-colonne'>
                <HeaderOlympia />
                <div className='mid-container-margin'>

                    <h1>Se connecter</h1>
                    <div className='input-width'>
                        <Input
                            label="Identifiant"
                            state={usernameInputState}
                            stateRelatedMessage="Vérifier le format de l'indentifiant"
                            value={credentials.username}
                            onChange={handleInputChange}
                            nativeInputProps={{
                                name: "username"
                            }}
                        />

                    </div>
                    <div className='input-width'>
                        <Input
                            label="Mot de passe"
                            state={passwordInputState}
                            stateRelatedMessage="Text de validation / d'explication de l'erreur"
                            value={credentials.password}
                            onChange={handleInputChange}
                            nativeInputProps={{
                                name: "password",
                                type: "password"
                            }}
                        />

                    </div>

                    <div>
                    <Button
                        className={styles['button-margin']}
                        onClick={handleLogin}
                    >
                        Se connecter
                    </Button>

                    <Button
                        className={styles['button-margin']}
                        onClick={() => {
                            router.push(BASE_APP_URL + "/authentification/enregistrement");
                        }}
                    >
                        S'enregistrer
                    </Button>
                    </div>

                </div>
                <div className='footer-margin' >
                    <FooterOlympia />
                </div>
            </div>
        </>
    );
}
