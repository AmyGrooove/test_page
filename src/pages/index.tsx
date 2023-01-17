import Header from '@/components/Header'
import Recomendation from '@/components/Recomendation'
import Form from '@/components/Form'

const Home = () => {
  return (
    <>
      <div className="backSide">
        <Header />
        <Recomendation />
      </div>
      <Form />
    </>
  )
}

export default Home
