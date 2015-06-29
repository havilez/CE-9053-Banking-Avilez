

var _ = require('lodash');

function BankAccount( parms )
{
    if (!parms.accountId) throw "no valid account id";


    var defaults = {accoundId: 'default',balance: 0, locked: false};
    var values = _assign({},defaults,parms)

    this.accountId = values.accountid;

    if  (values.balance >= 0 ) {
        this.balance = values.balance;
    } else {
        throw new Error("balance less than zero")
    };

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

module.exports = BankAccount;

