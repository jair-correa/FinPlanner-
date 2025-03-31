const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',

  // Configuração do devServer
  devServer: {
    static: {
      directory: path.join(__dirname, 'frontend'),  // Diretório onde os arquivos estáticos serão servidos
    },
    compress: true, // Compressão dos arquivos
    port: 5500, // Porta onde o servidor será iniciado
    historyApiFallback: true, // Se você estiver usando React Router ou SPA, isso resolve o erro 404 nas rotas
    open: true, // Abre automaticamente o navegador quando o servidor for iniciado
    watchFiles: {
      paths: ['frontend/**/*'],  // Define quais arquivos serão observados para atualizações
      options: {
        usePolling: true,  // Habilita polling, caso necessário
      },
    },
    devMiddleware: {
      publicPath: '/assets/js/',  // Diretório onde os arquivos de bundle.js serão acessados
    },
  },
};
