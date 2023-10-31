mod property;
mod user;

// Find all our documentation at https://docs.near.org
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{log, near_bindgen};
use near_sdk::store::Vector;

// Define the default message
const DEFAULT_MESSAGE: &str = "Hello";

// Define the contract structure
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct PropertySystem {
    property: Vector<Property>,
    users: Vector<User>,
}

// Define the default, which automatically initializes the contract
impl Default for PropertySystem{
    fn default() -> Self{
        Self{message: DEFAULT_MESSAGE.to_string()}
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
            tree_map: TreeMap::new(b"t".to_vec()),
            unordered_map: UnorderedMap::new(b"u".to_vec()),
            lookup_map: LookupMap::new(b"l".to_vec()),
            last_line_added: 0
        }
    }

    // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
    pub fn get_greeting(&self) -> String {
        return self.message.clone();
    }

    // Public method - accepts a greeting, such as "howdy", and records it
    pub fn set_greeting(&mut self, message: String) {
        log!("Saving greeting {}", message);
        self.message = message;
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
    fn get_default_greeting() {
        let contract = PropertySystem::default();
        // this test did not call set_greeting so should return the default "Hello" greeting
        assert_eq!(
            contract.get_greeting(),
            "Hello".to_string()
        );
    }

    #[test]
    fn set_then_get_greeting() {
        let mut contract = PropertySystem::default();
        contract.set_greeting("howdy".to_string());
        assert_eq!(
            contract.get_greeting(),
            "howdy".to_string()
        );
    }
}
