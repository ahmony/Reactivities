import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const { id } = useParams();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    if (id) {
      loadActivity(id);
    }
  }, []);

  if (loadingInitial || !activity) return <LoadingComponent />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            basic
            color="blue"
            as={Link}
            to={`/manage/${activity.id}`}
            content="Edit"
          ></Button>
          <Button
            basic
            color="grey"
            as={Link}
            to="/activities"
            content="Cancel"
          ></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
