// Declare the module so that TypeScript understands what a `.wasm` file returns
declare module '*.wasm' {

    /**
     * The `content` variable represents the exported content of a WebAssembly module.
     * The type is set to `any` as the actual exports can vary from module to module.
     */
    const content: any;

    /**
     * Export the `content` variable as the default export of the module.
     * This allows for easy import in TypeScript files.
     */
    export default content;
}
