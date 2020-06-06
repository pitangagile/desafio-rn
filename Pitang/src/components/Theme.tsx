import React from 'react';
import styled from 'styled-components/native';

type Props = {
    children: React.ReactNode;
};

const Theme: React.FC<Props> = ({ children }) => {
    return <Background>{children}</Background>;
};

const Background = styled.View`
    background: #1d1d28;
    flex: 1;
`;

export default Theme;
