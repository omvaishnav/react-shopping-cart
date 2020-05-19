module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|otf|svg|png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
            name: 'static/media/[name].[hash:8].[ext]',
            emitFile : false,
            publicPath: process.env.PUBLIC_URL+'/'
        }
    }
    ],
  },
};