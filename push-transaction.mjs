import { Api, JsonRpc, RpcError, JsSignatureProvider } from './dist/index.js'
import * as dotenv from 'dotenv' 
dotenv.config()

const url = process.env.NODE_URL
const json_rpc = new JsonRpc(url) 
const private_key = process.env.PRIVATE_KEY; 
const recipient = process.env.RECIPIENT;

const actor = process.env.INERY_ACCOUNT 
const signature  = new JsSignatureProvider([private_key]); 

const api = new Api({
    rpc: json_rpc,
    signatureProvider: signature
})

async function tokenSend(gonderici, alici, miktar){
    try{
        // create new transaction and sign it
        const tx = await api.transact({
            actions:[
                {
                    account: 'inery.token',
                    name:"transfer",
                    authorization:[
                        {
                            actor,
                            permission:"active"
                        }
                    ],
                    data:{
                        from: gonderici,
                        to: alici,
                        quantity: miktar,
                        memo: ''
                    }
                }
            ]
        },{broadcast:true,sign:true})

        console.log(tx) // output the tx to terminal, it's Json Object
    }catch(error){
        console.log(error)
    }
}

// call RPC that we created in create function
tokenSend(actor, recipient, '0.0001 INR')