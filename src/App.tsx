import Card from "./components/Card";
import Header from "./components/Header";
import Filter from "./components/Filter";
import useFilter from "./hooks/useFilter";
import productsJson from './products.json';

import { CardsContainer, Container, ContainerFilterAndProducts } from "./styles";

export type Image = { 
  alt: string;
  asset: { url: string } 
};

export type Category = { 
  _id: string; name: string 
};

export type Product = {
  id: string;
  name: string;
  images: Image[];
  category: Category;
  shortDescription: string;
};

export type ProductsJson = {
  nodes: Product[]
};

function App() {
  const filter = useFilter(productsJson.data.nodes)

  return (
    <Container>
      <Header onFilterTextChange={filter.onFilterByText}/>
        <ContainerFilterAndProducts>
        <Filter categories={filter.categories} onCategoryFilterChange={filter.onFilterByCategories}/>

          <CardsContainer>
            {filter.filteredProducts.map((ani) => {
              return (
                <Card key={ani.id}
                  images={ani.images}
                  name={ani.name}
                  shortDescription={ani.shortDescription}
                />
              );
            })}
          </CardsContainer>
        </ContainerFilterAndProducts>
    </Container>
  );
}

export default App;
