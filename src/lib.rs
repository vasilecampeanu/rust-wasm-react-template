// Import the wasm_bindgen prelude, which contains essential types and macros for
// working with WebAssembly (Wasm) in Rust.
use wasm_bindgen::prelude::*;

// Use the `wasm_bindgen` attribute to mark this function for export to Wasm.
// This means that this function will be callable from JavaScript after the
// Rust code is compiled to WebAssembly.
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello {}", name) // Format a greeting string using the provided name and return it.
}
