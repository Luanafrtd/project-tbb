import { Image } from "../../App";
import { Container, Name, ShortDescription, Images } from "./styles";

interface CardProps {
  name: string;
  shortDescription: string;
  images: Image[];
}

export default function Card(props: CardProps) {
    return(
      <Container>
        <Images alt={props.images[0].alt} src={props.images[0].asset.url}/>
        
        <div>
          <Name>{props.name}</Name>
          <ShortDescription>{props.shortDescription}</ShortDescription>
        </div>
      </Container>
    );
}