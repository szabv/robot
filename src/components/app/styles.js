import styled from "styled-components";

const AppContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
  min-width: 450px;
`
const Title = styled('h1')`
  margin: 10px 0;
`

const Instructions = styled('p')`
  padding: 4px;
  min-Width: 450px;
  max-width: 800px;
  text-align: center;
  font-size: 1.3em;
  margin: 10px 0;
`
export {
  AppContainer,
  Title,
  Instructions
}