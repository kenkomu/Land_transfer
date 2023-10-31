use near_sdk::store::Vector;
use near_sdk::{ near_bindgen, env };
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub enum PropertyType {
    House,
    Commercial,
    Apartment,
    Lot,
    Garage,

}
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub enum PropertyStatus {
    Sale,
    Rent,
    NotAvailable,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct PropertyContactInformation {
    user_id:i32,
    name: String,
    username: String,
    email: String,
    phone: String,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct PropertyLocation {
    address: String,
    city: String,
    state: String,
    county: String,
    lat: f32,
    long: f32,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct PropertyMedia {
    id: i32,
    url: String,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct PropertyRating {
    rating:f32,
    user_id:i32
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Property {
    id: i32,
    title: String,
    description: String,
    status: PropertyStatus,
    price: i32,
    area: i32,
    contact_information : PropertyContactInformation,
    location: PropertyLocation,
    rating: Vector<PropertyRating>
}