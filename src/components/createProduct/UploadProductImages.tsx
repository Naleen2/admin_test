import {Box, Divider} from "@mantine/core";
import ImageUpload from "../ImageUpload.tsx";
import CreateProductSection from "./CreateProductSection.tsx";

function UploadProductImages() {
    return (
        <Box>
            <CreateProductSection
                title="Upload new product images"
                description="Upload your product image gallery here">
                <ImageUpload></ImageUpload>
            </CreateProductSection>
            <Divider my="sm" variant="dotted"/>
        </Box>);
}

export default UploadProductImages;