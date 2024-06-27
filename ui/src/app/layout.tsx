import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import { StartDsfr } from "./StartDsfr";
import { defaultColorScheme } from "./defaultColorScheme";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
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
                  "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)",
            }}
            id="fr-header-simple-header-with-service-title-and-tagline"
            serviceTitle={
              <>
                OlympIA{" "}
                <Badge as="span" noIcon severity="success">
                  Beta
                </Badge>
              </>
            }
        />

        {children}
        <Footer
            accessibility="fully compliant"
            termsLinkProps={{
              href: "#",
            }}
            bottomItems={[headerFooterDisplayItem]}
        />
      </DsfrProvider>
      </body>
      </html>
  );
}
