import Head from 'next/head';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import styles from './Team.module.css'
import { Hero } from '../../components/hero/Hero'
import { Member } from '../../components/member/Member'

export default function Team() {
  const buttonOptions = {
    bg: 'var(--blue)',
    hoverColor: 'var(--primary-clr)',
    url: '/contact'
  }

  return(
    <>
      <Head>
        <title>Ithaca Veterinary Specialists | Team </title> 
      </Head>
      <Header/>
        <Hero title='Our Team' subHeading='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
        imageUrl='/images/ithaca-staff-page-dog.jpg' backgroundPos='center' buttonOptions={buttonOptions}/>  
        <Member/>
      <Footer/>
    </>
  )
}
