/*
 * @Descripttion : 
 * @version      : 
 * @Author       : Baishu
 * @Date         : 2022-05-22 15:57:14
 * @LastEditors  : Baishu
 * @LastEditTime : 2022-05-22 16:47:36
 * @FilePath     : /proton-utils/rollup.config.build.js
 */
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
// import postcss from "rollup-plugin-postcss";

const extensions = ['.js', '.ts', '.tsx', '.json']

export default [
    // UMD for browser-friendly build
    {
        input: 'src/index.ts', // 打包入口
        output: { // 打包出口
            file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
            format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
            name:'proton-utils' // 包的全局变量名称
        },
        plugins: [ // 打包插件
            resolve(), // 查找和打包node_modules中的第三方模块
            commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
            typescript(), // 解析TypeScript
            babel({
                include: 'src/**/*',
                exclude: '**/node_modules/**',
                extensions,
            }),
            terser()
            // postcss()
        ],
        external:['lodash']
    },    
    // CommonJS for Node and ES module for bundlers build
    {
        input: 'src/index.ts',
        plugins: [
            typescript()
        ],
        output: [
            {  file: pkg.main, format: 'cjs', exports: 'auto' },
            {  file: pkg.module, format: 'es', exports: 'auto' }
        ],
        external:['lodash']
    }
];

