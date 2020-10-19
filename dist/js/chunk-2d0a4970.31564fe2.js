(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0a4970"],{"06a5":function(e,t){e.exports='<h2 id="dynamic-data">Dynamic data</h2> <p>This function aims at multiple selection, drop-down selection and single selection components.</p> <h3 id="step-one">Step one</h3> <p>Add this type of component in the ribbon (multiple selection, drop-down selection, single selection)</p> <h3 id="step-two">Step two</h3> <p>Select field properties</p> <h3 id="step-three">Step three</h3> <p>View the <code>option configuration</code></p> <p>Match your <code>Ajax address</code> in the option data address</p> <p>Attach a test Ajax address</p> <p><a href="https://cdn.shenzhepei.com/VF/select.json">https://cdn.shenzhepei.com/VF/select.json</a></p> <h3 id="step-four">Step four</h3> <p>If you want to modify the overall return format of your Ajax request</p> <p>Just expose your axios instance to the window.vf_request Just ask</p> <pre><code class="language-shell">import Vue from &#39;vue&#39;\nimport App from &#39;./App&#39;\nimport ViewUI from &#39;view-design&#39;\nimport request from &#39;./utils/request&#39;\nimport {VList} from &#39;eslink-vf&#39;\n\nwindow.vf_request = request\n\nVue.use(ViewUI)\nVue.config.productionTip = false\nVue.component(&#39;v-list&#39;, VList)</code></pre> '}}]);