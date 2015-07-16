/*
 * JSONPLoader
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2012 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * @module PreloadJS
 */

// namespace:
this.createjs = this.createjs || {};

(function () {
	"use strict";

	// constructor
	/**
	 * A loader for JSONP files, which are JSON-formatted text files, wrapped in a callback. To load regular JSON
	 * without a callback use the {{#crossLink "JSONLoader"}}{{/crossLink}} instead. To load JSON-formatted manifests,
	 * use {{#crossLink "ManifestLoader"}}{{/crossLink}}, and to load EaselJS SpriteSheets, use
	 * {{#crossLink "SpriteSheetLoader"}}{{/crossLink}}.
	 *
	 * Note that JSONP files loaded concurrently require a <em>unique</em> callback. To ensure JSONP files are loaded
	 * in order, either use the {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}} method (set to 1),
	 * or set {{#crossLink "LoadItem/maintainOrder:property"}}{{/crossLink}} on items with the same callback.
	 * @class JSONPLoader
	 * @param {LoadItem|Object} loadItem
	 * @extends AbstractLoader
	 * @constructor
	 */
	function JSONPLoader(loadItem) {
		this.AbstractLoader_constructor(loadItem, false, createjs.AbstractLoader.JSONP);
		this.setTag(document.createElement("script"));
		this.getTag().type = "text/javascript";
	};

	var p = createjs.extend(JSONPLoader, createjs.AbstractLoader);
	var s = JSONPLoader;


	// static methods
	/**
	 * Determines if the loader can load a specific item. This loader can only load items that are of type
	 * {{#crossLink "AbstractLoader/JSONP:property"}}{{/crossLink}}.
	 * @method canLoadItem
	 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
	 * @returns {Boolean} Whether the loader can load the item.
	 * @static
	 */
	s.canLoadItem = function (item) {
		return item.type == createjs.AbstractLoader.JSONP || item._loadAsJSONP;
	};

	// public methods
	p.cancel = function () {
		this.AbstractLoader_cancel();
		this._dispose();
	};

	/**
	 * Loads the JSONp file.  Because of the unique loading needs of jsonP
	 * we don't use the AbstractLoader.load() method.
	 *
	 * @method load
	 *
	 */
	p.load = function () {
		if (this._item.callback == null) {
			throw new Error('callback is required for loading JSONP requests.');
		}

		// TODO: Look into creating our own iFrame to handle the load
		// In the first attempt, FF did not get the result
		//   result instanceof Object did not work either
		//   so we would need to clone the result.
		if (window[this._item.callback] != null) {
			throw new Error(
				"JSONP callback '" +
				this._item.callback +
				"' already exists on window. You need to specify a different callback or re-name the current one.");
		}

		window[this._item.callback] = createjs.proxy(this._handleLoad, this);
		window.document.body.appendChild(this._tag);

		this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);

		// Load the tag
		this._tag.src = this._item.src;
	};

	// private methods
	/**
	 * Handle the JSONP callback, which is a public method defined on `window`.
	 * @method _handleLoad
	 * @param {Object} data The formatted JSON data.
	 * @private
	 */
	p._handleLoad = function (data) {
		this._result = this._rawResult = data;
		this._sendComplete();

		this._dispose();
	};

	/**
	 * The tag request has not loaded within the time specfied in loadTimeout.
	 * @method _handleError
	 * @param {Object} event The XHR error event.
	 * @private
	 */
	p._handleTimeout = function () {
		this._dispose();
		this.dispatchEvent(new createjs.ErrorEvent("timeout"));
	};

	/**
	 * Clean up the JSONP load. This clears out the callback and script tag that this loader creates.
	 * @method _dispose
	 * @private
	 */
	p._dispose = function () {
		window.document.body.removeChild(this._tag);
		delete window[this._item.callback];

		clearTimeout(this._loadTimeout);
	};

	createjs.JSONPLoader = createjs.promote(JSONPLoader, "AbstractLoader");

}());
