import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Datum, Person, Address, PostInfo, Post } from '@/types'
import { GetStaticProps, NextPage } from 'next'
import { ResponseCookies } from 'next/dist/server/web/spec-extension/cookies'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps = async () => {
  // const [peopleRes, postsRes] = await Promise.all([
  //   fetch('https://fakerapi.it/api/v1/persons?_quantity=10'),
  //   fetch('https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500')
  // ])
  // const responses: (Person | Post)[] = await Promise.all([
  //   peopleRes.json(),
  //   String(postsRes.json())
  // ])
  // console.log(responses)

  // return {
  //   props: {
  //     responses
  //   }
  // }

  const res = await fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
  const peopleData : Person = await res.json()
  

  const res2 = await fetch('https://fakerapi.it/api/v1/texts?_quantity=10&_characters=500')
  const postData : PostInfo = await res2.json()

  return {
    props: {
      peopleData,
      postData
    }
  }
}


const Home: NextPage<{peopleData : Person, postData: PostInfo, responses: Person[] | Post[]}> = ({peopleData, postData, responses}) => {
  return (
    <>
      <Head>
        <title>Social Mockida</title>
        <meta name="description" content="Generated by Faker API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div>
        {responses.map((response) => {
          return (
          <p>{response}</p>
        )})}
      </div> */}
      <ul>
        {peopleData.data.map((person) => {
          return (
            <div key={person.id}>
              <li>{person.firstname} {person.lastname}</li>
              <Image 
                unoptimized
                src={person.image}
                alt={person.firstname}
                width="200"
                height="200"
                />
        {postData.data.map((post) => {
          return (
            <p>{post.content}</p>
            )
          })}
            </div>
          )
        })}
      </ul>

    </>
  )
}

export default Home
