import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Inspector from 'redux-devtools-inspector';
import SliderMonitor from 'redux-slider-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
    changeMonitorKey="ctrl-m"
    defaultSize={0.5}
  >
    <LogMonitor />
    <Inspector />
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
);
