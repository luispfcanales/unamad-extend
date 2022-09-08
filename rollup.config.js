import css from 'rollup-plugin-css-only';

export default {
  input:'src/main.js',
  output:{
    file:'public/build/bundle.js',
    format:'iife',
    inlineDynamicImports:true
  },
  plugins:[
    css({output:'bundle.css'}),
  ]
}
