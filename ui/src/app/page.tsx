// Styling
import './globals.css'

// Components
import HeaderOlympia from  "../components/HeaderOlympia"
import { FooterOlympia } from  "../components/FooterOlympia"


export default function Page() {

    return (
        <>
        <div className='container-colonne'>
          <HeaderOlympia />
          <div className='mid-container-margin'>
            Bienvenue sur Olympia!
          </div>
          <div className='footer-margin' >
          <FooterOlympia />
          </div>
        </div>
        </>
    );

}
