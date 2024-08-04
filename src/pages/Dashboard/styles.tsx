import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem; 
  font-family: 'Georgia', serif; 
  color: #333; 
  margin-bottom: 20px; 
  text-align: center; 
  padding-bottom: 10px; 
  max-width: 80%; 
  margin: 0 auto 20px; 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 80%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`


export const Button = styled.button`
  margin-bottom: 1.5rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

export const Text = styled.p`
  margin: 1rem 0;
  color: #333;
  text-align: center;

  &.error {
    color: #d8000c;
    background-color: #ffbaba;
    border: 1px solid #d8000c;
    border-radius: 5px;
    padding: 0.5rem;
    width: 80%;
    margin: 0.5rem auto;
    text-align: left;
  }

  &.success {
      color: green;
    }

`

export const ResultContainer = styled.div`
    margin-top: 1.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #e6f7ff;
    color: #0056b3;
    text-align: left;
    width: 80%;
    margin: 0 auto;

    p {
      margin: 0.5rem 0;
      font-weight: bold;
      word-wrap: break-word;
    }
`
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