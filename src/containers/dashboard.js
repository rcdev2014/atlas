import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Checkbox, Table, Grid, Segment } from 'semantic-ui-react'

import { fetchUsers } from '../redux/user/userActions'
import { users } from '../lib/userData'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import CommonButton from '../common/CommonButton'

const Dashboard = () => {
  const dispatch = useDispatch()

  dispatch(fetchUsers())
  return (
    <Container>
      <Header></Header>
      <Sidebar></Sidebar>
      <Grid className="dashboard-content">
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment className="custom-heading">
              <div className="text">Accounts</div>
              <CommonButton
                type="button"
                btnText="Add New Account"
                className="btn-green"
              />
            </Segment>
          </Grid.Column>

          <Grid.Column width={16}>
            <Table className="custom-table">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Organization</Table.HeaderCell>
                  <Table.HeaderCell>Contact</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Created</Table.HeaderCell>
                  <Table.HeaderCell>Active</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {users.map((user, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{user.organization}</Table.Cell>
                    <Table.Cell>{user.contact}</Table.Cell>
                    <Table.Cell>{user.phone}</Table.Cell>
                    <Table.Cell>
                      <a href="mailto:jane@gmail.com">{user.email}</a>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </Table.Cell>
                    <Table.Cell>{user.created}</Table.Cell>
                    <Table.Cell>
                      <Checkbox checked={user.active} toggle />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Dashboard
