// Arquivo de configuração do webpack. Esse nome é padrão!
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',    //configura o arquivo de entrada
    output: {
        filename: 'principal.js',    //configura o nome do arquivo de saída
        path: __dirname + '/public' //configura a pasta de saída
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [  //instalando plugins
        new MiniCssExtractPlugin({  // usando o MiniCss para criar um arquivo .css a parte
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{   //definindos as "regras", adicionando novos loaders para carregar determinados tipos de arquivos
            test: /\.s?[ac]ss$/, //definindo qual o "teste" para saber se um loader deverá ser utilizado ou não. (aqui, se ele terminar em .css, .scss ou .sass) escrito em regex
            use: [  //definindo o que usar caso passe no teste desta regra
                MiniCssExtractPlugin.loader,    //loader do MiniCss
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style> (conflitante com o MiniCss, por isso retirado)
                'css-loader', // interpreta @import, url()...
                'sass-loader'   //interpreta os arquivos .sass
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}