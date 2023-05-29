import crypto from "crypto";
import { secratekey ,IV} from "../setting.js";

const algorithem = "aes-256-cbc";

let key = new Buffer.alloc(32);
key.write(secratekey);

let iv = new Buffer.alloc(16,"binary");
iv.write(IV);


export function Encrypt(password){
    const cipher = crypto.createCipheriv(algorithem,Buffer.from(key),iv);
    let encryptedpass = cipher.update(password);
    encryptedpass = Buffer.concat([encryptedpass,cipher.final()]);

    return encryptedpass.toString("hex");
    
}

export function Decrypt(password){

    let ivv = Buffer.from(iv.toString("hex"), 'hex');

    let encryptedText = Buffer.from(password, 'hex');
 
    let decipher = crypto.createDecipheriv(algorithem, Buffer.from(key), ivv);
 
    let decryptedpass = decipher.update(encryptedText);

    decryptedpass = Buffer.concat([decryptedpass, decipher.final()]);
 
    return decryptedpass.toString();



}