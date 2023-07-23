import Body from '../components/Body'


export default async function Home() {
  return (
        <Body props={'http://localhost:3000/api/important'}/>
  )
}