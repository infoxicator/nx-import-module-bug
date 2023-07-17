import * as React from 'react';

import NxWelcome from './nx-welcome';

import { importRemote } from '@module-federation/utilities';

import { Link, Route, Routes } from 'react-router-dom';

// const Shop = React.lazy(() => import('shop/Module'));

// const Cart = React.lazy(() => import('cart/Module'));

// Supports both syntaxes, direct import and also importRemote (dynamic remotes)
const About = React.lazy(() => import('about/Module'));

// const About = React.lazy(() =>
//   importRemote({
//     scope: 'about',
//     module: './Module',
//     url: `http://localhost:4203`,
//   })
// );

const Shop = React.lazy(() =>
  importRemote({
    scope: 'shop',
    module: './Module',
    url: `http://localhost:4201`,
  })
);

const Cart = React.lazy(() =>
  importRemote({
    scope: 'cart',
    module: './Module',
    url: `http://localhost:4202`,
  })
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/test">test</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
