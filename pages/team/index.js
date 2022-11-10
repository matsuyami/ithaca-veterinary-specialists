import Head from 'next/head';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import styles from './Team.module.css'
import { Hero } from '../../components/hero/Hero'
import { Member } from '../../components/member/Member'
import { fetchMembers } from '../../utils/fetchMembers';

export default function Team(){
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
        imageUrl='/images/ithaca-staff-page-dog.webp' backgroundPos='center' buttonOptions={buttonOptions}/>  
        {/* {memberData && memberData.map(data => (
          <Member key={data._id} memberData={data}/>
        ))
        } */}
        <Footer/>
    </>
  )
}

export async function getStaticProps() {
  // const members = await fetchMembers()
  // return {
  //   props: {
  //     memberData: members
  //   }
  // }
  return {
    props: {

    }
  }
}
