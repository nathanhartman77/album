// Import a library to help create a compponent
import React from 'react';
import { AppRegistry, } from 'react-native';
import Header from './src/components/Header';

// Create a component
const App = () => (
    <Header />
);

// Render it to the device
AppRegistry.registerComponent('album', () => App);
