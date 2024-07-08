'use client';

import { Footer } from "@codegouvfr/react-dsfr/Footer";

import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";

const  FooterOlympia = () => 
    <Footer
accessibility="fully compliant"
termsLinkProps={{
  href: "#",
}}
bottomItems={[headerFooterDisplayItem]}
/>

export { FooterOlympia }