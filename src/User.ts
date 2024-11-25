export class User {
  name: string
  surname: string
  phone: number
  address: string
  userage: number
  consentGiven: undefined | boolean

  constructor(name: string, surname: string, phone: number, address: string, userage: number) {
    this.name = name
    this.surname = surname
    this.phone = phone
    this.address = address
    this.userage = userage
  }
}
