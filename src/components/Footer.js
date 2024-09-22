import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2024 My Dev Blog. All Rights Reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
