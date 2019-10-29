const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs'); // to check if the file exists

const config = {
	entry: ['react-hot-loader/patch', './src' ],
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[id].bundle.js',
		chunkFilename: '[id].js' // will auto assign a id to your separate chunks
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
				exclude: /\.module\.css$/
			},
			{
				test: /\.ts(x)?$/,
				use: [ 'awesome-typescript-loader' ],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				],
				include: /\.module\.css$/
			},
			{
				test: /\.svg$/,
				use: 'file-loader'
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png'
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx', '.tsx', '.ts', '.css', '.sa' ],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	},
	devServer: {
		port: 4000,
		contentBase: '../public',
		proxy: {
			'/NeoMES-Server': {
				target: {
					host: 'localhost',
					protocol: 'http:',
					port: 8080
				}
			}
		},
		hot: true
	},
	devtool: 'inline-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
		new LodashModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			inject: true,
			appMountId: 'root',
			favicon: "public/favicon.ico"
    })
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};

module.exports = (env, argv) => {
	if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }
  // const currentPath = path.join(__dirname);
  // https://stackoverflow.com/questions/42956127/get-parent-directory-name-in-node-js/42956762
  const currentPath = path.basename(path.dirname('/'));
  // Create the fallback path (the production .env)
  const basePath = currentPath + './.env';
  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + '.' + env.ENVIRONMENT;
  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  
  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

	return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
