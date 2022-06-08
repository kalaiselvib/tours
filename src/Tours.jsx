import React from 'react'
import Tour from './Tour';
import styled from 'styled-components';
const Tours = ({ tours }) => {
    return (
        <Grid>
            {tours.map((tour) => {
                return (
                    <Tour key={tour.id} {...tour}>
                    </Tour>
                );
            })}
        </Grid>
    )
}
const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit , minmax(20rem, 1fr));
    grid-gap:2rem;
    justify-content:center;
    align-items:center;
      margin:3rem 0rem;
`;
export default Tours