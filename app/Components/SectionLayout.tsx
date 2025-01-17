import React from "react";
import styled from "styled-components";


interface SectionLayoutProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

const SectionLayoutStyled = styled.section`
  padding: 5rem 10rem;
  @media (max-width: 768px) {
    padding : 3rem 1rem;
  }
  
`;


function SectionLayout({ children, ref }: SectionLayoutProps) {
  return (
    <SectionLayoutStyled>
      <section
        
      >
        {children}
      </section>
     </SectionLayoutStyled>
  );
}

export default SectionLayout;
