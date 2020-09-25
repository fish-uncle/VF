(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{665:function(e,a){e.exports='<h2 id="verification-">Verification-</h2> <p>Main dependent packages used<a href="https://github.com/yiminghe/async-validator">async-validator</a></p> <p>In the verification attribute, you can configure it the same as the <code>async validator</code></p> <h3 id="example">Example</h3> <p>The input must be equal to ABC</p> <pre><code>{&#39;pattern&#39;: &#39;&#39;,&#39;validator&#39;:&#39;return value===&quot;abc&quot;&#39;,&#39;message&#39;: &#39;该项格式不正确&#39;}</code></pre><p>You can see that the function is passed in as a string</p> <p>Then the <code>rule</code> and <code>value</code> parameters will be passed in the form of new function internally</p> <h3 id="handwriting">Handwriting</h3> <p>If you don&#39;t develop on a platform, you write JSON</p> <p>It can be written like this</p> <pre><code class="language-json5">{\n  id: &#39;test_id&#39;,\n  key: &#39;test_key&#39;,\n  // ...\n  required: false,\n  rules: &#39;{\\&#39;pattern\\&#39;: \\&#39;\\&#39;,\\&#39;validator\\&#39;:\\&#39;return value===&quot;abc&quot;\\&#39;,\\&#39;message\\&#39;: \\&#39;该项格式不正确\\&#39;}&#39;\n}</code></pre> '}}]);