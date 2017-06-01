/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/aspect"
], function (declare, d_lang, d_aspect) {
    return declare([], {
        activate: function () {
            var properties = this._properties;
            d_aspect.after(this._contentviewer, "showContentInfo", d_lang.hitch({time: properties.time}, function (deferred, args) {
                return deferred.then(d_lang.hitch({time: this.time}, function (response) {
                    if (args[1].predefined) {
                        var time = this.time;
                        setTimeout(function () {
                            response.window.close();
                        }, time);
                    }
                    return response;
                }));
            }));
        }
    });
});