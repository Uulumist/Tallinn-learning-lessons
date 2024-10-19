export class User {
  name: string
  surname: string
  phone: number
  address: string
  consentGiven: undefined | boolean

  constructor(name: string, surname: string, phone: number, address: string) {
    this.name = name
    this.surname = surname
    this.phone = phone
    this.address = address
  }
}
