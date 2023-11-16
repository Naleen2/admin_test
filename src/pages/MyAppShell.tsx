import {AppShell, Button, NavLink, SimpleGrid} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {useProductSelector} from "../store/hooks.ts";
import Products from "./Products.tsx";
import {IconBrandProducthunt, IconCategory} from '@tabler/icons-react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Categories from "./Categories.tsx";
import CreateProductPage from "./CreateProductPage.tsx";


function MyApp() {
    const [opened, {toggle}] = useDisclosure();

    const products = useProductSelector((state) => state.product.products);

    return (
        <Router>
            <AppShell
                header={{height: 212}}
                navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
                padding="lg"
            >
                <AppShell.Header>
                    <SimpleGrid cols={1} spacing={140}>
                        <Button variant="outline">LOGO</Button>
                    </SimpleGrid>
                </AppShell.Header>
                <AppShell.Navbar p="md">
                    <NavLink label="Products" component={Link} to="/products"
                             leftSection={<IconBrandProducthunt size="1rem" stroke={1.5}/>}/>
                    <NavLink label="Categories" component={Link} to="/categories"
                             leftSection={<IconCategory size="1rem" stroke={1.5}/>}/>
                    <NavLink label="Create Product" component={Link} to="/createProduct"
                             leftSection={<IconCategory size="1rem" stroke={1.5}/>}/>
                </AppShell.Navbar>

                <AppShell.Main>
                    <Routes>
                        <Route path="/products" element={<Products products={products}></Products>}></Route>
                        <Route path="/categories" element={<Categories></Categories>}></Route>
                        <Route path="/createProduct" element={<CreateProductPage></CreateProductPage>}></Route>
                    </Routes>

                </AppShell.Main>
            </AppShell>
        </Router>
    );
}

export default MyApp;