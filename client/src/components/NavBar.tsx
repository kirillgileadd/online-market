import React, {FC, useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import MyNavLink from "./UI/MyNavLink";
import {Context, ContextInterface} from "../index";
import {RouteName} from "../routes";
import {observer} from "mobx-react-lite";

const NavBar: FC = observer(() => {
    const {user} = useContext(Context) as ContextInterface
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <MyNavLink to={RouteName.SHOP}>
                        <Navbar.Brand>Online Market!</Navbar.Brand>
                    </MyNavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto">
                            <Button variant={"outline-light"}>Admin Panel</Button>
                            <Button className="mx-2" variant={"outline-light"} onClick={() => user.setIsAuth(false)}>Logout</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Login</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    );
});

export default NavBar;