import styled from 'styled-components';

export const Container = styled.div`
  width: 250px; 
  height: 350px;
  padding-top: 22px;
  border-radius: 6px;
  padding-left: 26px;
  padding-right: 26px;
  margin-bottom: 26px;
  0px 4.3px 8.6px -2.15px rgba(0, 0, 0, 0.06);
  box-shadow: 5px 5px 12.9px -2.15px rgba(0, 0, 0, 0.1),
`;

export const Title = styled.p`

`;

export const Images = styled.img`
  width: 120px;
  height: 150px;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
`;

export const Name = styled.p`
`;

export const ShortDescription = styled.p`
  color: #616161;
  max-width: 50ch;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;