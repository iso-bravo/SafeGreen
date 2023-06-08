#![no_std]
use gstd::{prelude::*,msg,ActorId,debug};

#[derive(Encode, Decode, TypeInfo, Debug)]
pub enum InputMessage {
    SendHelloTo(ActorId),
    SendHelloReply,
}

static mut GREETING: Option<String> = None;

#[no_mangle]
extern "C" fn init(){
    let init_message: String = msg::load().expect("Can't load the incoming message");
    debug!("Program initialized {:?}", init_message);
    unsafe { GREETING = Some(init_message)}; 
} 

#[no_mangle]
extern "C" fn handle(){
    let message: InputMessage = msg::load().expect("Can't decode `InputMessage`");
    debug!("Incoming message {:?}", message);
    let greeting = unsafe { GREETING.as_ref().expect("The contract is not initialized")};
    match message {
        InputMessage::SendHelloTo(account) => {
            msg::send(account, greeting, 0).expect("Can't send a `SendHelloTo` message");
        },
        InputMessage::SendHelloReply => {
            msg::reply(greeting, 0).expect("Can't send a `SendHelloReply` message");
        }
    }
}