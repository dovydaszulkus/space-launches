import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding: 16px;
  }

  > a {
    color: white;
    text-decoration: none;
    font-size: 20px;

    &:hover {
      text-decoration: underline;
    }
  }

  > nav {
    margin-left: auto;

    @media only screen and (max-width: 767px) {
      margin-left: 0;
    }

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      gap: 40px;
      font-size: 16px;
      padding-left: 0;

      @media only screen and (max-width: 767px) {
        align-items: center;
        gap: 0;
        gap: 20px;
      }

      li {
        a {
          text-decoration: none;
          color: white;
        }
      }
    }

    .link-active {
      &:after {
        content: ' ';
        position: relative;
        border-bottom: 2px solid #fff;
        width: 100%;
        display: block;
      }
    }
  }
`

export { HeaderStyled }
