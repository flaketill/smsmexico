/*!
 * smsmexico
 */

/**
 * Module dependencies.
 */

var fs = require('fs')
    ,pkg = require('../package.json')
    ,path = require('path');

/**
 * Module exports.
 */

//Expose `smsmexico()`.
var smsmexico = exports = module.exports = {};

/**
 * Package for send sms 
 */

/**
 * Node.js Library version.
 */

smsmexico.version = pkg.version;

/**
 * Create an Library 
 *
 *    "Client" used to send Messages 
 *
 * Example use:
 *                  var url= ""
 *                      ,username = 'your_username'
 *                      ,'your_password';
 *
 *                  var Client = new smsmexico.client("http://mensajesmexico.com/wserv/SMS.php",username, password);
 *                  Client.SendMessage(number_list,message)

 * @param {string} url
 * @param {string} username
 * @param {string} password
 */

smsmexico.Client = function(url, username, password){

  this.url = url;
  this.username = username;
  this.password = password;

  console.log(url);
  console.log(username);
  console.log(password);

};

/***
   * smsmexico.SendMessage
   *    send message object.
   *
   *    Example usage:
   *    smsmexico.SendMessage( number_list,message );
   *
   * @param {Array} number_list    - Array numberts to send sms
   * @param {Object} message        - Message Object (TextMessage for sms)  
*/

//----------------- MESSAGE OBJECTS -------------
smsmexico.SendMessage = function(number_list, message){

    if (message === undefined){
      console.log("Please message");
    }

    for (var i = 0; i < number_list.length; i++) 
    {
      
      console.log("Recipient '" + number_list[i] + "' is invalid. (max. 15 digits full international MSISDN. Example: 4367612345678)");
       
    }

};


/**
 * Test function
 *
 */

smsmexico.prototype.test = function(){
  console.log("Testing");
};