import styled, { StyleSheetManager } from 'styled-components';

const CarouselWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  direction: ${({ isRTL }) => (isRTL ? 'rtl' : 'ltr')};
`;

export default function CarouselWrapper({ isRTL, children }) {

  return <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isRTL'}>
    <CarouselWrapperDiv isRTL={isRTL}>{children}</CarouselWrapperDiv>
  </StyleSheetManager>
}