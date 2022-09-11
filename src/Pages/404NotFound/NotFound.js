import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';



const NotFoundView = () => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      paddingTop="70px"
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >

          <FormattedMessage id="notfound1" defaultMessage=" 404: La page que vous recherchez n'est pas ici"></FormattedMessage>
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          <FormattedMessage id="notfound2" defaultMessage="Soit vous avez essayé une route louche, soit vous êtes venu ici par erreur. Quoi qu'il en soit, essayez d'utiliser la navigation"></FormattedMessage>

        </Typography>
      </Container>
    </Box>
  );
};

export default NotFoundView;