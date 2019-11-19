// note:    this script gets injected into its own isolated context/iframe
//          to console.log we would have to call window.top.console.log

cripple_window(window.parent);
function cripple_window(_window) {
    if (!_window) {
        return;
    }

    // state is shared across all frames
    let shared_state = new Map(Object.entries({functions_to_hide: new WeakMap(), strings_to_hide: [], hidden_globals: [], init: false}));

    let invisible_define = function(obj, key, value) {
        shared_state.get('hidden_globals').push(key);
        Object.defineProperty(obj, key, {
            enumberable: false,
            configurable: false,
            writable: true,
            value: value
        });
    };

    // unique to each user
    const master_key = 'ttap#4547';
    if (!window.top[master_key]) {
        // initialise top state
        invisible_define(window.top, master_key, shared_state);
    } else {
        // restore
        shared_state = window.top[master_key];
    }

    // hook toString to hide presence
    const original_toString = _window.Function.prototype.toString;
    let hook_toString = new Proxy(original_toString, {
        apply: function(target, _this, _arguments) {
            let lookup_fn = shared_state.get('functions_to_hide').get(_this);
            if (lookup_fn) {
                return target.apply(lookup_fn, _arguments);
            }

            let ret = target.apply(_this, _arguments);
            for (var i = 0; i < shared_state.get('strings_to_hide').length; i++) {
                ret = ret.replace(shared_state.get('strings_to_hide')[i].from, shared_state.get('strings_to_hide')[i].to);
            }
            return ret;
        }
    });
    _window.Function.prototype.toString = hook_toString;

    let conceal_function = function(original_Function, hook_Function) {
        shared_state.get('functions_to_hide').set(hook_Function, original_Function);
    };

    let conceal_string = function(original_string, hook_string) {
        shared_state.get('strings_to_hide').push({from: new RegExp(hook_string.replace(/([\[|\]|\(|\)|\*|\\|\.|\+])/g,'\\$1'), 'g'), to: original_string});
    };

    // hook Object.getOwnPropertyDescriptors to hide variables from window
    const original_getOwnPropertyDescriptors = _window.Object.getOwnPropertyDescriptors;
    let hook_getOwnPropertyDescriptors = new Proxy(original_getOwnPropertyDescriptors, {
        apply: function(target, _this, _arguments) {
            try {
                var descriptors = target.apply(_this, _arguments);
            } catch (e) {
                // modify stack trace to hide proxy
                e.stack = e.stack.replace(/.*Object.*\n/g, '');
                throw e;
            }
            for (var i = 0; i < shared_state.get('hidden_globals').length; i++) {
                delete descriptors[shared_state.get('hidden_globals')[i]];
            }
            return descriptors;
        }
    });
    _window.Object.getOwnPropertyDescriptors = hook_getOwnPropertyDescriptors;

    // drawVisuals gets overwritten later - place hook before anti cheat loads
    let drawVisuals = function() {};
    const original_clearRect = _window.CanvasRenderingContext2D.prototype.clearRect;
    let hook_clearRect = new Proxy(original_clearRect, {
        apply: function(target, _this, _arguments) {
            target.apply(_this, _arguments);
            drawVisuals(_this);
        }
    });
    _window.CanvasRenderingContext2D.prototype.clearRect = hook_clearRect;

    // hook window.open to always return null (pop up blocker)
    // otherwise we would have to also patch native functions in new window
    const original_open = _window.open;
    let hook_open = new Proxy(original_open, {
        apply: function(target, _this, _arguments) {
            return null;
        }
    });
    _window.open = hook_open;

    // me, inputs, world, consts, math are objects the rest are key strings
    if (!shared_state.get('hrt')) {
        shared_state.set('hrt', function(me, inputs, world, consts, math) {
            /******************************************************/
            /* re implements code that we overwrote to place hook */
            let controls = world.controls;
            if (controls.scrollDelta) {
                controls.skipScroll = controls.scrollToSwap;
                if (!controls.scrollToSwap) {
                    controls.fakeKey(0x4e20,0x1);
                }
            }
            controls.scrollDelta = 0;
            controls.wSwap = 0;
            /******************************************************/

            const playerHeight = 11;
            const crouchDst = 3;
            const headScale = 2;
            const hitBoxPad = 1;
            const armScale = 1.3;
            const chestWidth = 2.6;
            const armInset = -.1;
            const playerScale = (2 * armScale + chestWidth + armInset) / 2;
            const SHOOT = 5, SCOPE = 6, xDr = 3, yDr = 2, JUMP = 7, CROUCH = 8;
            const PI2 = Math.PI * 2;
            let isEnemy = function(player) {return !me.team || player.team != me.team};
            let canHit = function(player) {return null == world[canSee](me, player.x3, player.y3 - player.crouchVal * crouchDst, player.z3)};
            let normaliseYaw = function(yaw) {return (yaw % PI2 + PI2) % PI2;};
            let getDir = function(a, b, c, d) {
                return Math.atan2(b - d, a - c);
            };
            let getD3D = function(a, b, c, d, e, f) {
                let g = a - d, h = b - e, i = c - f;
                return Math.sqrt(g * g + h * h + i * i);
            };
            let getXDire = function(a, b, c, d, e, f) {
                let g = Math.abs(b - e), h = getD3D(a, b, c, d, e, f);
                return Math.asin(g / h) * (b > e ? -1 : 1);
            };

            let dAngleTo = function(x, y, z) {
                let ty = normaliseYaw(getDir(controls.object.position.z, controls.object.position.x, z, x));
                let tx = getXDire(controls.object.position.x, controls.object.position.y, controls.object.position.z, x, y, z);
                let oy = normaliseYaw(controls.object.rotation.y);
                let ox = controls[pchObjc].rotation.x;
                let dYaw = Math.min(Math.abs(ty - oy), Math.abs(ty - oy - PI2), Math.abs(ty - oy + PI2));
                let dPitch = tx - ox;
                return Math.hypot(dYaw, dPitch);
            };
            let calcAngleTo = function(player) {return dAngleTo(player.x3, player.y3 + playerHeight - (headScale + hitBoxPad) / 2 - player.crouchVal * crouchDst, player.z3);};
            let calcDistanceTo = function(player) {return getD3D(player.x3, player.y3, player.z3, me.x, me.y, me.z)};
            let isCloseEnough = function(player) {let distance = calcDistanceTo(player); return me.weapon.range >= distance && ("Shotgun" != me.weapon.name || distance < 70) && ("Akimbo Uzi" != me.weapon.name || distance < 100);};
            let haveAmmo = function() {return !(me.ammos[me.weaponIndex] !== undefined && me.ammos[me.weaponIndex] == 0);};

            // target selector - based on closest to aim
            let closest = null, closestAngle = Infinity;
            let players = world.players.list;
            for (var i = 0; me.active && i < players.length; i++) {
                let e = players[i];
                if (e[isYou] || !e.active || !e[objInstances] || !isEnemy(e)) {
                    continue;
                }

                // experimental prediction removed
                e.x3 = e.x;
                e.y3 = e.y;
                e.z3 = e.z;

                if (!isCloseEnough(e) || !canHit(e)) {
                    continue;
                }

                let angle = calcAngleTo(e);
                if (angle < closestAngle) {
                    closestAngle = angle;
                    closest = e;
                }
            }
            // aimbot
            let ty = controls.object.rotation.y, tx = controls[pchObjc].rotation.x;
            if (closest) {
                let target = closest;
                let y = target.y3 + playerHeight - (headScale/* + hitBoxPad*/) / 2 - target.crouchVal * crouchDst;
                if (me.weapon.nAuto && me.didShoot) {
                    inputs[SHOOT] = 0;
                } else if (!me.aimVal) {
                    inputs[SHOOT] = 1;
                    inputs[SCOPE] = 1;
                } else {
                    inputs[SCOPE] = 1;
                }

                ty = getDir(controls.object.position.z, controls.object.position.x, target.z3, target.x3);
                tx = getXDire(controls.object.position.x, controls.object.position.y, controls.object.position.z, target.x3, y, target.z3);

                // perfect recoil control
                tx -= .3 * me[recoilAnimY];
            } else {
                inputs[SHOOT] = controls[mouseDownL];
                inputs[SCOPE] = controls[mouseDownR];
            }


            // silent aim
            inputs[xDr] = +(tx % PI2).toFixed(3);
            inputs[yDr] = +(ty % PI2).toFixed(3);

            // auto reload
            controls.keys[controls.reloadKey] = !haveAmmo() * 1;

            // bhop
            inputs[JUMP] = (controls.keys[controls.jumpKey] && !me.didJump) * 1;

            // runs once
            if (!shared_state.get('init')) {
                shared_state.set('init', true);

                drawVisuals = function(c) {
                    let scalingFactor = arguments.callee.caller.caller.arguments[0];
                    let perspective = arguments.callee.caller.caller.arguments[2];
                    let scaledWidth = c.canvas.width / scalingFactor;
                    let scaledHeight = c.canvas.height / scalingFactor;
                    let worldPosition = perspective.camera.getWorldPosition();
                    for (var i = 0; i < world.players.list.length; i++) {
                        let player = world.players.list[i];
                        let e = players[i];
                        if (e[isYou] || !e.active || !e[objInstances] || !isEnemy(e)) {
                            continue;
                        }

                        // the below variables correspond to the 2d box esps corners
                        // note: we can already tell what ymin ymax is
                        let xmin = Infinity;
                        let xmax = -Infinity;
                        let ymin = Infinity;
                        let ymax = -Infinity;
                        let br = false;
                        for (var j = -1; !br && j < 2; j+=2) {
                            for (var k = -1; !br && k < 2; k+=2) {
                                for (var l = 0; !br && l < 2; l++) {
                                    let position = e[objInstances].position.clone();
                                    position.x += j * playerScale;
                                    position.z += k * playerScale;
                                    position.y += l * (playerHeight - e.crouchVal * crouchDst);
                                    if (!perspective.frustum.containsPoint(position)) {
                                        br = true;
                                        break;
                                    }
                                    position.project(perspective.camera);
                                    xmin = Math.min(xmin, position.x);
                                    xmax = Math.max(xmax, position.x);
                                    ymin = Math.min(ymin, position.y);
                                    ymax = Math.max(ymax, position.y);
                                }
                            }
                        }

                        if (br) {
                            continue;
                        }

                        xmin = (xmin + 1) / 2;
                        ymin = (ymin + 1) / 2;
                        xmax = (xmax + 1) / 2;
                        ymax = (ymax + 1) / 2;


                        c.save();
                        // save and restore these variables later so they got nothing on us
                        const original_strokeStyle = c.strokeStyle;
                        const original_lineWidth = c.lineWidth;
                        const original_font = c.font;
                        const original_fillStyle = c.fillStyle;

                        // perfect box esp
                        c.lineWidth = 5;
                        c.strokeStyle = 'rgba(255,50,50,1)';

                        let distanceScale = Math.max(.3, 1 - getD3D(worldPosition.x, worldPosition.y, worldPosition.z, e.x, e.y, e.z) / 600);
                        c.scale(distanceScale, distanceScale);
                        let xScale = scaledWidth / distanceScale;
                        let yScale = scaledHeight / distanceScale;

                        c.beginPath();
                        ymin = yScale * (1 - ymin);
                        ymax = yScale * (1 - ymax);
                        xmin = xScale * xmin;
                        xmax = xScale * xmax;
                        c.moveTo(xmin, ymin);
                        c.lineTo(xmin, ymax);
                        c.lineTo(xmax, ymax);
                        c.lineTo(xmax, ymin);
                        c.lineTo(xmin, ymin);
                        c.stroke();

                        // health bar
                        c.fillStyle = "rgba(255,50,50,1)";
                        let barMaxHeight = ymax - ymin;
                        c.fillRect(xmin - 7, ymin, -10, barMaxHeight);
                        c.fillStyle = "#00FFFF";
                        c.fillRect(xmin - 7, ymin, -10, barMaxHeight * (e.health / e.maxHealth));

                        // info
                        c.font = "60px Sans-serif";
                        c.fillStyle = "white";
                        c.strokeStyle='black';
                        c.lineWidth = 1;
                        let x = xmax + 7;
                        let y = ymax;
                        c.fillText(e.name, x, y);
                        c.strokeText(e.name, x, y);
                        c.font = "30px Sans-serif";
                        y += 35;
                        c.fillText(e.weapon.name, x, y);
                        c.strokeText(e.weapon.name, x, y);
                        y += 35;
                        c.fillText(e.health + ' HP', x, y);
                        c.strokeText(e.health + ' HP', x, y);

                        c.strokeStyle = original_strokeStyle;
                        c.lineWidth = original_lineWidth;
                        c.font = original_font;
                        c.fillStyle = original_fillStyle;
                        c.restore();

                        // skelly chams
                        // note: this can be done better
                        if (e.legMeshes[0]) {
                            let material = e.legMeshes[0].material;
                            material.alphaTest = 1;
                            material.depthTest = false;
                            material.fog = false;
                            material.emissive.g = 1;
                            material.wireframe = true;
                        }

                    }
                };
            };
        })
    }

    const handler = {
      construct(target, args) {
        try {
            var original_fn = new target(...args);
        } catch (e) {
            // modify stack trace to hide proxy
            e.stack = e.stack.replace(/.*Object.*\n/g, '');
            throw e;
        }

        if (args.length == 2 && args[1].length > parseInt("1337 ttap#4547")) {
            let script = args[1];

            // anti anti chet & anti skid
            const version = script.match(/\w+\['exports'\]=(0[xX][0-9a-fA-F]+);/)[1];
            if (version !== "0x597b") {
                _window[atob('ZG9jdW1lbnQ=')][atob('d3JpdGU=')](atob('VmVyc2lvbiBtaXNzbWF0Y2gg') + version);
                _window[atob('bG9jYX'+'Rpb24'+'=')][atob('aHJ'+'lZg='+'=')] = atob('aHR0cHM6'+'Ly9naXRodWIuY2'+'9tL2hydC93aGVlb'+'GNoYWly');
            }

            // note: this window is not the main window
            window['canSee'] = script.match(/,this\['(\w+)'\]=function\(\w+,\w+,\w+,\w+,\w+\){if\(!\w+\)return!\w+;/)[1];
            window['pchObjc'] = script.match(/\(\w+,\w+,\w+\),this\['(\w+)'\]=new \w+\['\w+'\]\(\)/)[1];
            window['objInstances'] = script.match(/\[\w+\]\['\w+'\]=!\w+,this\['\w+'\]\[\w+\]\['\w+'\]&&\(this\['\w+'\]\[\w+\]\['(\w+)'\]\['\w+'\]=!\w+/)[1];
            window['isYou'] = script.match(/,this\['\w+'\]=!\w+,this\['\w+'\]=!\w+,this\['(\w+)'\]=\w+,this\['\w+'\]\['length'\]=\w+,this\[/)[1];
            window['recoilAnimY'] = script.match(/\w*1,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*1,this\['\w+'\]=\w*1,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,/)[1];
            window['mouseDownL'] = script.match(/this\['\w+'\]=function\(\){this\['(\w+)'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]={}/)[1];
            window['mouseDownR'] = script.match(/this\['\w+'\]=function\(\){this\['(\w+)'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]={}/)[2];

            const inputs = script.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[2];
            const world = script.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[1];
            const consts = script.match(/\w+\['\w+'\]\),\w+\['\w+'\]\(\w+\['\w+'\],\w+\['\w+'\]\+\w+\['\w+'\]\*(\w+)/)[1];
            const me = script.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[3];
            const math = script.match(/\\x20\-50\%\)\\x20rotate\('\+\((\w+)\['\w+'\]\(\w+\[\w+\]\['\w+'\]/)[1];


            const code_to_overwrite = script.match(/(\w+\['\w+'\]&&\(\w+\['\w+'\]=\w+\['\w+'\],!\w+\['\w+'\]&&\w+\['\w+'\]\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0),!\w+\['\w+'\]&&\w+\['\w+'\]\['push'\]\(\w+\),\w+\['\w+'\]\(\w+,\w+,!\w*1,\w+\['\w+'\]\)/)[1];
            const ttapParams = [me, inputs, world, consts, math].toString();
            let call_hrt = `window.top['` + master_key + `'].get('hrt')(` + ttapParams + `)`;

            /*
                pad to avoid stack trace line:column number detection
                the script will have the same length as it originally had
            */
            if (call_hrt.length > code_to_overwrite.length) {
                throw 'WHEELCHAIR: target function too small ' + [call_hrt.length, code_to_overwrite.length];
            }
            let whitespaces = code_to_overwrite.match(/\s/g);
            for (var i = 0; i < whitespaces && whitespaces.length; i++) {
                call_hrt += whitespaces[i];
            }
            while (call_hrt.length < code_to_overwrite.length) {
                call_hrt += ' ';
            }

            script = script.replace(code_to_overwrite, call_hrt);
            conceal_string(code_to_overwrite, call_hrt);

            /***********************************************************************************************************/
            /* Below are some misc features which I wouldn't consider bannable                                         */
            // all weapons trails on
            script = script.replace(/\w+\['weapon'\]&&\w+\['weapon'\]\['trail'\]/g, "true")

            // color blind mode
            script = script.replace(/#9eeb56/g, '#00FFFF');

            // no zoom
            script = script.replace(/,'zoom':.+?(?=,)/g, ",'zoom':1");
            /***********************************************************************************************************/
            // bypass modification check of returned function
            const original_script = args[1];
            args[1] = script;
            let mod_fn = new target(...args);
            args[1] = original_script;
            conceal_function(original_fn, mod_fn);
            return mod_fn;
        }
        return original_fn;
      }
    };

    // we intercept game.js at the `Function` generation level
    const original_Function = _window.Function;
    let hook_Function = new Proxy(original_Function, handler);
    _window.Function = hook_Function;


    conceal_function(original_open, hook_open);
    conceal_function(original_clearRect, hook_clearRect);
    conceal_function(original_getOwnPropertyDescriptors, hook_getOwnPropertyDescriptors);
    conceal_function(original_toString, hook_toString);
    conceal_function(original_Function, hook_Function);
}
