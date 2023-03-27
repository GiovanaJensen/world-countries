import styled from 'styled-components';
import {Form} from "./Form";

const HeaderHtml = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2.1875rem 4.625rem;
`;  

export const Header = () => {
    return(
        <HeaderHtml>
            <h1>Countries Wiki</h1>
            <Form />
        </HeaderHtml>
    )
}