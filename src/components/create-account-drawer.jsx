'use client';

import React from 'react';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer';

const CreateAccountDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Test</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateAccountDrawer;
