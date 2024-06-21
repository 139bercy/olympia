import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import { StartDsfr } from "./StartDsfr";
import { defaultColorScheme } from "./defaultColorScheme";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import Link from "next/link";

export default function RootLayout({ children }: { children: JSX.Element }) {
  //NOTE: The lang parameter is optional and defaults to "fr"
  const lang = "fr";
  return (
    <html {...getHtmlAttributes({ defaultColorScheme, lang })}>
      <head>
        <StartDsfr />
        <DsfrHead Link={Link} />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <Header
            brandTop={
              <>
                INTITULE
                <br />
                OFFICIEL
              </>
            }
            homeLinkProps={{
              href: "/",
              title:
                "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)",
            }}
            id="fr-header-simple-header"
            navigation={[
              {
                linkProps: {
                  href: "#",
                  target: "_self",
                },
                text: "accès direct",
              },
              {
                isActive: true,
                linkProps: {
                  href: "#",
                  target: "_self",
                },
                text: "accès direct",
              },
              {
                linkProps: {
                  href: "#",
                  target: "_self",
                },
                text: "accès direct",
              },
              {
                linkProps: {
                  href: "#",
                  target: "_self",
                },
                text: "accès direct",
              },
            ]}
          />

          {children}
          <Footer
            accessibility="fully compliant"
            contentDescription="
    Ce message est à remplacer par les informations de votre site.

    Comme exemple de contenu, vous pouvez indiquer les informations
    suivantes : Le site officiel d’information administrative pour les entreprises.
    Retrouvez toutes les informations et démarches administratives nécessaires à la création,
    à la gestion et au développement de votre entreprise.
    "
            termsLinkProps={{
              href: "#",
            }}
            websiteMapLinkProps={{
              href: "#",
            }}
          />
        </DsfrProvider>
      </body>
    </html>
  );
}