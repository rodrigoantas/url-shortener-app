import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
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