import { User } from './User'

export class Processor {
  givenConsent(user: User) {
    user.consentGiven = true
  }

  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }

  revokeConsent(user: User): boolean {
    if (user.userage < 18) {
      user.consentGiven = false
      return true
    } else return false
  }
}
