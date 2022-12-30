import React from 'react';
import { CreateEventButton } from './CreateEventButton';
import {SmallCalender} from './SmallCalender';
import { Labels } from './Labels';
export function Sidebar() {
  return (
    <aside>
      <SmallCalender/>
      <Labels/>
    </aside>
  );
}