import { useRef } from "react";
import { Category, Product } from "../../App";
import { Container, Title, CheckBox, NameProduct, Box } from "./styles";

interface FilterProps {
  categories: Category[];
  onCategoryFilterChange: (categories: string[]) => void;
}

export default function Filter(props: FilterProps) {
  const selectedCategories = useRef<string[]>([]);

  function onCategoryTaggle(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.checked){
      selectedCategories.current.push(e.target.value)
    }else {
      selectedCategories.current = selectedCategories.current.filter(c => c!== e.target.value)
    }
    console.log('sl', selectedCategories.current)
    props.onCategoryFilterChange(selectedCategories.current)
  }

return (
  <Container onChange={onCategoryTaggle}>
    <Title>Filtros</Title>
    {props.categories.map((filter) => (
      <CheckBox key={filter._id}>
        <Box>
          <input type="checkbox" id="check" value={filter._id} name='filter' />
          <NameProduct htmlFor="check">{filter.name}</NameProduct>
        </Box>
      </CheckBox>
    ))}

  </Container>
);
}