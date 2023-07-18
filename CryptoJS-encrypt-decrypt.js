var data="Example123";//Message to Encrypt
var iv  = CryptoJS.enc.Utf8.parse("");//giving empty initialization vector
var key=CryptoJS.enc.Utf8.parse("b151829eda892a83017b276bca72820c");//hashing the key using SHA256
var encryptedString=encryptData(data,iv,key);
console.log(encryptedString);//genrated encryption String:  swBX2r1Av2tKpdN7CYisMg==

function encryptData(data,iv,key){
	 	     if(typeof data=="string"){
            data=data.slice();
          encryptedString = CryptoJS.AES.encrypt(data, key, {
	          iv: iv,
               keySize: 128 / 8,
	          mode: CryptoJS.mode.CBC,
	          padding: CryptoJS.pad.Pkcs7
	    });
          }
	       else{
         encryptedString = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
	          iv: iv,
               keySize: 128 / 8,
	          mode: CryptoJS.mode.CBC,
	          padding: CryptoJS.pad.Pkcs7
	    });  
         }
	    return encryptedString.toString();
}

var decrypteddata=decryptData("o4efbSgBiUG+8wc6dmitCw==",iv,key);
console.log(decrypteddata);//genrated decryption string:  Example1

function decryptData(encrypted,iv,key){
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        	  iv: iv,
              keySize: 128 / 8,
	          mode: CryptoJS.mode.CBC,
	          padding: CryptoJS.pad.Pkcs7
        });
    return decrypted.toString(CryptoJS.enc.Utf8)
}
