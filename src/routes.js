import React from 'react';
import Navbar from './Components/Navbar';
import FormClient from './Components/Form.Client';
import FormRevendeur from './Components/Form.Revendeur';
import FormContact from './Components/Form.Contact';
import NotFoundView from './Components/NotFoundView';

const routes = [
    {
      path: '/',
      element: <Navbar />,
      children: [
        { path: 'client', element: <FormClient /> },
        { path: 'revendeur', element: <FormRevendeur /> },
        { path: 'contact', element: <FormContact /> },
        { path: '*', element: <NotFoundView /> }
      ]
    }
]

export default routes;