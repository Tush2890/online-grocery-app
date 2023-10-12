import styled from "styled-components";

const Container = styled.div`
    padding: 10rem;
`;

const Header = styled.h1`
    font-size: 11rem;
`;

const Para = styled.p`
    font-size: 1.5rem;
    text-align: left;
    font-family: Open sans-serif;
`;

const Span = styled.span`
    font-size: 1rem;
`;

const ClickableLink = styled.a`
    text-decoration: none
`;

export default function NotFound() {
    return (
        <Container>
            <div className="d-flex">
                <img
                    src={`${process.env.PUBLIC_URL}/page-not-found.png`}
                    alt='page-not-found'
                    width={600} height={500} />
                <div className="d-flex flex-column mt-5 ps-5">
                    <Header>404</Header>
                    <Para>Aha! You see! You can be wrong!<br /><Span>(or it could be us)</Span></Para>
                    <Para>...either way, you should probably<br /><ClickableLink href={'/'}>go back to the homepage </ClickableLink></Para>
                </div>
            </div>
        </Container>
    )
}