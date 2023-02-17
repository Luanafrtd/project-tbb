import { Container, Title, Search, Button } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from '@chakra-ui/react'

interface HeaderProps {
  onFilterTextChange: (text: string) => void; 
}

export default function Header(props: HeaderProps) {

  function onInputChange (e: React.ChangeEvent<HTMLInputElement>) {
    props.onFilterTextChange(e.target.value)
  }

    return(
      <Container>
        <Title>
           O QUE VOCÊ ESTÁ PROCURANDO?
        </Title>

        <Search>
          <Input placeholder='BUSQUE AQUI' size='md' border='none' cursor='pointer' width='700px' outline='none' onChange={onInputChange}/>
          <Button><AiOutlineSearch color="gray" size='22px'/></Button>
        </Search>
      </Container>
    );
}