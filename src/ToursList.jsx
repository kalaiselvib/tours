import React, { useEffect, useState } from 'react'
import tourban from './assets/img/tourban.jpg';
import styled from 'styled-components';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

function ToursList() {
    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetchTours();
    }, [])
    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);

        }
        catch (error) {
            setLoading(false);
            console.log(error);
        }
    }


    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    return (
        <Container>
            <Banner >
            </Banner>
            <Tours tours={tours} />
        </Container>
    )
}
const Container = styled.div`
   padding:0.5rem 10rem;
`;
const Banner = styled.div`
    background: url(${tourban}) center no-repeat;
    background-size: cover;
    height:40vh;
    overflow: hidden;
    border-radius:1.5rem;
    width:100%;
    margin:0 auto;
`;

export default ToursList