import styled from "styled-components"

export const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    h2 {
      text-align: center
    } 
    .container {
      margin-top: 2rem;
      text-align: center;
      .login-form {
        max-width: 50rem;
        margin: auto;
        .login-inputs {
          gap: 3rem;
          input {
            margin: 1rem;
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.button};
              color: ${({ theme }) => theme.colors.button};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `