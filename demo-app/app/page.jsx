"use client";

import { Button, Center, Container, Group, Table, Title } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";

// TODO 1: Import Immutable SDK
// TODO 8: Import ethers

export default function Home() {
  const [passportInstance, setPassportInstance] = useState();
  const [passportProvider, setPassportProvider] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [accessToken, setAccessToken] = useState();
  const [idToken, setIdToken] = useState();

  useEffect(() => {
    // TODO 2: Instantiate Passport instance
    // TODO 4: Configure login callback
  }, []);

  const login = useCallback(async () => {
    if (passportProvider && passportInstance) {
      // TODO 3: Log in user
      // TODO 5: Get user info
      // TODO 6: Get user JWT
    }
  }, [passportInstance, passportProvider]);

  useEffect(() => {
    login();
  }, [login]);

  const logout = useCallback(async () => {
    // TODO 7: Log out user
  }, [passportInstance]);

  const transact = useCallback(async () => {
    // TODO 9: Initiate a Transaction From Passport
  }, [passportProvider]);

  return (
    <main>
      <Container h="100%" maw="65rem">
        <Group justify="center" p="xl">
          <Button type="button" onClick={login}>
            Login
          </Button>
          <Button type="button" onClick={logout}>
            Logout
          </Button>
        </Group>

        {/* Display user info */}
        <Title style={{ textAlign: "center" }}>User Info</Title>
        <Table maw="30rem" mx="auto" mb="xl">
          <Table.Tbody>
            <Table.Tr key="email">
              <Table.Td>Email</Table.Td>
              <Table.Td>{userInfo.email}</Table.Td>
            </Table.Tr>
            <Table.Tr key="sub">
              <Table.Td>Sub</Table.Td>
              <Table.Td>{userInfo.sub}</Table.Td>
            </Table.Tr>
            <Table.Tr key="nickname">
              <Table.Td>Nickname</Table.Td>
              <Table.Td>{userInfo.nickname}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>

        {/* Display user JWT */}
        <Title style={{ textAlign: "center" }}>User JWT</Title>
        <Table mx="auto" mb="xl">
          <Table.Tbody>
            <Table.Tr key="accessToken">
              <Table.Td>Access Token</Table.Td>
              <Table.Td style={{ wordBreak: "break-all" }}>
                {accessToken}
              </Table.Td>
            </Table.Tr>
            <Table.Tr key="idToken">
              <Table.Td>ID Token</Table.Td>
              <Table.Td style={{ wordBreak: "break-all" }}>{idToken}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Container>

      {/* Initiate a transaction */}
      <Center>
        <Button type="button" onClick={transact}>
          Initiate a transaction
        </Button>
      </Center>
    </main>
  );
}
