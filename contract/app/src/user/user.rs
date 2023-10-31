use near_sdk::{ near_bindgen, env };
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct User {
    id: i32,
    email: String,
    first_name: String,
    last_name: String,
    address: String,
    phone_number: String,
    about_yourself: String,
    password:String,
}

