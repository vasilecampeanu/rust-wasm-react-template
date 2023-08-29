use rust_wasm_react_template::greet;

fn main() {
    let name = String::from("Bob");
    let greeting = greet(&name);
    println!("{}", greeting);
}
