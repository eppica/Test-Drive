import React from 'react';
import Navigation from './navigation';
import { startConfigurations } from './utils/async';

export default function App() {
  startConfigurations();
  return <Navigation />;
}
