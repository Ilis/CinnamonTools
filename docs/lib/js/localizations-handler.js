/*
exported toggleLocalizationVisibility,
         docCookies
 */

/**
 * :: cookies.js ::
 * A complete cookies reader/writer framework with full unicode support.
 * Revision #1 - September 4, 2014
 * https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 * https://developer.mozilla.org/User:fusionchess
 * This framework is released under the GNU Public License, version 3 or later.
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 * Syntaxes:
 * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
 * docCookies.getItem(name)
 * docCookies.removeItem(name[, path[, domain]])
 * docCookies.hasItem(name)
 * docCookies.keys()
 */

var docCookies = {
    getItem: function(aKey) {
        if (!aKey)
            return null;

        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" +
                encodeURIComponent(aKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"),
            "$1")) || null;
    },
    setItem: function(aKey, aValue, aEnd, aPath, aDomain, aSecure) {
        if (!aKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(aKey))
            return false;

        var sExpires = "";
        if (aEnd) {
            switch (aEnd.constructor) {
                case Number:
                    sExpires = aEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + aEnd;
                    break;
                case String:
                    sExpires = "; expires=" + aEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + aEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(aKey) + "=" + encodeURIComponent(aValue) + sExpires +
            (aDomain ? "; domain=" + aDomain : "") +
            (aPath ? "; path=" + aPath : "") +
            (aSecure ? "; secure" : "");
        return true;
    },
    removeItem: function(aKey, aPath, aDomain) {
        if (!this.hasItem(aKey))
            return false;

        document.cookie = encodeURIComponent(aKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
            (aDomain ? "; domain=" + aDomain : "") + (aPath ? "; path=" + aPath : "");
        return true;
    },
    hasItem: function(aKey) {
        if (!aKey)
            return false;

        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(aKey).replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\=")).test(document.cookie);
    },
    keys: function() {
        var keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
            .split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = keys.length, nIdx = 0; nIdx < nLen; nIdx++)
            keys[nIdx] = decodeURIComponent(keys[nIdx]);

        return keys;
    }
};

function toggleLocalizationVisibility(aButton) {
    var language = aButton ? aButton.getAttribute("data-id") : docCookies.getItem("language");

    if (!Boolean(language))
        return;

    try {
        Array.prototype.slice.call(document.getElementsByClassName("localization-content"))
            .forEach(function(aEl) {
                aEl && aEl.classList.add("hidden");
            });

        Array.prototype.slice.call(document.getElementsByClassName("localization-switch"))
            .forEach(function(aEl) {
                if (aEl) {
                    aEl.classList.remove("btn-success");
                    aEl.classList.add("btn-default");

                    if (aEl.getAttribute("data-id") === language) {
                        document.title = aEl.getAttribute("data-title");
                        aEl.classList.add("btn-success");
                    }
                }
            });
    } finally {
        document.getElementById(language).classList.remove("hidden");
        docCookies.setItem("language", language);
    }
}
