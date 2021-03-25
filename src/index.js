import { cloneDeep } from "lodash"

const root = document.querySelector('#root')

export const createInvalidCode = (key, reason) => {
  const div = document.createElement('div')
  div.classList.add('invalid')
  div.innerHTML = `
    <span>Key: <b>${key}</b></span>
    <span>${reason}</span>
  `
  root.appendChild(div)
}


export const compareObjects = (first, second) => {
  if(
    !first || 
    !second || 
    typeof first !== 'object' ||
    typeof second !== 'object'
    ) {
    return null
  }

  let areObjectsSame = true
  for (const key in first) {
    if (Object.hasOwnProperty.call(second, key)) {
      const firstValue = first[key];
      const secondValue = second[key]

      if(
        firstValue && 
        secondValue && 
        typeof firstValue === 'object' && 
        typeof secondValue === 'object'
      ) {
        areObjectsSame = !!compareObjects(firstValue, secondValue)
        continue
      }

      const typesAreDifferent= typeof firstValue !== typeof secondValue
      const valuesAreDifferent = firstValue !== secondValue

      if(valuesAreDifferent && typesAreDifferent) {
        createInvalidCode(key , ` different type expected: <b>${typeof firstValue}</b> get <b>${typeof secondValue}</b>`)
        areObjectsSame = false
        continue
      }

      if(typesAreDifferent) {
        createInvalidCode(key , ` different type expected: <b>${typeof firstValue}</b> get <b>${typeof secondValue}</b>`)
        areObjectsSame = false
        continue
      }

      if(valuesAreDifferent) {
        createInvalidCode(key , ` has two different value: <b>${firstValue.toString()}</b> and <b>${secondValue.toString()}</b>`)
        areObjectsSame = false
        continue
      }
      
    } else {
      createInvalidCode(key , `does not exists in object`)
      areObjectsSame = false
    }
  }
  if(areObjectsSame) {
    return cloneDeep(second)
  }
  return null
}