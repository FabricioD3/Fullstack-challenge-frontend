
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    text-align: center;
`;

export const Title = styled.h2`
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 30px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TableWrapper = styled.div`
    flex: 1;
    padding-right: 20px;

`;


export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    max-width: 700px;
    margin: 0 auto;
`;

export const Thead = styled.thead`
    background-color: #f8f9fa;
`;

export const Th = styled.th`
    padding: 10px;
    border: 1px solid #dee2e6;
    text-align: left;
`;

export const Td = styled.td`
    padding: 10px;
    border: 1px solid #dee2e6;
`;