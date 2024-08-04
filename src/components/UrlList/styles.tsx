import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; 
  background-color: #f9f9f9; 
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  max-width: 600px; 
  margin: 0 auto; 
`

export const ListItemContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 15px 20px; 
  margin: 10px 0; 
  background-color: #fff; 
  border-radius: 5px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }

  p {
    margin: 0;
    font-weight: bold; 
    color: #333; 
    margin-right: 10px; 
  }

  a {
    text-decoration: none; 
    color: #007bff; 
    overflow-wrap: anywhere; 
    transition: color 0.2s ease;

    &:hover {
      color: #0056b3;
    }
  }
`