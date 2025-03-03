import { OffersCarousel,CategoriesCarousel } from "../../components";
import { Banner, Content,Container } from "./style";

 export function Home() {

  return (
    <main>
      <Banner>
             <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
      <Content>
      <CategoriesCarousel />
      <OffersCarousel/>
      </Content>
      </Container>
  
    </main>
  );
}

export default Home;
