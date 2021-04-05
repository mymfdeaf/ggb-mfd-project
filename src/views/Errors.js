import React from "react";
import { Container } from "shards-react";

import BackButton from "../components/common/BackButton";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>500</h2>
        <h3>Something went wrong!</h3>
        <p>There was a problem on our end. Please try again later.</p>
        <BackButton />
      </div>
    </div>
  </Container>
);

export default Errors;