'use client';

// Styling
import "@codegouvfr/react-dsfr/dsfr/utility/icons/icons-system/icons-system.css";
import "@codegouvfr/react-dsfr/dsfr/utility/icons/icons-business/icons-business.css";
import "@codegouvfr/react-dsfr/dsfr/utility/icons/icons-user/icons-user.css";

// Components
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { BASE_APP_URL } from './constantes/constantes.jsx';


// Hooks
import { useRouter } from "next/navigation";

export default function HeaderOlympia() {

  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem('bearToken')
    router.push(BASE_APP_URL + '/authentification/connexion');
  }

  const handleLogIn = () => {
    router.push(BASE_APP_URL + '/authentification/connexion');
  }
  
  return (
    <Header
      brandTop={
        <>
          Ministère
          <br />
          de l'économie
          <br />
          des finances
          <br />
          et de la souveraineté
          <br />
          industrielle et numérique
        </>
      }
      homeLinkProps={{
        href: "/",
        title:
          "Accueil - Ministère de l'économie, des finances et de la souveraineté industrielle et numérique",
      }}
      id="fr-header-simple-header-with-service-title-and-tagline"
      quickAccessItems={[
        {
          iconId: 'fr-icon-mail-line',
          linkProps: {
            href: 'mailto:labtransfo@finances.gouv.fr'
          },
          text: 'Nous contacter'
        },
        {
          buttonProps: {
            onClick: handleLogIn
          },
          iconId: 'fr-icon-account-circle-line',
          text: 'Se connecter'
        },
        {
          buttonProps: {
            onClick: handleLogOut
          },
          iconId: 'fr-icon-error-line',
          text: 'Se déconnecter'
        }
      ]}
      navigation={[
        {
          linkProps: {
            href: `${BASE_APP_URL}`,
            target: '_self'
          },
          text: 'Accueil',
          isActive: true
        },
        {
          isActive: true,
          linkProps: {
            href: `${BASE_APP_URL}/chat`,
            target: '_self'
          },
          isActive: false,
          text: 'Chatbot'
        }
      ]}
      serviceTitle={
        <>
          OlympIA{" "}
          <Badge as="span" noIcon severity="success">
            Beta
          </Badge>
        </>
      }
    />
  )
}
