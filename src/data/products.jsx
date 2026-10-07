export const products = [
  {
    id: 'coke-classic',
    name: 'Coca-Cola Classic',
    priceCents: 250,
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    description: 'The original taste of Coca-Cola.',
    volume: '355 mL (12 fl oz)',
    color: '#F40009'
  },
  {
    id: 'diet-coke',
    name: 'Diet Coke',
    priceCents: 225,
    category: 'Diet',
    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22460%22%20viewBox%3D%220%200%20600%20460%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22body%22%3E%3Cstop%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%22.35%22%20stop-color%3D%22%23ddd%22%2F%3E%3Cstop%20offset%3D%22.65%22%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23222%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22460%22%20fill%3D%22%231f1f23%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%22400%22%20rx%3D%2295%22%20ry%3D%2214%22%20fill%3D%22%23080809%22%2F%3E%3Crect%20x%3D%22228%22%20y%3D%2265%22%20width%3D%22144%22%20height%3D%22320%22%20rx%3D%2228%22%20fill%3D%22url(%23body)%22%2F%3E%3Crect%20x%3D%22230%22%20y%3D%2294%22%20width%3D%22140%22%20height%3D%22258%22%20rx%3D%228%22%20fill%3D%22%238A9597%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2269%22%20rx%3D%2269%22%20ry%3D%2214%22%20fill%3D%22%23cbd5e1%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2270%22%20rx%3D%2247%22%20ry%3D%228%22%20fill%3D%22%2364748b%22%2F%3E%3Cpath%20d%3D%22M240%20231%20Q277%20255%20300%20230%20T360%20235%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%228%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22196%22%20fill%3D%22white%22%20font-size%3D%2229%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3ECoke%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22290%22%20fill%3D%22white%22%20font-size%3D%2214%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3EDiet%20Coke%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22438%22%20fill%3D%22%23e4e4e7%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3EDiet%20Coke%3C%2Ftext%3E%3C%2Fsvg%3E",
    description: 'Light, crisp, and refreshing.',
    volume: '355 mL (12 fl oz)',
    color: '#8A9597'
  },
  {
    id: 'coke-zero',
    name: 'Coca-Cola Zero Sugar',
    priceCents: 225,
    category: 'Zero',
    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22460%22%20viewBox%3D%220%200%20600%20460%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22body%22%3E%3Cstop%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%22.35%22%20stop-color%3D%22%23ddd%22%2F%3E%3Cstop%20offset%3D%22.65%22%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23222%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22460%22%20fill%3D%22%231f1f23%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%22400%22%20rx%3D%2295%22%20ry%3D%2214%22%20fill%3D%22%23080809%22%2F%3E%3Crect%20x%3D%22228%22%20y%3D%2265%22%20width%3D%22144%22%20height%3D%22320%22%20rx%3D%2228%22%20fill%3D%22url(%23body)%22%2F%3E%3Crect%20x%3D%22230%22%20y%3D%2294%22%20width%3D%22140%22%20height%3D%22258%22%20rx%3D%228%22%20fill%3D%22%23000000%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2269%22%20rx%3D%2269%22%20ry%3D%2214%22%20fill%3D%22%23cbd5e1%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2270%22%20rx%3D%2247%22%20ry%3D%228%22%20fill%3D%22%2364748b%22%2F%3E%3Cpath%20d%3D%22M240%20231%20Q277%20255%20300%20230%20T360%20235%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%228%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22196%22%20fill%3D%22white%22%20font-size%3D%2229%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3ECoke%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22290%22%20fill%3D%22white%22%20font-size%3D%2214%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3ECoca-Cola%20Zero%20Sugar%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22438%22%20fill%3D%22%23e4e4e7%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3ECoca-Cola%20Zero%20Sugar%3C%2Ftext%3E%3C%2Fsvg%3E",
    description: 'Real Coca-Cola taste, zero sugar.',
    volume: '355 mL (12 fl oz)',
    color: '#000000'
  },
  {
    id: 'cherry-coke',
    name: 'Cherry Coke',
    priceCents: 275,
    category: 'Classic',
    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22460%22%20viewBox%3D%220%200%20600%20460%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22body%22%3E%3Cstop%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%22.35%22%20stop-color%3D%22%23ddd%22%2F%3E%3Cstop%20offset%3D%22.65%22%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23222%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22460%22%20fill%3D%22%231f1f23%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%22400%22%20rx%3D%2295%22%20ry%3D%2214%22%20fill%3D%22%23080809%22%2F%3E%3Crect%20x%3D%22228%22%20y%3D%2265%22%20width%3D%22144%22%20height%3D%22320%22%20rx%3D%2228%22%20fill%3D%22url(%23body)%22%2F%3E%3Crect%20x%3D%22230%22%20y%3D%2294%22%20width%3D%22140%22%20height%3D%22258%22%20rx%3D%228%22%20fill%3D%22%23800020%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2269%22%20rx%3D%2269%22%20ry%3D%2214%22%20fill%3D%22%23cbd5e1%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2270%22%20rx%3D%2247%22%20ry%3D%228%22%20fill%3D%22%2364748b%22%2F%3E%3Cpath%20d%3D%22M240%20231%20Q277%20255%20300%20230%20T360%20235%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%228%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22196%22%20fill%3D%22white%22%20font-size%3D%2229%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3ECoke%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22290%22%20fill%3D%22white%22%20font-size%3D%2214%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3ECherry%20Coke%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22438%22%20fill%3D%22%23e4e4e7%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3ECherry%20Coke%3C%2Ftext%3E%3C%2Fsvg%3E",
    description: 'A burst of cherry flavor.',
    volume: '355 mL (12 fl oz)',
    color: '#800020'
  },
  {
    id: 'vanilla-coke',
    name: 'Vanilla Coke',
    priceCents: 275,
    category: 'Classic',
    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22460%22%20viewBox%3D%220%200%20600%20460%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22body%22%3E%3Cstop%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%22.35%22%20stop-color%3D%22%23ddd%22%2F%3E%3Cstop%20offset%3D%22.65%22%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23222%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22460%22%20fill%3D%22%231f1f23%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%22400%22%20rx%3D%2295%22%20ry%3D%2214%22%20fill%3D%22%23080809%22%2F%3E%3Crect%20x%3D%22228%22%20y%3D%2265%22%20width%3D%22144%22%20height%3D%22320%22%20rx%3D%2228%22%20fill%3D%22url(%23body)%22%2F%3E%3Crect%20x%3D%22230%22%20y%3D%2294%22%20width%3D%22140%22%20height%3D%22258%22%20rx%3D%228%22%20fill%3D%22%23D2B48C%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2269%22%20rx%3D%2269%22%20ry%3D%2214%22%20fill%3D%22%23cbd5e1%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2270%22%20rx%3D%2247%22%20ry%3D%228%22%20fill%3D%22%2364748b%22%2F%3E%3Cpath%20d%3D%22M240%20231%20Q277%20255%20300%20230%20T360%20235%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%228%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22196%22%20fill%3D%22white%22%20font-size%3D%2229%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3ECoke%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22290%22%20fill%3D%22white%22%20font-size%3D%2214%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3EVanilla%20Coke%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22438%22%20fill%3D%22%23e4e4e7%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3EVanilla%20Coke%3C%2Ftext%3E%3C%2Fsvg%3E",
    description: 'Smooth vanilla notes.',
    volume: '355 mL (12 fl oz)',
    color: '#D2B48C'
  },
  {
    id: 'lime-coke',
    name: 'Coca-Cola Lime',
    priceCents: 275,
    category: 'Classic',
    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22460%22%20viewBox%3D%220%200%20600%20460%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22body%22%3E%3Cstop%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%22.35%22%20stop-color%3D%22%23ddd%22%2F%3E%3Cstop%20offset%3D%22.65%22%20stop-color%3D%22%23555%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23222%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22460%22%20fill%3D%22%231f1f23%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%22400%22%20rx%3D%2295%22%20ry%3D%2214%22%20fill%3D%22%23080809%22%2F%3E%3Crect%20x%3D%22228%22%20y%3D%2265%22%20width%3D%22144%22%20height%3D%22320%22%20rx%3D%2228%22%20fill%3D%22url(%23body)%22%2F%3E%3Crect%20x%3D%22230%22%20y%3D%2294%22%20width%3D%22140%22%20height%3D%22258%22%20rx%3D%228%22%20fill%3D%22%2300FF00%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2269%22%20rx%3D%2269%22%20ry%3D%2214%22%20fill%3D%22%23cbd5e1%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%2270%22%20rx%3D%2247%22%20ry%3D%228%22%20fill%3D%22%2364748b%22%2F%3E%3Cpath%20d%3D%22M240%20231%20Q277%20255%20300%20230%20T360%20235%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%228%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22196%22%20fill%3D%22white%22%20font-size%3D%2229%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3ECoke%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22290%22%20fill%3D%22white%22%20font-size%3D%2214%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3ECoca-Cola%20Lime%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22438%22%20fill%3D%22%23e4e4e7%22%20font-size%3D%2219%22%20font-family%3D%22Arial%2Csans-serif%22%20text-anchor%3D%22middle%22%3ECoca-Cola%20Lime%3C%2Ftext%3E%3C%2Fsvg%3E",
    description: 'A bright, zesty twist of natural lime flavor.',
    volume: '355 mL (12 fl oz)',
    color: '#00FF00'
  }
];