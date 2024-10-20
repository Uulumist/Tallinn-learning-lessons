import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach(() => {
  user = new User('Tom', 'Yorke', 555534567, 'Tallinn', 20)
  processor = new Processor()
})

test('check that consent is undefined for new user', () => {
  expect(user.consentGiven).toBeUndefined()
})

test('check that consent is given by user', () => {
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)
})

test('check that processor verified that user gave consent', () => {
  processor.givenConsent(user)
  expect(processor.checkConsent(user)).toBeTruthy()
})

test('check that processor verified that user didnt give consent', () => {
  expect(processor.checkConsent(user)).toBeFalsy()
})

test('check that consent is revoked if users age <18', () => {
  user.userage = 17
  processor.givenConsent(user)
  expect(processor.revokeConsent(user)).toBe(true)
})

test('check that consent is not revoked if users age >=18', () => {
  user.userage = 20
  processor.givenConsent(user)
  expect(processor.revokeConsent(user)).toBe(false)
})

test('check that consent is revoked if users age 0', () => {
  user.userage = 0
  processor.givenConsent(user)
  expect(processor.revokeConsent(user)).toBe(true)
})
