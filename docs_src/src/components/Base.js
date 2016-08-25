import React from 'react';

const Base = () => (
<div>
  <h2 className="section">1. Globals</h2>
  <div className="preview">
    <div className="module">
      <div className="c-grid">
        <div className="c-grid__cell">
          <div className="drop u-bg-primary"></div>
        </div>
        <div className="c-grid__cell">
          <div className="drop u-bg-secondary"></div>
        </div>
        <div className="c-grid__cell">
          <div className="drop u-bg-black"></div>
        </div>
        <div className="c-grid__cell">
          <div className="drop u-bg-darkGray"></div>
        </div>
        <div className="c-grid__cell">
          <div className="drop u-bg-gray"></div>
        </div>
        <div className="c-grid__cell">
          <div className="drop u-bg-lightGray"></div>
        </div>
        <div className="c-grid__cell">
          <div className="drop u-bg-darkWhite"></div>
        </div>
        <div className="c-grid__cell">
          <div className="drop u-bg-white"></div>
        </div>
      </div>
    </div>
  </div>
  <h2 className="section">2. Typograpy</h2>
  <div className="preview">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
    <h4>Heading4</h4>
    <h5>Heading5</h5>
    <h6>Heading6</h6>
    <p>The base type is 16px over 1.5 line height (24px)</p>
    <strong>Bolded</strong>
    <br/>
    <em>Italicized</em>
    <br/>
    <a>Colored</a>
    <br/>
    <u>Underlined</u>
  </div>
  <h2 className="section">2. Forms</h2>
  <div className="preview">
    <div className="module">
      <input type="text"/>
    </div>
    <div className="module">
      <select>
        <option value="1">one</option>
        <option value="2">two </option>
        <option value="3">three</option>
      </select>
    </div>
    <div className="module">
      <label>
      <input type="checkbox" />
      <span>this is checkbox</span>
      </label>
    </div>
  </div>
  <h2 className="section">3. Lists</h2>
  <div className="preview">
    <div className="module">
      <ul>
        <li>
          dog
          <ul>
            <li>pug</li>
            <li>shiba</li>
          </ul>
        </li>
        <li>
          cat
          <ul>
            <li>exotic</li>
            <li>persian</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="module">
      <ol>
        <li>
          install
          <ul>
            <li>git</li>
            <li>npm</li>
          </ul>
        </li>
        <li>
          build
          <ul>
            <li>npm run build</li>
            <li>gulp</li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
  <h2 className="section">4. Table</h2>
  <div className="preview">
    <div className="module">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>key1</td>
            <td>val1</td>
          </tr>
          <tr>
            <td>key2</td>
            <td>val2</td>
          </tr>
        </tbody> 
      </table>
    </div>
  </div>
  <h2 className="section">5. Code</h2>
  <div className="preview">
    <p>this is code block<code>&lt;code&gt;</code></p>
    <pre>
      <code dangerouslySetInnerHTML={{__html: '.fixture {\n\tbackground-color: blue;\n}'}}></code>
    </pre>
  </div>
</div>
);
export default Base;