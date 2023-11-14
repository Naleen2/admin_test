import {Divider, Grid, Select, SimpleGrid, Textarea, TextInput, Title} from "@mantine/core";
import ProductSummary from "../components/createProduct/ProductSummary.tsx";
import UploadProductImages from "../components/createProduct/UploadProductImages.tsx";

function CreateProductPage() {
    return (<div>
        <ProductSummary></ProductSummary>
        <UploadProductImages></UploadProductImages>
    </div>);
}

export default CreateProductPage;