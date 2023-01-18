import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Person } from "@/types"
import Navbar from "@/components/navbar"

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
                        {person.firstname}
                    </div>
                )
            })}
  
        </div>
    )
}

export default Page