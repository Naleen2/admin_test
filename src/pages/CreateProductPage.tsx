import ProductSummary from "../components/createProduct/ProductSummary.tsx";
import UploadProductImages from "../components/createProduct/UploadProductImages.tsx";
import Pricing from "../components/createProduct/Pricing.tsx";
import InventoryTracking from "../components/createProduct/InventoryTracking.tsx";
import Availability from "../components/createProduct/Availability.tsx";
import {Affix, Divider, Tabs} from "@mantine/core";
import ProductIdentifiers from "../components/createProduct/ProductIdentifiers.tsx";
import Shipping from "../components/createProduct/Shipping.tsx";

function CreateProductPage() {
    return (<div>
        <Affix position={{top: 176, left: 300}}>
            <Tabs defaultValue="first">
                <Tabs.List>
                    <Tabs.Tab value="summary">Summary</Tabs.Tab>
                    <Tabs.Tab value="images">Images & Gallery</Tabs.Tab>
                    <Tabs.Tab value="pricing">Pricing & Inventory</Tabs.Tab>
                    <Tabs.Tab value="productIdentifiers">Product Identifiers &
                        Custom Fields</Tabs.Tab>
                    <Tabs.Tab value="shipping">Shipping</Tabs.Tab>
                    <Tabs.Tab value="seo">SEO</Tabs.Tab>
                    <Tabs.Tab value="variants">Variant Options</Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </Affix>


        <ProductSummary></ProductSummary>
        <Divider my="sm" variant="dotted"/>
        <UploadProductImages></UploadProductImages>
        <Divider my="sm" variant="dotted"/>
        <Pricing></Pricing>
        <InventoryTracking></InventoryTracking>
        <Availability></Availability>
        <Divider my="sm" variant="dotted"/>
        <ProductIdentifiers></ProductIdentifiers>
        <Divider my="sm" variant="dotted"/>
        <Shipping></Shipping>
        <Divider my="sm" variant="dotted"/>
    </div>);
}

export default CreateProductPage;