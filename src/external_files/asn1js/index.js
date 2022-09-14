(typeof define !== 'undefined' ? define : function (factory) {
  if (typeof module === 'object') {
    factory((name) => {
      return require(name);
    });
  } else {
    factory((name) => {
      return window[name.substring(2)];
    });
  }
})((require) => {
  const ASN1 = require('./asn1');
  const Base64 = require('./base64');
  const Hex = require('./hex');
  const maxLength = 10240;
  const reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
  const tree = id('tree');
  const dump = id('dump');
  const wantHex = id('wantHex');
  const area = id('area');
  const file = id('file');
  const examples = id('examples');
  let hash = null;

  require('./dom'); // side effect: augment ASN1
  if (!window.console || !window.console.log) // IE8 with closed developer tools
  {
    window.console = { log() {} };
  }

  function id(elem) {
    return document.getElementById(elem);
  }

  function text(el, string) {
    if ('textContent' in el) {
      el.textContent = string;
    } else {
      el.innerText = string;
    }
  }

  function decode(der, offset) {
    offset = offset || 0;
    tree.innerHTML = '';
    dump.innerHTML = '';
    try {
      const asn1 = ASN1.decode(der, offset);

      tree.appendChild(asn1.toDOM());
      if (wantHex.checked) {
        dump.appendChild(asn1.toHexDOM());
      }

      const b64 = (der.length < maxLength) ? asn1.toB64String() : '';

      if (area.value === '') {
        area.value = Base64.pretty(b64);
      }

      try {
        window.location.hash = hash = `#${b64}`;
      } catch (e) { // fails with "Access Denied" on IE with URLs longer than ~2048 chars
        window.location.hash = hash = '#';
      }

      const endOffset = asn1.posEnd();

      if (endOffset < der.length) {
        const p = document.createElement('p');

        p.innerText = `Input contains ${der.length - endOffset} more bytes to decode.`;
        const button = document.createElement('button');

        button.innerText = 'try to decode';
        button.onclick = function () {
          decode(der, endOffset);
        };

        p.appendChild(button);
        tree.insertBefore(p, tree.firstChild);
      }
    } catch (e) {
      text(tree, e);
    }
  }

  function decodeText(val) {
    try {
      const der = reHex.test(val) ? Hex.decode(val) : Base64.unarmor(val);

      decode(der);
    } catch (e) {
      text(tree, e);
      dump.innerHTML = '';
    }
  }

  function decodeBinaryString(str) {
    let der;

    try {
      if (reHex.test(str)) {
        der = Hex.decode(str);
      } else if (Base64.re.test(str)) {
        der = Base64.unarmor(str);
      } else {
        der = str;
      }

      decode(der);
    } catch (e) {
      text(tree, 'Cannot decode file.');
      dump.innerHTML = '';
    }
  }

  // set up buttons
  id('butDecode').onclick = function () {
    decodeText(area.value);
  };

  id('butClear').onclick = function () {
    area.value = '';
    file.value = '';
    tree.innerHTML = '';
    dump.innerHTML = '';
    hash = window.location.hash = '';
  };

  id('butExample').onclick = function () {
    console.log('Loading example:', examples.value);
    const request = new XMLHttpRequest();

    request.open('GET', `examples/${examples.value}`, true);
    request.onreadystatechange = function () {
      if (this.readyState !== 4) {
        return;
      }

      if (this.status >= 200 && this.status < 400) {
        area.value = this.responseText;
        decodeText(this.responseText);
      } else {
        console.log('Error loading example.');
      }
    };

    request.send();
  };

  // this is only used if window.FileReader
  function read(f) {
    area.value = ''; // clear text area, will get b64 content
    const r = new FileReader();

    r.onloadend = function () {
      if (r.error) {
        alert(`Your browser couldn't read the specified file (error code ${r.error.code}).`);
      } else {
        decodeBinaryString(r.result);
      }
    };

    r.readAsBinaryString(f);
  }

  function load() {
    if (file.files.length === 0) {
      alert('Select a file to load first.');
    } else {
      read(file.files[0]);
    }
  }

  function loadFromHash() {
    if (window.location.hash && window.location.hash != hash) {
      hash = window.location.hash;
      // Firefox is not consistent with other browsers and returns an
      // already-decoded hash string so we risk double-decoding here,
      // but since % is not allowed in base64 nor hexadecimal, it's ok
      const val = decodeURIComponent(hash.substr(1));

      if (val.length) {
        decodeText(val);
      }
    }
  }

  function stop(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function dragAccept(e) {
    stop(e);
    if (e.dataTransfer.files.length > 0) {
      read(e.dataTransfer.files[0]);
    }
  }

  // main
  if ('onhashchange' in window) {
    window.onhashchange = loadFromHash;
  }

  loadFromHash();
  document.ondragover = stop;
  document.ondragleave = stop;
  if ('FileReader' in window && 'readAsBinaryString' in (new FileReader())) {
    file.style.display = 'block';
    file.onchange = load;
    document.ondrop = dragAccept;
  }
});
