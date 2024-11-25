import {Contract} from "../src/Contract";
import {UserEstonia} from "../src/UserEstonia";
import {SignContract} from "../src/Sign";
import {UserLatvia} from "../src/UserLatvia";

describe('Tests for signing contract for estonian user', () => {
    let userEstonia: UserEstonia
    let contract: Contract
    let signContract: SignContract

    beforeEach(() => {
        userEstonia = new UserEstonia('Tom', 'Yorke', 45, 1234567, '555666', 'Tallinn')
        contract = new Contract('Contract for estonian user')
        signContract = new SignContract(contract)
    });

    test('Verify signed field is false by default', () => {
        expect(contract.signed).toBeFalsy()
    })

    test('Verify that Contract cannot be signed if mob ID authorization not activated', () => {
        userEstonia.mobileIDAuthorization = false
        signContract.signEstContract(userEstonia)
        expect(contract.signed).toBe(false)
    })

    test('Verify that Contract is signed if mob ID authorization activated', () => {
        userEstonia.mobileIDAuthorization = true
        signContract.signEstContract(userEstonia)
        expect(contract.signed).toBe(true);
    })

})

describe('Tests for signing contract for latvian user', () => {
    let userLatvia: UserLatvia
    let contract: Contract
    let signContract: SignContract

    beforeEach(() => {
        userLatvia = new UserLatvia('Tom', 'Ford', 40, 1234567, '555666', 'Riga')
        contract = new Contract('Contract for estonian user')
        signContract = new SignContract(contract)
    });

    test('Verify signed field is false by default', () => {
        expect(contract.signed).toBeFalsy()
    })

    test('Verify that Contract cannot be signed if EParaksts not activated', () => {
        userLatvia.activateEParakstsForLatvia = false
        signContract.signLvContract(userLatvia)
        expect(contract.signed).toBe(false)
    })

    test('Verify that Contract is signed if EParaksts activated', () => {
        userLatvia.activateEParakstsForLatvia = true
        signContract.signLvContract(userLatvia)
        expect(contract.signed).toBe(true);
    })

})