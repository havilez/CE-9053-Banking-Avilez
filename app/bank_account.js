

var _ = require('lodash');

function BankAccount( parms )
{
    if (!parms.accountId) throw "no valid account id";

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
    } else {
        throw new Error("balance less than zero")
    };

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




module.exports = BankAccount;

