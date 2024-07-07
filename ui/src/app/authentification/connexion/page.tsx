"use client";

import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
        console.log(process.env.NEXT_PUBLIC_DEPLOIEMENT);
        const access_token = 'ACCES VALIDE'

        if (access_token) {
            localStorage.setItem('bearToken', access_token)
            // router.push(process.env.NEXT_PUBLIC_DEPLOIEMENT + "/");
            router.push("/");
        }
    };

    // Rediriger l'utilisateur s'il est déjà connecté
    /* useEffect(() => {
      if (localStorage.getItem("bearToken") !!= null) {
        router.push(process.env.NEXT_PUBLIC_DEPLOIEMENT + "/")
      }
    }, []) */

    return (
        <>
            <h1>Se connecter</h1>
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

            <Button
                onClick={handleLogin}
            >
                Se connecter
            </Button>

            <Button
                onClick={() => {
                    router.push(process.env.NEXT_PUBLIC_DEPLOIEMENT + "/authentification/enregistrement");
                }}
            >
                S'enregistrer
            </Button>
        </>
    );
}
