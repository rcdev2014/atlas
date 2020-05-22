import React from 'react'
import { useSelector } from 'react-redux'
import { Checkbox, Table, Grid, Segment } from 'semantic-ui-react'

import CommonButton from '../../common/CommonButton'
import CommonInput from '../../common/CommonInput'

const Accounts = () => {
  const users = useSelector(state => state.user.users)

  return (
    <>
      <Grid.Row className="accounts">
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

        <Grid.Column className="search-wrapper" width={16}>
          <CommonInput icon="search" placeholder="Search" />
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
                  <Table.Cell>{user.company.name}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.phone}</Table.Cell>
                  <Table.Cell>
                    <a href="mailto:jane@gmail.com">{user.email}</a>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </Table.Cell>
                  <Table.Cell>11/09/08</Table.Cell>
                  <Table.Cell>
                    <Checkbox checked toggle />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </>
  )
}

export default Accounts
