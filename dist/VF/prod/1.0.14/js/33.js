(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{341:function(e,t){e.exports="<h2 id=dynamic-data>Dynamic data</h2> <p>This function aims at multiple selection, drop-down selection and single selection components.</p> <h3 id=step-one>Step one</h3> <p>Add this type of component in the ribbon (multiple selection, drop-down selection, single selection)</p> <h3 id=step-two>Step two</h3> <p>Select field properties</p> <h3 id=step-three>Step three</h3> <p>View the <code>option configuration</code></p> <p>Match your <code>Ajax address</code> in the option data address</p> <p>Attach a test Ajax address</p> <p><a href=https://cdn.shenzhepei.com/VF/select.json>https://cdn.shenzhepei.com/VF/select.json</a></p> <h3 id=step-four>Step four</h3> <p>If you want to change your data format</p> <p>store/center.js</p> <pre><code class=language-javascript>// Initialization list\nchangeSelectList: function (state, newState) {\n  const list = state.list;\n  list.forEach(item =&gt; {\n    if (item.dragItem.key === newState.key) {\n      item.dragItem.ajaxList = newState.value;\n    }\n  })\n  state.list = list;\n},</code></pre> <p>there newState.value Just pass in the value and format it accordingly</p> <h3 id=step-five>Step five</h3> <p>If you want to modify the overall return format of your Ajax request</p> <p>utils/request.js</p> <pre><code class=language-javascript>// {\n//   data: &#39;data&#39;,\n//   resultCode: &#39;0000&#39;,\n//   resultMsg：&#39;error message&#39;\n// }\n// It can judge logic error request by itself\naxios.interceptors.response.use(response =&gt; {\n  const {data} = response;\n  const locale = localStorage.getItem(&#39;locale&#39;);\n  let errMessage = &#39;网络异常，请重试&#39;;\n  if (locale === &#39;en&#39;) {\n    errMessage = &#39;Network exception, please try again&#39;;\n  }\n  if (data) {\n    if (data.resultCode === &#39;0000&#39;) {\n      return data.data\n    } else {\n      Message.error(data.returnMessage || errMessage)\n      return Promise.reject(false);\n    }\n  } else {\n    Message.error(errMessage)\n    return Promise.reject(false);\n  }\n}, function (e) {\n  Message.error(errMessage);\n  return Promise.reject(false);\n});</code></pre> "}}]);