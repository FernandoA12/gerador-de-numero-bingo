import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  header {
    height: 10%;
    padding: 10px;
    color: #778899;
    display: flex;
    align-items: flex-end;
  }
  .container-sorteado {
    height: 15%;
    background-color: #778899;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: white;
    }
  }
  button {
    border: none;
    background-color: #369;
    padding: 20px;
    color: white;
    border-radius: 10px;
    margin: 20px 10px;
    outline: none;
  }
  .container-table {
    width: 100%;
    height: 100vh;
    overflow: auto;
    max-height: 400px;
    table {
      width: 100%;
      border-collapse: collapse;
      th, td {
        border: 1px solid #ccc;
      }
      thead {
        tr {
          th {
            background-color: #369;
            position: sticky;
            top: 0;
            padding: 10px;
            color: white;
          }
        }
      }
      tbody {
        td{
            padding: 10px;
          text-align: center;
        }
      }
    }
  }
`
