import classNames from '../'

describe('classNames function utils', () => {
  test('Should return classnames in string with string inputs', () => {
    expect(classNames('class')).toBe('class')
    expect(classNames('class otherclass')).toBe('class otherclass')
  })
  test('Should return classnames in string with string separate with commas', () => {
    expect(classNames('class', 'otherclass')).toBe('class otherclass')
    expect(classNames('class', 'otherclass')).toBe('class otherclass')
  })
  test('Should return classnames in string with array', () => {
    expect(classNames(['class', 'otherclass'])).toBe('class otherclass')
    expect(classNames(['class', 'otherclass', 'lastclass'])).toBe(
      'class otherclass lastclass',
    )
  })
  test('Should return classnames in string with object', () => {
    expect(
      classNames({
        class: true,
        otherclass: true,
      }),
    ).toBe('class otherclass')
    expect(
      classNames({
        class: true,
        otherclass: true,
        lastclass: false,
      }),
    ).toBe('class otherclass')
  })
  test('Should return classnames in string with combination inputs', () => {
    expect(
      classNames('class', ['otherclass', 'lastclass'], {
        myclass: true,
        wowclass: true,
        kawaiclass: false,
      }),
    ).toBe('class otherclass lastclass myclass wowclass')
  })
})
