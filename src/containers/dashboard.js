import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import Accounts from '../components/dashboard/Accounts'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  const dahsboardActiveMenu = useSelector(
    state => state.user.dashboardActiveMenu
  )

  const dashboardComponents = {
    accounts: Accounts
  }

  const ActiveComponent = dashboardComponents[dahsboardActiveMenu]

  return (
    <Container>
      <Header />
      <Sidebar />
      <Grid className="dashboard-content">
        <ActiveComponent active={dahsboardActiveMenu} />
      </Grid>
    </Container>
  )
}

export default Dashboard
