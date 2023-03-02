import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react';

const Home = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>
        <Header as="h2" inverted content="Welctome to Reactivities" />
        <Button as={Link} to="/activities" size="huge" inverted>
          Take to activities!
        </Button>
      </Container>
    </Segment>
  );
};

export default Home;
