import { UserEstonia } from '../src/UserEstonia'
import { KYC } from '../src/KYC'
import {UserLatvia} from "../src/UserLatvia";

describe('test KYC for Estonia', () => {
    let user: UserEstonia
    let kyc: KYC

    beforeEach(() => {
        user = new UserEstonia('Tom', 'Yorke', 45, 1234567, '555666', 'London')
        kyc = new KYC()
    })
    test('Verify mobileIDAuthorization field is undefined by default', () => {
        expect(user.mobileIDAuthorization).toBeUndefined()
    })
    test('Verify that activateMobileIDForEstonia activates Mobile ID if age greater than 16', () => {
        kyc.activateMobileIDForEstonia(user)
        expect(user.mobileIDAuthorization).toBe(true)
    })
    test('Verify an error if user younger than 16', () => {
        user.age=14
        expect(() => {
            kyc.activateMobileIDForEstonia(user);
        }).toThrow('User is too young')
    })
})

describe('test KYC for Latvia', () => {
    let user: UserLatvia
    let kyc: KYC

    beforeEach(() => {
        user = new UserLatvia('Tom', 'Yorke', 45, 1234567, '555666', 'London')
        kyc = new KYC()
    })
    test('Verify activateEParakstsForLatvia field is undefined by default', () => {
        expect(user.activateEParakstsForLatvia).toBeUndefined()
    })
    test('Verify that activateEParakstsForLatvia activates Mobile ID if age greater than 18', () => {
        kyc.activateEParakstsForLatvia(user)
        expect(user.activateEParakstsForLatvia).toBe(true)
    })
    test('Verify an error if user younger than 18', () => {
        user.age=14
        expect(() => {
            kyc.activateEParakstsForLatvia(user);
        }).toThrow('User is too young')
    })
})