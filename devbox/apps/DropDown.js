import React from 'react'
import styled from 'styled-components'
import { IdentityBadge, DropDown, GU, unselectable } from '@aragon/ui'

const items = [
  'Strawberry',
  'Banana',
  'Apple',
  'Cherry',
  <span
    style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
    }}
  >
    <span>Test</span>
    <IdentityBadge entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c" />
  </span>,
]

class App extends React.Component {
  state = { active: -1 }
  handleChange = index => {
    this.setState({ active: index })
  }
  render() {
    const { active } = this.state
    return (
      <Main>
        <Container>
          <DropDown
            items={items}
            placeholder="Which fruit?"
            header="Fruits"
            selected={active}
            onChange={this.handleChange}
            wide
          />
          <DropDown
            items={items}
            placeholder="Which fruit?"
            header="Fruits"
            selected={active}
            onChange={this.handleChange}
            disabled
            wide
            css={`
              margin-top: ${2 * GU}px;
            `}
          />
          <DropDown
            items={items}
            placeholder="Which fruit?"
            selected={active}
            onChange={this.handleChange}
            width="250px"
            placement="right"
            css={`
              margin-top: ${2 * GU}px;
            `}
            shadow
          />
          <DropDown
            items={items}
            placeholder="Which fruit?"
            selected={active}
            onChange={this.handleChange}
            width="250px"
            gap={18}
            css={`
              margin-top: ${2 * GU}px;
            `}
            status={'error'}
            error={'Some Error Message here ....'}
          />
        </Container>
        <NavBar>
          <Title>Some Title</Title>
          <RigtSideContainer>
            <DropDown
              items={items}
              placeholder="Which fruit?"
              header="Fruits"
              selected={active}
              onChange={this.handleChange}
              iconOnly
            />
            <DropDown
              items={items}
              placeholder="Which fruit?"
              header="Fruits"
              selected={active}
              onChange={this.handleChange}
            />
          </RigtSideContainer>
        </NavBar>
      </Main>
    )
  }
}

const Main = styled.div`
  ${unselectable};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
`

const Container = styled.div`
  width: auto;
`

const NavBar = styled.nav`
  display: flex;
  width: 70%;
  flex-direction: row:
  gap: 16px;
  padding: 8px;
`

const Title = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
  align-items: center;
  column-gap: ${GU}px;
`

const RigtSideContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`

export default App
