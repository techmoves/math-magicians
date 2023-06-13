import React from 'react';
import styled from "styled-components";


function Home() {
  return (
    <div>
      <div className="homepage-wrapper">
        <h1> Welcome to our page!</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          itaque aspernatur eligendi optio a veniam sapiente deserunt totam
          assumenda aut, ab nemo suscipit ratione repudiandae doloremque
          distinctio vitae reiciendis! Dolor sit voluptatem ullam necessitatibus
          ducimus iure voluptates natus ad aspernatur? Quia quae voluptatibus
          neque repellat quos magnam suscipit, corporis fugit.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          itaque aspernatur eligendi optio a veniam sapiente deserunt totam
          assumenda aut, ab nemo suscipit ratione repudiandae doloremque
          distinctio vitae reiciendis! Dolor sit voluptatem ullam necessitatibus
          ducimus iure voluptates natus ad aspernatur? Quia quae voluptatibus
          neque repellat quos magnam suscipit, corporis fugit.
        </p>
      </div>
    </div>
  );
}
export default Home;

const mainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em;
  color:black;
  homepage-wrapper {
    width:50%
  }
`;