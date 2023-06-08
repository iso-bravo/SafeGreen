#![no_std]
use gmeta::{Metadata,InOut};
use gstd::{prelude::*,ActorId,Encode, Decode, TypeInfo, Debug};

pub struct HelloMetadata;   

#[derive(Encode, Decode, TypeInfo, Debug)]
pub enum InputMessage {
    SendHelloTo(ActorId),
    SendHelloReply,
}

impl Metadata for HelloMetadata {
    type Init = InOut<String, ()>;
    type Handle = InOut<InputMessage, String>;
    type State = String;
    type Reply = (); 
    type Signal = ();
    type Others = (); 
 }