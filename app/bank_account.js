

var _ = require('lodash');

function BankAccount( parms )
{
    if (!parms.accountId) throw "no valid account id";

<<<<<<< HEAD
  //  if ( parms.balance < 0 ) throw " initial balance cannot be negative";


    this._balance = (!parms.balance) ? 0 : parms.balance;

    if (! (typeof this._balance === 'number' ) )  throw "balance must be number";


    this._locked = ( !parms.locked ) ? false : true;


    /*
    if (parms.balance == undefined )
        this._balance = 0;
**/

    this._accountId = parms.accountId;

    if ( parms.balance < 0 ) throw " initial balance cannot be negative";


    /**

    if  (parms.balance >= 0 ) {
        this.balance = parms.balance;
=======

    var defaults = {accoundId: 'default',balance: 0, locked: false};
    var values = _assign({},defaults,parms)

    this.accountId = values.accountid;

    if  (values.balance >= 0 ) {
        this.balance = values.balance;
>>>>>>> 99e09772fcdc1000a11e8143b78e25d55bc4700f
    } else {
        throw new Error("balance less than zero")
    };

<<<<<<< HEAD
    if (typeof parms.locked === 'boolean') {
        this.locked = parms.locked;
    } else
        throw new Error( "Account locked value is not boolean");

     **/
};

BankAccount.prototype.accountId = function() {
        return this._accountId;
};

BankAccount.prototype.balance = function() {
    return this._balance;
};

BankAccount.prototype.locked = function() {
    return this._locked;
};




=======
    if (typeof values.locked === 'boolean') {
        this.locked = values.locked;
    } else
        throw new Error( "Account locked value is not boolean");
};

BankAccount.prototype = {
    deposit: function ( amount) {
        this.balance = amount;
    }

};

>>>>>>> 99e09772fcdc1000a11e8143b78e25d55bc4700f
module.exports = BankAccount;

