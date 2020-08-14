// Find components upward
function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

export {findComponentUpward};

// Find components downward
export function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

// 连字符转驼峰
export function cssStyle2DomStyle(sName) {
  return sName.replace(/^\-/, '').replace(/\-(\w)(\w+)/g, function (a, b, c) {
    return b.toUpperCase() + c.toLowerCase();
  });
}

// 校验
export function verifyRequired() {
  const list = this.center.list;
  const data = this.center.data;
  let error = false;
  let errorIndex = 0;
  for (let i = 0; i <= list.length - 1; i++) {
    const item = list[i];
    if (item.dragItem.required && item.dragItem.componentType === 'base') {
      const d = data[item.dragItem.key]
      if (item.dragItem.dataType === 'TimeRange') {
        const key = item.dragItem.key.split(';');
        key.forEach(child => {
          if ((typeof data[child] === 'string' && data[child] === '') || typeof data[child] === 'undefined' || data[child] === null) {
            error = true;
            errorIndex = i;
          }
        })
        if (error) {
          break;
        }
      } else if (item.dragItem.dataType === 'Array') {
        if (d.length <= 0) {
          error = true
          errorIndex = i;
          break;
        }
      } else {
        if ((typeof d === 'string' && d === '') || typeof d === 'undefined' || d === null) {
          error = true;
          errorIndex = i;
          break;
        }
      }
    }
  }
  if (error) {
    const title = `title_${this.language.lang}`;
    const msg = `${list[errorIndex].dragItem[title]}${this.$t('verify_required')}`
    this.$Message.error(msg)
  }
  return error;
}