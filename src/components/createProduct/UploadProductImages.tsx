import {Box, Divider} from "@mantine/core";
import ImageUpload from "../ImageUpload.tsx";
import CreateProductSection from "./CreateProductSection.tsx";

function UploadProductImages() {
    return (
        <Box>
            <CreateProductSection
                title="Summary"
                description="Edit your product description and necessary information from here">
                <ImageUpload></ImageUpload>
            </CreateProductSection>
            <Divider my="sm" variant="dotted"/>
        </Box>);
}

export default UploadProductImages;