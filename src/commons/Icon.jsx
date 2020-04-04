import React from 'react';

import styled from 'styled-components';
export const Icon= ({src,alt}) => {
    return (

        <Container>
            <img src={src} alt={alt}/>
        </Container>
    )
}

const Container = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  text-align: center;
  line-height: 30px;
  margin: -8px 0;
img {
    width: 50%;

}
`