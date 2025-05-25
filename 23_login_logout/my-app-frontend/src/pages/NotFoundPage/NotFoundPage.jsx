import { Link } from "react-router-dom";

import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

const NotFoundPage = () => {
    return (
        <Container>
            <PageTitle>Page not found</PageTitle>
            <Link to="/">To home page</Link>
        </Container>
    )
};

export default NotFoundPage;