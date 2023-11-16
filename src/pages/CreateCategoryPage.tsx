import {Box, Divider} from "@mantine/core";
import AddCategory from "../components/createCategory/AddCategory.tsx";
import UploadCategoryImage from "../components/createCategory/UploadCategoryImage.tsx";

function CreateCategoryPage() {
    return (
        <Box>
            <AddCategory></AddCategory>
            <Divider my="sm" variant="dotted"/>
            <UploadCategoryImage></UploadCategoryImage>
        </Box>
    );
}

export default CreateCategoryPage;