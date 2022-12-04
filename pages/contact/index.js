import { ContactForm } from "../../components/contactForm/ContactForm";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Hero } from "../../components/hero/Hero";
import Head from "next/head";
import { useEffect } from "react";

export default function Contact() {
  const buttonOptions = {
    bg: 'var(--blue)',
    hoverColor: 'var(--primary-clr)',
    url: '/contact'
  }

  useEffect( () => {
    function changeBodyBg() {
      document.body.style.backgroundColor = 'white' 
    }
    changeBodyBg()
  }, [])

  return(
    <div>
      <Head>
        <title>Ithaca Veterinary Specialists | Contact </title>
      </Head>
      <Header/>
      <Hero title='Contact' subHeading='Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
        imageUrl='/images/happy-shiba-dog.jpg' backgroundPos='center' buttonOptions={buttonOptions}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
