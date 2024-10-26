import {UserEstonia} from "./UserEstonia";
import {Contract} from "./Contract";
import {UserLatvia} from "./UserLatvia";

export class SignContract {
    contract: Contract

    constructor(contract: Contract) {
        this.contract = contract
    }

    signEstContract(user: UserEstonia) {
        if (user.mobileIDAuthorization)
            this.contract.signed = true
    }

    signLvContract(user: UserLatvia) {
        if (user.activateEParakstsForLatvia)
            this.contract.signed = true
    }
}