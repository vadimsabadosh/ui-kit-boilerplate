const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		libraryTarget: "umd",
		clean: true,
	},
	resolve: {
		extensions: [".ts", ".tsx"],
	},
	externals: {
		react: "react",
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(ts|tsx)?$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
};
