import styled from "styled-components";

export const Heading = styled.h1<{
  fontSize: number;
  padding: string;
  align: string;
}>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
`;
