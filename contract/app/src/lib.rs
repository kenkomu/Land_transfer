mod models;

// Find all our documentation at https://docs.near.org
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, log, near_bindgen};
use near_sdk::store::Vector;
use models::user::User;
use models::property::{Property, PropertyLocation, PropertyMedia, PropertyRating};
use crate::models::property::{PropertyContactInformation, PropertyStatus};


const OKAY: &str = "okay";
const ACCOUNT_BLOCKED: &str = "account blocked";
const ACCOUNT_NOT_FOUND: &str = "account not found";
const EMAIL_NOT_FOUND: &str = "email not found in system";
const ACCOUNT_WRONG_PASSWORD: &str = "account wrong password";

// Define the contract structure
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct PropertySystem {
    property: Vector<Property>,
    users: Vector<User>,
}

// Define the default, which automatically initializes the contract
impl Default for PropertySystem {
    fn default() -> Self {
        Self {
            property: Vector::new(b"r".to_vec()),
            users: Vector::new(b"r".to_vec()),
        }
    }
}



// Implement the contract structure
#[near_bindgen]
impl PropertySystem {
    /// Init attribute used for instantiation.
    #[init]
    pub fn new() -> Self {
        // Useful snippet to copy/paste, making sure state isn't already initialized
        assert!(env::state_read::<Self>().is_none(), "Already initialized");
        // Note this is an implicit "return" here
        Self {
            property: Vector::new(b"r".to_vec()),
            user: Vector::new(b"r".to_vec()),

        }
    }


    pub fn add_user(&mut self, first_name: String, last_name: String, about_yourself: String, phone_number: String, address: String, email: String, password: String) {
        let user = User {
            id: (self.users.len() + 1) as i32,
            account: env::current_account_id(),
            email,
            first_name,
            last_name,
            address,
            phone_number,
            about_yourself,
            password, //todo encrypt
            is_admin: false,
            is_blocked: false,

        };
        self.users.push(user);
    }

    // Public method - returns all the users
    pub fn get_users(&self) -> Vector<User> {
        return self.users.clone();
    }

    // Public method - returns all the property
    pub fn get_property_all(&self) -> Vector<Property> {
        return self.property.clone();
    }

    pub fn login_password(&self, email: String, password: String) -> (Option<&User>, String) {
        let user = self.users.iter().find(|item| item.email == email);

        return match user {
            Some(data) => {
                if data.password == password {
                    (Option::Some(data), OKAY.to_string())
                } else {
                    (Option::None, ACCOUNT_WRONG_PASSWORD.to_string())
                }
            }
            None => (Option::None, "email not found in system".to_string())
        };
    }

    pub fn get_property_available(&self) -> Vec<Property> {
        let mut data: Vec<Property> = vec![];
        for elem in self.property {
            data.push(elem);
        }
        data
    }
    pub fn add_property(&mut self,
                        is_available: bool,
                        title: String,
                        description: String,
                        status: String,
                        price: i32,
                        area: i32,
                        name: String,
                        username: String,
                        email: String,
                        phone: String,
                        address: String,
                        city: String,
                        state: String,
                        county: String,
                        lat: f32,
                        long: f32,
    ) -> String {
        let status_item = match status {
            String::from("sale") => PropertyStatus::Sale,
            String::from("rent") => PropertyStatus::Rent,
            String::from("not_available") => PropertyStatus::NotAvailable,
            _ => PropertyStatus::NotAvailable
        };
        let contact_information = PropertyContactInformation {
            name,
            username,
            email,
            phone,
        };
        let location = PropertyLocation {
            address,
            city,
            state,
            county,
            lat,
            long,
        };
        let property_item = Property {
            id: (self.property.len() + 1) as i32,
            is_available,
            title,
            description,
            status: status_item,
            price,
            area,
            contact_information,
            location,
            rating: Vector::new(b"r".to_vec()),
        };
        self.property.push(property_item);
        return "okay".to_string();
    }
}

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
 */
#[cfg(test)]
mod tests {
    use super::*;


    #[test]
    fn add_then_get_property() {
        let mut contract = PropertySystem::default();
        contract.add_property(

           true, // is_available: bool,
            "My jumbo system".to_string(),// title: String,
           "5 bedroom mansion in Ruiru bypass".to_string(), // description: String,
            "sale".to_string(),// status: String,
            1_000_000,// price: i32,
            5000,// area: i32,
           "kenn".to_string(), // name: String,
           "kenn".to_string(),// username: String,
            "sample@email.com".to_string(),// email: String,
            "254717008240".to_string(),// phone: String,
            "254-466 Ruaraka".to_string(),// address: String,
           "Ruiru".to_string(), // city: String,
            "Kiambu".to_string(),// state: String,
            "Kiambu".to_string(),// county: String,
            0.02922,// lat: f32,
           0.1223 // long: f32,
        );
        assert_eq!(
            contract.get_property_all().len(),
            1
        );
        assert_eq!(
            contract.get_property_available().len(),
            1
        );



    }

    #[test]
    fn add_then_get_users_login() {
        let mut contract = PropertySystem::default();
        contract.add_user(
            "howdy".to_string(),
            "howdy".to_string(),
            "howdy".to_string(),
            "howdy".to_string(),
            "howdy".to_string(),
            "howdy@mail.com".to_string(),
            "howdy".to_string(),
        );
        assert_eq!(
            contract.get_users(),
            1
        );
        //login
        // valid password
        let (res, reason) = contract.login_password("howdy@mail.com".to_string(), "howdy".to_string());
        assert_eq!(
            res,
            Some
        );
        assert_eq!(
            reason,
            OKAY.to_string()
        );

        // email not valid
        let (res2, reason2) = contract.login_password("kkakkakka".to_string(), "".to_string());
        assert_eq!(
            res,
            None
        );
        assert_eq!(
            reason2,
           EMAIL_NOT_FOUND.to_string()
        );

        // invalid password
        let (res3, reason3) = contract.login_password("howdy@mail.com".to_string(), "".to_string());
        assert_eq!(
            res,
            None
        );
        assert_eq!(
            reason3,
           ACCOUNT_WRONG_PASSWORD.to_string()
        );

    }
}
