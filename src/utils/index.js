const JSON5 = require('json5')

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

export { findComponentUpward }

// Find components downward
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// 连字符转驼峰
export function cssStyle2DomStyle (sName) {
  return sName.replace(/^\-/, '').replace(/\-(\w)(\w+)/g, function (a, b, c) {
    return b.toUpperCase() + c.toLowerCase()
  })
}

// obj to string
export function obj2Str (obj) {
  return JSON5.stringify(obj)
}

// string to obj to
export function str2Obj (str) {
  return JSON5.parse(str)
}

export function uuid () {
  return Math.random(5).toString(32).replace('0.', '')
}
