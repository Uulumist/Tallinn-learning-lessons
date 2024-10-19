import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach(() => {
  user = new User('Tom', 'Yorke', 1234567, 'Tallinn')
  processor = new Processor()
})

test('check new user undefined', () => {
  expect(user.consentGiven).toBeUndefined()
})

test('check processor approve', () => {
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)
})

test('check processor verify', () => {
  processor.givenConsent(user)
  expect(processor.checkConsent(user)).toBeTruthy()
})

test('check consent declined', () => {
  expect(processor.checkConsent(user)).toBeFalsy()
})
