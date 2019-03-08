module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    // class { handleThing = () => { } }
    '@babel/proposal-class-properties',
    // { ...spread }
    '@babel/proposal-object-rest-spread',
    // const baz = obj?.foo?.bar?.baz;
    '@babel/plugin-proposal-optional-chaining',
  ],
}