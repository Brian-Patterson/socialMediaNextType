import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Person } from "@/types"
import Navbar from "@/components/navbar"
import CurrentDate from "@/components/date"
import Image from "next/image"
import personStyles from '../styles/person.module.css'

export async function  getStaticPaths() {
    const res = await fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
    const peopleData : Person = await res.json()

    return {
      paths: peopleData.data.map((person) => {
        return {params: {id: String(person.id)}}
      }),
      fallback: false
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("https://fakerapi.it/api/v1/persons?_quantity=1")
    const personData: Person = await res.json()

    return {
        props: {
          personData,
        }
      }
}

const Page: NextPage<{personData: Person}> = ({personData}) => {
    return (
        <div>
            {personData.data.map((person) => {
                return (
                    <div>
                        <Navbar />
                        <Image
                  className='content-image' 
                  unoptimized
                  src={person.image}
                  alt={person.firstname}
                  width="50"
                  height="50"
                />
                <section className='content-heading'>
                  <h5 className='content-name'>{person.firstname} {person.lastname} </h5>
                  <CurrentDate />
                </section>
                    </div>
                )
            })}
  
        </div>
    )
}

export default Page