import { UserBase } from './UserBase'

export class UserLatvia extends UserBase{

    activateEParakstsForLatvia: undefined|boolean

    constructor(name: string, surname: string, age: number, personalCode: number, phone: string, address: string) {
        super(name, surname, age, personalCode, phone, address)
        this.activateEParakstsForLatvia = undefined
    }
}