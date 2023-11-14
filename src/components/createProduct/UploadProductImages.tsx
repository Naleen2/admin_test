import {Container, Divider, Grid} from "@mantine/core";
import CreateProductPageDescription from "./CreateProductPageDescription.tsx";
import ImageUpload from "../ImageUpload.tsx";

function UploadProductImages() {
    return (
        <Container >
            <Grid mih={120} pt={30}>
                <CreateProductPageDescription name="Upload new product images"
                                              description="Upload your product image gallery here"></CreateProductPageDescription>
                <Grid.Col span={8}>
                    <ImageUpload></ImageUpload>
                </Grid.Col>
            </Grid>
            <Divider my="sm" variant="dotted"/>
        </Container>)


}

export default UploadProductImages;