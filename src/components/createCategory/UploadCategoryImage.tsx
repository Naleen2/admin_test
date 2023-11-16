import {Box} from "@mantine/core";
import CreateProductSection from "../createProduct/CreateProductSection.tsx";
import ImageUpload from "../core/ImageUpload.tsx";

function UploadCategoryImage() {
    return (
        <Box>
            <CreateProductSection
                title="Upload new product images"
                description="Upload your product image gallery here">
                <ImageUpload></ImageUpload>
            </CreateProductSection>
        </Box>);
}

export default UploadCategoryImage;