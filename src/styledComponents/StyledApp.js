import styled from "styled-components";

const StyledApp = styled.div`
  .modal {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .errMsg {
    font-weight: bolder;
    color: #df4759;
  }

  .header-box {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .center {
    text-align: center;
  }

  .container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .button-box {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .add {
    color: green;
  }
`;
export default StyledApp;
