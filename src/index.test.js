import { compareObjects } from "./index";


describe('testing compareObjects func', () => {
  afterEach(() => {
    document.querySelector('#root').innerHTML= ''
  });
  it('should be defined', () => {
    expect(compareObjects).toBeDefined()
  });
  
  it('should return null, coz of passing null', () => {
    const result = compareObjects(null, null)
    expect(result).toBeNull()
  });

  it('should return null, coz of uncompatible types', () => {
    const obj1 = {
      a: 12,
      b: "1"
    }
    const obj2 = {
      a: 12,
      b: 1
    }
    const result = compareObjects(obj1, obj2)
    expect(result).toBeNull()
    expect(document.querySelectorAll('.invalid').length).toEqual(1)
  });

  it('should fail and return null because in array we have different order', () => {
    const obj1 = {
      a: {
        b: 12,
        c: ['yes', 123]
      }
    }
    const obj2 = {
      a: {
        b: 12,
        c: [123, 'yes']
      }
    }
    const result = compareObjects(obj1, obj2)
    expect(result).toBeNull()
    expect(document.querySelectorAll('.invalid').length).toEqual(2)
  });
  
  
  it('should return copy of input object when we have nested object and array', () => {
    const obj1 = {
      a: {
        b: 12,
        c: ['yes', '123'],
        d: {
          e: {
            f: 'ok'
          }
        }
      },
    }
    const obj2 = {
      a: {
        b: 12,
        c: ['yes', '123'],
        d: {
          e: {
            f: 'ok'
          }
        }
      }
    }
    const result = compareObjects(obj1, obj2)
    expect(result).toEqual(obj1)
    expect(document.querySelectorAll('.invalid').length).toEqual(0)
  });
});