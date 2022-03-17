import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 5vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`
export const ColumnFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
export const RowFlexContainer = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
`
export const ScoreRowFlexContainer = styled(RowFlexContainer)`
  width: 100%;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 6px;
  padding: 0 15px;
`

export const ListColumnFlexContainer = styled(ColumnFlexContainer)`
  list-style-type: none;
`

export const ListItem = styled.li`
  color: #ffffff;
  font-size: 32px;
  width: 140px;
  line-height: 1.5;
`

export const ScoreColumnFlexContainer = styled(ColumnFlexContainer)`
  background-color: #ffffff;
  height: 150px;
  width: 180px;
  gap: 10px;
  border-radius: 6px;
`

export const Score = styled.h1`
  color: #223a5f;
  font-size: 42px;
  margin-top: 15px;
`

export const ScoreValue = styled(Score)`
  font-size: 52px;
  font-family: 'Roboto';
`

export const ImagesRowcontainer = styled(RowFlexContainer)`
  justify-content: center;
  flex-wrap: wrap;
`

export const ImageButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: transparent;
`

export const RulesContainer = styled.div`
  justify-self: flex-end;
  align-self: flex-end;
`

export const RulesButton = styled.button`
  font-size: 25px;
  padding: 12px 17px;
  color: #223a5f;
  background-color: #ffffff;
  outline: none;
  border: none;
  border-radius: 7px;
`

export const RulesRowFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 40px;
  height: 90vh;
  width: 80vw;
`

export const CloseButton = styled(RulesButton)`
  background-color: #ffffff65;
  align-self: flex-start;
  height: 52px;
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Result = styled(ListItem)`
  width: 300px;
  text-align: center;
`
