import ProductSummary from "../components/createProduct/ProductSummary.tsx";
import UploadProductImages from "../components/createProduct/UploadProductImages.tsx";
import Pricing from "../components/createProduct/Pricing.tsx";
import InventoryTracking from "../components/createProduct/InventoryTracking.tsx";
import Availability from "../components/createProduct/Availability.tsx";
import {Divider} from "@mantine/core";
import ProductIdentifiers from "../components/createProduct/ProductIdentifiers.tsx";

function CreateProductPage() {
    return (<div>
        <ProductSummary></ProductSummary>
        <UploadProductImages></UploadProductImages>
        <Pricing></Pricing>
        <InventoryTracking></InventoryTracking>
        <Availability></Availability>
        <Divider my="sm" variant="dotted"/>
        <ProductIdentifiers></ProductIdentifiers>
    </div>);
}

export default CreateProductPage;