import threekit from '../../threekit';

const { SingleProduct, Ordinal } = threekit.experiences;

export default {
  'single-product': {
    id: 'single-product',
    title: 'Single Product',
    description: 'A simple look for a simple configurator.',
    Component: SingleProduct,
  },
  'single-product-stepped': {
    id: 'single-product-stepped',
    title: 'Single Product Stepped',
    description: 'A step by step configurator.',
    Component: SingleProduct,
  },
  'single-product-interactive': {
    id: 'single-product-interactive',
    title: 'Single Product + Interactive',
    description: 'A seamless and organic 3D and UI experience.',
    Component: SingleProduct,
  },
  'single-product-animated': {
    id: 'single-product-aniamted',
    title: 'Single Product + Animated',
    description: 'Minimalist animations for a minimalist configurator.',
    Component: SingleProduct,
  },
  'ordinal-interactive': {
    id: 'ordinal-interactive',
    title: 'Ordinal + Interactive',
    description: 'A drag-n-drop configurator for an Ordinal Configurator',
    Component: Ordinal,
  },
};
