import {Button, NavLink} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {AppShell, Burger} from '@mantine/core';
import {useProductSelector} from "../store/hooks.ts";
import Products from "./Products.tsx";
import {IconHome2} from '@tabler/icons-react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Categories from "./Categories.tsx";


function MyApp() {
    const [opened, {toggle}] = useDisclosure();

    const products = useProductSelector((state) => state.product.products);

    return (
        <Router>
            <AppShell
                header={{height: 60}}
                navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
                padding="md"
            >
                <AppShell.Header>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                    <div>Logo</div>
                    <Button variant='filled'>HEADER</Button>

                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <NavLink label="Products" component={Link} to="/products"
                             leftSection={<IconHome2 size="1rem" stroke={1.5}/>}/>
                    <NavLink label="Categories" component={Link} to="/categories"
                             leftSection={<IconHome2 size="1rem" stroke={1.5}/>}/>
                </AppShell.Navbar>

                <AppShell.Main>
                    <Routes>
                        <Route path="/products" element={<Products products={products}></Products>}></Route>
                        <Route path="/categories" element={<Categories></Categories>}></Route>
                    </Routes>
                </AppShell.Main>
            </AppShell>
        </Router>
    );
}

export default MyApp;