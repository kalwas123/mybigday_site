import React from "react"
import styled from "styled-components"
import { ContextProviderComponent } from "src/layouts/Contex.js"
import MainFooter from "src/components/MainFooter/MainFooter.js"
import GlobalStyle from "src/assets/styles/globalStyles"

const MainWrap = styled.div`
  position: relative;
`

const MainLayout = ({ children }) => (
  <MainWrap>
    <ContextProviderComponent>
      <GlobalStyle />

      {children}
      <MainFooter />
    </ContextProviderComponent>
  </MainWrap>
)

export default MainLayout
