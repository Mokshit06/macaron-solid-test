import type { Component } from 'solid-js';
import { style } from '@macaron-css/core';
import { styleTheme } from './theme';

const brandStyle = style({
  color: styleTheme.colors.foreground,
  background: styleTheme.colors.accentOrange,
});

const App: Component = () => {
  return (
    <div class={brandStyle}>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
