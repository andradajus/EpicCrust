import HeroMain from "./HeroMain"
import HeroSecondaryLeft from "./HeroSecondaryLeft"
import HomeLayout from "./layout"
import HeroInfo from "./HeroInfo"

const Home = () => {
  return (
    <>
      <HomeLayout>
        <HeroMain />
        <HeroSecondaryLeft />
        <HeroInfo />
      </HomeLayout>
    </>
  )
}

export default Home
