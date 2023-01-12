import styled from "styled-components";

export const LoginWrapper = styled.div`
  width:60%;
  height:100vh;
  margin:0 auto;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;

  .login-page {

    &__title {
      color:#70F338;
      font-size:42px;
      font-weight:900;
      text-align:center;
      text-shadow: 0px 7px 7px rgba(0,0,0,.6);
    }

    &__form {
      width:30%;
      padding:20px 5%;
      border-radius:5px;
      margin:0 auto;
      background:rgba(0,0,0,.7);
      box-shadow: rgba(50, 50, 93, .25) 0px 50px 100px -20px, rgba(0, 0, 0, .3) 0px 30px 60px -30px, rgba(10, 37, 64, .35) 0px -2px 6px 0px inset;

      div {  margin-bottom:15px }

      input {
        width:96%;
        padding:10px 2%;
        border:1px solid #000;
        border-radius:4px;

        &[type=submit] {
          width:40%;
          border:1px solid #70F338;
          margin:0 auto;
          background: #70F338;
          color:#fff;
          cursor:pointer;
          font-size:16px;
          font-weight:900;
          text-transform:capitalize;

          &:focus {
            outline:none;
          }

          @media only screen and (min-width: 1024px) {
            &:hover { 
              background:#fff;
              color:#70F338;
             }
          }
        }

        &:focus {
          border:1px solid #70F338;
          outline:none;
        }

        &::placeholder { text-transform:capitalize }

        &.err { border:1px solid #f00 }
      }
    }
  }

  .error {
    color:#F71B05  ;
    &:first-letter { text-transform:capitalize }
  }
`;