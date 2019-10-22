cripple_window(window.parent);
function cripple_window(_window) {
    if (!_window) {
        return;
    }

    let shared_state = new Map(Object.entries({safe_windows: new WeakMap(), functions_to_hide: new WeakMap(), functions_to_hide_rev: new WeakMap(), strings_to_hide: [], hidden_globals: [], init: false}));

    let invisible_define = function(obj, key, value) {
        shared_state.get('hidden_globals').push(key);
        Object.defineProperty(obj, key, {
            enumberable: false,
            configurable: false,
            writable: true,
            value: value
        });
    };

    const master_key = 'ttap#4547';
    if (!_window.top[master_key]) {
        invisible_define(_window.top, master_key, shared_state);
    } else {
        shared_state = _window.top[master_key];
    }

    shared_state.get('safe_windows').set(_window, window);

    String.prototype.regexify = function() {
        return new RegExp(this.replace(/([\[|\]|\(|\)|\*|\\|\.|\+])/g,'\\$1'), 'g');
    }

    let conceal_function = function(original_Function, hook_Function) {
        shared_state.get('functions_to_hide').set(hook_Function, original_Function);
        shared_state.get('functions_to_hide_rev').set(original_Function, hook_Function);
    };

    let conceal_string = function(original_string, hook_string) {
        shared_state.get('strings_to_hide').push({from: hook_string.regexify(), to: original_string});
    };

    const original_Function_toString = _window.Function.prototype.toString;
    let hook_Function_toString = new _window.Proxy(original_Function_toString, {
        apply: function(target, _this, _arguments) {
            let lookup_fn = shared_state.get('functions_to_hide').get(_this);
            if (lookup_fn) {
                _this = lookup_fn;
            }
            try {
                var ret = Function.prototype.apply.apply(target, [_this, _arguments]);
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply.*/, '');
                throw e;
            }

            shared_state.get('strings_to_hide').forEach(function(map) {
                ret = ret.replace(map.from, map.to);
            });
            return ret;
        }
    });
    _window.Function.prototype.toString = hook_Function_toString;
    conceal_function(original_Function_toString, hook_Function_toString);

    const original_getOwnPropertyDescriptors = _window.Object.getOwnPropertyDescriptors;
    let hook_getOwnPropertyDescriptors = new _window.Proxy(original_getOwnPropertyDescriptors, {
        apply: function(target, _this, _arguments) {
            try {
                var descriptors = Function.prototype.apply.apply(target, [_this, _arguments]);
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply.*/, '');
                throw e;
            }
            shared_state.get('hidden_globals').forEach(function(key) {
                delete descriptors[key];
            });
            return descriptors;
        }
    });
    _window.Object.getOwnPropertyDescriptors = hook_getOwnPropertyDescriptors;
    conceal_function(original_getOwnPropertyDescriptors, hook_getOwnPropertyDescriptors);

    const original_getOwnPropertyNames = _window.Object.getOwnPropertyNames;
    let hook_getOwnPropertyNames = new _window.Proxy(original_getOwnPropertyNames, {
        apply: function(target, _this, _arguments) {
            try {
                var names = Function.prototype.apply.apply(target, [_this, _arguments]);
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply.*/, '');
                throw e;
            }
            shared_state.get('hidden_globals').forEach(function(key) {
                let index = names.indexOf(key);
                if (index !== -1) {
                    names.splice(index, 1);
                }
            });
            return names;
        }
    });
    _window.Object.getOwnPropertyNames = hook_getOwnPropertyNames;
    conceal_function(original_getOwnPropertyNames, hook_getOwnPropertyNames);

    const original_ownKeys = _window.Reflect.ownKeys;
    let hook_ownKeys = new _window.Proxy(original_ownKeys, {
        apply: function(target, _this, _arguments) {
            try {
                var names = Function.prototype.apply.apply(target, [_this, _arguments]);
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply.*/, '');
                throw e;
            }
            shared_state.get('hidden_globals').forEach(function(key) {
                let index = names.indexOf(key);
                if (index !== -1) {
                    names.splice(index, 1);
                }
            });
            return names;
        }
    });
    _window.Reflect.ownKeys = hook_ownKeys;
    conceal_function(original_ownKeys, hook_ownKeys);

    let drawVisuals = function() {};
    const original_clearRect = _window.CanvasRenderingContext2D.prototype.clearRect;
    const original_save = _window.CanvasRenderingContext2D.prototype.save; 
    const original_scale = _window.CanvasRenderingContext2D.prototype.scale;    
    const original_beginPath = _window.CanvasRenderingContext2D.prototype.beginPath;    
    const original_moveTo = _window.CanvasRenderingContext2D.prototype.moveTo;  
    const original_lineTo = _window.CanvasRenderingContext2D.prototype.lineTo;  
    const original_stroke = _window.CanvasRenderingContext2D.prototype.stroke;  
    const original_fillRect = _window.CanvasRenderingContext2D.prototype.fillRect;  
    const original_fillText = _window.CanvasRenderingContext2D.prototype.fillText;  
    const original_strokeText = _window.CanvasRenderingContext2D.prototype.strokeText;  
    const original_restore = _window.CanvasRenderingContext2D.prototype.restore;
    let hook_clearRect = new _window.Proxy(original_clearRect, {
        apply: function(target, _this, _arguments) {
            try {
                var ret = Function.prototype.apply.apply(target, [_this, _arguments]);
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply.*/, '');
                throw e;
            }
            drawVisuals(_this);
            return ret;
        }
    });
    _window.CanvasRenderingContext2D.prototype.clearRect = hook_clearRect;
    conceal_function(original_clearRect, hook_clearRect);

    if (!shared_state.get('hrt')) {
        shared_state.set('hrt', function(me, inputs, world, consts, math) {
            /******************************************************/
            /* re implements code that we overwrote to place hook */
            let controls = world.controls;
            if (controls[scrollDelta]) {
                controls.skipScroll = controls[scrollToSwap];
                if (!controls[scrollToSwap]) {
                    controls[fakeKey](0x4e20,0x1);
                }
            }
            controls[scrollDelta] = 0;
            controls[wSwap] = 0;
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
            let haveAmmo = function() {return !(me[ammos][me[weaponIndex]] !== undefined && me[ammos][me[weaponIndex]] == 0);};

            // target selector - based on closest to aim
            let closest = null, closestAngle = Infinity;
            let players = world.players.list;
            for (let i = 0; me.active && i < players.length; i++) {
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
                if (me.weapon[nAuto] && me[didShoot]) {
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
            inputs[JUMP] = (controls.keys[controls.jumpKey] && !me[didJump]) * 1;

            // runs once
            if (!shared_state.get('init')) {
                shared_state.set('init', true);

                drawVisuals = function(c) {
                    let scalingFactor = arguments.callee.caller.caller.arguments[0];
                    let perspective = arguments.callee.caller.caller.arguments[2];
                    let scaledWidth = c.canvas.width / scalingFactor;
                    let scaledHeight = c.canvas.height / scalingFactor;
                    let worldPosition = perspective.camera[getWorldPosition]();
                    for (let i = 0; i < world.players.list.length; i++) {
                        let player = world.players.list[i];
                        let e = players[i];
                        if (e[isYou] || !e.active || !e[objInstances] || !isEnemy(e)) {
                            continue;
                        }

                        // the below variables correspond to the 2d box esps corners
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


                        // save and restore these variables later so they got nothing on us
                        const original_strokeStyle = c.strokeStyle;
                        const original_lineWidth = c.lineWidth;
                        const original_font = c.font;
                        const original_fillStyle = c.fillStyle;
                        original_save.apply(c, []);

                        // perfect box esp
                        c.lineWidth = 5;
                        c.strokeStyle = 'rgba(255,50,50,1)';

                        let distanceScale = Math.max(.3, 1 - getD3D(worldPosition.x, worldPosition.y, worldPosition.z, e.x, e.y, e.z) / 600);
                        original_scale.apply(c, [distanceScale, distanceScale]);
                        let xScale = scaledWidth / distanceScale;
                        let yScale = scaledHeight / distanceScale;

                        original_beginPath.apply(c, []);
                        ymin = yScale * (1 - ymin);
                        ymax = yScale * (1 - ymax);
                        xmin = xScale * xmin;
                        xmax = xScale * xmax;
                        original_moveTo.apply(c, [xmin, ymin]);
                        original_lineTo.apply(c, [xmin, ymax]);
                        original_lineTo.apply(c, [xmax, ymax]);
                        original_lineTo.apply(c, [xmax, ymin]);
                        original_lineTo.apply(c, [xmin, ymin]);
                        original_stroke.apply(c, []);

                        // health bar
                        c.fillStyle = "rgba(255,50,50,1)";
                        let barMaxHeight = ymax - ymin;
                        original_fillRect.apply(c, [xmin - 7, ymin, -10, barMaxHeight]);
                        c.fillStyle = "#00FFFF";
                        original_fillRect.apply(c, [xmin - 7, ymin, -10, barMaxHeight * (e.health / e.maxHealth)]);

                        // info
                        c.font = "60px Sans-serif";
                        c.fillStyle = "white";
                        c.strokeStyle='black';
                        c.lineWidth = 1;
                        let x = xmax + 7;
                        let y = ymax;
                        original_fillText.apply(c, [e.name, x, y]);
                        original_strokeText.apply(c, [e.name, x, y]);
                        c.font = "30px Sans-serif";
                        y += 35;
                        original_fillText.apply(c, [e.weapon.name, x, y]);
                        original_strokeText.apply(c, [e.weapon.name, x, y]);
                        y += 35;
                        original_fillText.apply(c, [e.health + ' HP', x, y]);
                        original_strokeText.apply(c, [e.health + ' HP', x, y]);

                        original_restore.apply(c, []);

                        c.strokeStyle = original_strokeStyle;
                        c.lineWidth = original_lineWidth;
                        c.font = original_font;
                        c.fillStyle = original_fillStyle;

                        // skelly chams
                        if (e[legMeshes][0]) {
                            let material = e[legMeshes][0].material;
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

    let find_comments = function(script) {
        const string_chars = '\'"`';
        const multi_line_comment_start = '/*';
        const multi_line_comment_end = '*/';
        const standard_comment = '//';
        const new_line_chars = '\n\r';
        const white_space_chars = new_line_chars + ' \t';
        const escape_char = '\\';
        const reg_chars = '(=,;';
        let look_for_char = null;
        let comments = [];
        let comment_start_index = -1;
        let last_char = '';
        for (let i = 0; i < script.length - 1; i++) {
            if (script[Math.max(0,i-1)] === escape_char) {
            } else if (look_for_char !== null) {
                if (look_for_char === script[i]) {
                    look_for_char = null;
                }
            } else if (comment_start_index !== -1) {
                if ((script[i] + script[i+1]) === multi_line_comment_end) {
                    comments.push({start: comment_start_index, end: i + 2});
                    comment_start_index = -1;
                    i += 1;
                }
            } else {
                if ((script[i] + script[i+1]) === multi_line_comment_start) {
                    comment_start_index = i;
                    i += 1
                } else if ((script[i] + script[i+1]) === standard_comment) {
                    comment_start_index = i;
                    i += 2;
                    while (i < script.length && !new_line_chars.includes(script[i])) {
                        i += 1;
                    }
                    comments.push({start: comment_start_index, end: i});
                    i -= 1;
                    comment_start_index = -1;
                } else if (string_chars.includes(script[i]) || (script[i] === '/' && reg_chars.includes(last_char))) {
                    look_for_char = script[i];
                } else if (!white_space_chars.includes(script[i])) {
                    last_char = script[i];
                }
            }
        }

        return comments;
    };

    let remove_comments = function(script, comments) {
        comments = comments || find_comments(script);
        for (let i = comments.length - 1; i >= 0; i--) {
            script = script.slice(0, comments[i].start) + script.slice(comments[i].end);
        }
        return script;
    };

    String.prototype.match_with_comments = function(regexp) {
        // grouping / global flags are not supported - simple regex only
        let comments = find_comments(this);
        let script = remove_comments(this, comments);
        let match = script.match(regexp);
        if (!match) {
            return null;
        }
        let rough_match_start = match.index;
        let rough_length = match[0].length;

        comments.forEach(function(comment) {
            let comment_length = comment.end - comment.start;
            if (comment.start < rough_match_start) {
                // comment started before match
                rough_match_start += comment_length;
            }

            if (comment.start >= rough_match_start && comment.start <= rough_match_start + rough_length) {
                // comment started inside
                rough_length += comment_length;
            }
        });

        var rough_match = [this.slice(rough_match_start, rough_match_start + rough_length)];
        rough_match.index = rough_match_start;

        return rough_match;
    };

    let patch_game_js = function(script) {
        let clean_script = remove_comments(script);
        // anti anti cheat & anti skid
        let version = clean_script.match(/\w+\s*\[\s*'exports'\s*\]\s*=\s*(0[xX][0-9a-fA-F]+);/);
        if (version == null) {
            return null;
        } else if (version[1] !== "0x409") {
            _window[atob('ZG9jdW1lbnQ=')] = window[atob('ZG9jdW1lbnQ=')], _window[atob('ZG9jdW1lbnQ=')][atob('d3JpdGU=')](atob('PGEgaHJlZj0i') + atob('aHR0cHM6'+'Ly9naXRodWIuY2'+'9tL2hydC93aGVlb'+'GNoYWly') + atob('Ij4=') + atob('VmVyc2lvbiBtaXNzbWF0Y2gg') + version[1] + atob('PC9hPg==') + atob('PHNjcmlwdD53aW5kb3cubG9jYXRpb24uaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2hydC93aGVlbGNoYWlyJzwvc2NyaXB0Pg=='));
        }

        // note: this window is not the main window
        window.canSee = clean_script.match(/\s*,\s*this\s*\[\s*'(\w+)'\s*\]\s*=\s*function\s*\(\s*\w+\s*,\s*\w+\s*,\s*\w+\s*,\s*\w+\s*,\s*\w+\)\s*{\s*if\s*\(\s*(?:true\s*&&\s*)?!\s*\w+\)return\s*(?:true\s*&&\s*)?!\s*\w+;/)[1];
        window.pchObjc = clean_script.match(/\s*\(\s*\w+\s*,\s*\w+\s*,\s*\w+\)\s*,\s*this\s*\[\s*'(\w+)'\s*\]\s*=\s*new \w+\s*\[\s*'\w+'\s*\]\s*\(\s*\)/)[1];
        window.objInstances = clean_script.match(/\s*\[\w+\]\s*\[\s*'\w+'\s*\]\s*=\s*(?:true\s*&&\s*)?!\s*\w+\s*,\s*this\s*\[\s*'\w+'\s*\]\s*\[\w+\]\s*\[\s*'\w+'\s*\]\s*&&\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\[\w+\]\s*\[\s*'(\w+)'\s*\]\s*\[\s*'\w+'\s*\]\s*=\s*(?:true\s*&&\s*)?!\s*\w+/)[1];
        window.isYou = clean_script.match(/\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*(?:true\s*&&\s*)?!\s*\w+\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*(?:true\s*&&\s*)?!\s*\w+\s*,\s*this\s*\[\s*'(\w+)'\s*\]\s*=\s*\w+\s*,\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*'length'\s*\]\s*=\s*\w+\s*,\s*this\s*\[/)[1];
        window.recoilAnimY = clean_script.match(/\w*1\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*1\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*1\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'(\w+)'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*/)[1];
        window.mouseDownL = clean_script.match(/this\s*\[\s*'\w+'\s*\]\s*=\s*function\s*\(\s*\)\s*{\s*this\s*\[\s*'(\w+)'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'(\w+)'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*{\s*}/)[1];
        window.mouseDownR = clean_script.match(/this\s*\[\s*'\w+'\s*\]\s*=\s*function\s*\(\s*\)\s*{\s*this\s*\[\s*'(\w+)'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'(\w+)'\s*\]\s*=\s*\w*0\s*,\s*this\s*\[\s*'\w+'\s*\]\s*=\s*{\s*}/)[2];
        window.ammos = clean_script.match(/\s*\[\s*\w+\s*\]\s*\[\s*'\w+'\s*\]\s*\|\s*\|\s*\w+\s*\;\s*for\s*\(\s*var\s*\w+\s*\=\s*\w+\s*\;\s*\w+\s*\<\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*'length'\s*\]\s*\;\s*\+\s*\+\s*\w+\s*\)\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*'push'\s*\]\s*\(\s*\w+\s*\)\s*\,\s*this\s*\[\s*'(\w+)'\s*\]\s*\[\s*'push'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*\]\s*\[\s*'\w+'\s*\]\s*\)\s*\;\s*this\s*\[\s*'/)[1];
        window.weaponIndex = clean_script.match(/\w+&&\w+\s*\[\s*'\w+'\s*\]\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\)\s*\,\s*\w+\s*\>\s*\=\s*this\s*\[\s*'\w+'\s*\]\s*&&\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\=\s*\w+\s*\,\s*this\s*\[\s*'\w+'\s*\]\s*\=\s*!\w+\s*\,\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*this\s*\[\s*'(\w+)'\s*\]\s*\]\s*\=\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*this\s*\)\s*\)\s*\;\s*\}\s*\w+\s*\<\s*this\s*\[\s*'\w+'\s*\]\s*&&\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*-\s*\=\s*\w+\s*\,\s*\w+\s*\>\s*this\s*\[\s*'\w+'\s*\]\s*&&\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\=\s*\w+\s*\)\s*\)\s*\;\s*for\s*\(\s*\w+\s*\=\s*\w+\s*\;\s*\w+\s*\<\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*'length'\s*\]\s*\;\s*\+\s*\+\s*\w+\s*\)\s*\w+\s*\<\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*&&\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*-\s*\=\s*\w+\s*\,\s*\w+\s*\>\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*&&\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*\=\s*\w+\s*\)\s*\)\s*\;\s*\w+\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\)\s*\{\s*var\s*\w+\s*\=\s*this\s*\[\s*'\w+'\s*\]\s*\|\s*\|\s*!this\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*&&\w+\s*\[\s*\w+\s*\]\s*\;\s*/)[1];
        window.didJump = clean_script.match(/\s*\{\s*\w+\s*\[\s*'\w+'\s*\]\s*\=\s*!\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\w+\s*\[\s*'\w+'\s*\]\s*\;\s*var\s*\w+\s*\=\s*this\s*\[\s*'\w+'\s*\]\s*\?\s*\w+\s*\[\s*'\w+'\s*\]\s*:\w+\s*\[\s*'\w+'\s*\]\s*\;\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\=\s*\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\=\s*\w+\s*\;\s*\}\s*\}\s*\,\s*this\s*\[\s*'\w+'\s*\]\s*\=\s*function\s*\(\s*\w+\s*\,\s*\w+\s*\)\s*\{\s*\w+\s*\[\s*'\w+'\s*\]\s*&&\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*&&\w+\s*\?\s*this\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\)\s*:\s*\(\s*\w+\s*\[\s*'(\w+)'\s*\]\s*&&!\w+&&\s*\(\s*\w+\s*\[\s*/)[1];
        window.nAuto = clean_script.match(/\s*\{\s*'\w+':'\w+'\s*\,\s*'\w+':\w+\s*\.\s*\w+\s*\,\s*'\w+':\w+\s*\,\s*'\w+':\w+\s*\.\s*\w+\s*\,\s*'\w+':\w+\s*\.\s*\w+\s*\,\s*'\w+':\w+\s*\.\s*\w+\s*\}\s*\,\s*'\w+':!\w+\s*\,\s*'(\w+)':!\w+\s*\,\s*'\w+':\w+\s*\,\s*'\w+':!\w+\s*\,\s*'\w+':\w+\s*\,\s*'\w+':\w+\s*\,\s*'\w+':\w+\s*\.\s*\w+\s*\,\s*'\w+':\w+\s*\,\s*'\w+':\w+\s*\,\s*'/)[1];
        window.didShoot = clean_script.match(/&&\w+\s*\>\s*\=\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\/\s*\w+&&this\s*\[\s*'\w+'\s*\]\s*\<\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\/\s*\w+&&\w+\s*\[\s*'\w+'\s*\]\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\)\s*\,\s*\w+\s*\>\s*\=\s*this\s*\[\s*'\w+'\s*\]\s*&&\s*\(\s*this\s*\[\s*'\w+'\s*\]\s*\=\s*\w+\s*\,\s*this\s*\[\s*'(\w+)'\s*\]\s*\=\s*!\w+\s*\,\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*this\s*\[\s*'\w+'\s*\]\s*\]\s*\=\s*this\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*this\s*\)\s*\)\s*\;\s*\}\s*\w+\s*\<\s*/)[1];
        window.scrollToSwap = clean_script.match(/\s*\?\s*\w+:\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\[\s*'\w+'\s*\]\s*\]\s*\?\s*\w+:\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\[\s*'\w+'\s*\]\s*\]\s*\?\s*\w+:\w+\s*\,\s*\w+\s*\[\s*'(\w+)'\s*\]\s*\?\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\w+:\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\]\s*/)[1];
        window.scrollDelta = clean_script.match(/\s*\?\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\?\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\)\s*:'\w+'\s*\=\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*\?\s*\(\s*\w+\s*\+\s*\=\s*\w+\s*\*\s*\w+\s*\[\s*'(\w+)'\s*\]\s*\,\s*\w+/)[1];
        window.fakeKey = clean_script.match(/\s*\?\s*\w+:\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\[\s*'\w+'\s*\]\s*\]\s*\?\s*\w+:\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\?\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\w+:\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*&&\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*\,\s*!\w+\s*\[\s*'\w+'\s*\]\s*&&\w+\s*\[\s*'(\w+)'\s*\]\s*\(\s*\w+\s*\,\s*\w+\s*\)\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\=\s*\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\=\s*\w+\s*\,\s*!\w+\s*\[\s*'\w+'\s*\]\s*&&\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'push'\s*\]\s*\(\s*\w+\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\,\s*\w+\s*\,\s*!\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\+\s*\w+\s*\[\s*'\w+'\s*\]\s*-\w+\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\+\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\w+\s*\[\s*'\w+'\s*\]\s*\+\s*\w+\s*\.\s*\w+\s*\*\s*\w+\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\w+\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*&&!/)[1];
        window.wSwap = clean_script.match(/\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\)\s*\,\s*\w+\s*\(\s*'\w+'\s*\+\s*\w+\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\)\s*\,\s*\w+\s*\(\s*\w+\s*\,\s*!\w+\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\=\s*\w+\s*\;\s*\w+\s*\{\s*\w+\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*!\s*\=\s*\=\s*\w+&&\w+\s*\=\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*&&\w+\s*\(\s*\w+\s*\)\s*\,\s*!\w+\s*\[\s*'\w+'\s*\]\s*\)\s*\w+\s*\;\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*!\s*\=\s*\=\s*\w+&&\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*\=\s*\w+\s*\,\s*\w+\s*\<\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\)\s*&&\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\)\s*\,\s*\w+&&\s*\(\s*\w+\s*\=\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*\?\s*\w+\s*\[\s*'(\w+)'\s*\]\s*\=\s*\w+:\w+\s*\=\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*\?\s*\w+\s*\[\s*'/)[1];
        window.getWorldPosition = clean_script.match(/\s*\]\s*\[\s*\w+\s*\]\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\?\s*-\w+\s*\*\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*:\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\|\s*\|\s*\w+\s*\,\s*-\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\,\s*\w+\s*\,\s*\w+\s*\,\s*\w+\s*\*\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\|\s*\|\s*\w+\s*\)\s*\,\s*\w+\s*\)\s*\;\s*\w+\s*\(\s*!\w+\s*\)\s*\(\s*\w+\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\[\s*'\w+'\s*\]\s*\]\s*\[\s*'\w+'\s*\]\s*\[\s*\w+\s*\]\s*\[\s*'(\w+)'\s*\]\s*\(\s*\)\s*\[\s*'\w+'\s*\]\s*\(\s*\)\s*\)\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\=\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\+\s*\w+\s*\)\s*\/\s*\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\=\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\+\s*\w+\s*\)\s*\/\s*\w+\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\)\s*\;\s*\}\s*\w+\s*\(\s*!\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*&&\w+\s*\[\s*'\w+'\s*\]\s*\)\s*for\s*\(\s*\w+\s*\=\s*\w+\s*\;\s*\w+\s*\<\s*/)[1];
        window.legMeshes = clean_script.match(/\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\+\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*&&!\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\?\s*\w+:\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\.\s*\w+\s*\*\s*\w+\s*\)\s*\)\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\)\s*\,\s*'\w+'!\s*\=\s*\w+\s*\[\s*'\w+'\s*\]\s*&&\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\,\s*\w+\s*\[\s*'\w+'\s*\]\s*\+\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\?\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'\w+'\s*\]\s*\?\s*\w+\s*\.\s*\w+\s*\*\s*-\w+:\w+:\w+\s*\*\s*-\w+\s*\)\s*\)\s*\,\s*\w+-\s*\=\s*\w+\s*\*\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\w+\s*\[\s*'\w+'\s*\]\s*\)\s*\,\s*\w+-\s*\=\s*\w+\s*\*\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*\*\s*\w+\s*\[\s*'\w+'\s*\]\s*\)\s*\;\s*for\s*\(\s*var\s*\w+\s*\=\s*\w+\s*\;\s*\w+\s*\<\s*\w+\s*\[\s*'(\w+)'\s*\]\s*\[\s*'length'\s*\]\s*\;\s*\+\s*\+\s*\w+\s*\)\s*\w+\s*\[\s*'\w+'\s*\]\s*\?\s*\w+\s*\[\s*/)[1];

        const inputs = clean_script.match(/\s*\(\s*\w+\s*,\s*\w*1\)\)\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*(?:true\s*&&\s*)?!\s*(\w+)\s*\[\s*'\w+'\s*\]\s*&&\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'push'\s*\]\s*\(\s*(\w+)\)\s*,\s*(\w+)\s*\[\s*'\w+'\s*\]\s*/)[2];
        const world = clean_script.match(/\s*\(\s*\w+\s*,\s*\w*1\)\)\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*(?:true\s*&&\s*)?!\s*(\w+)\s*\[\s*'\w+'\s*\]\s*&&\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'push'\s*\]\s*\(\s*(\w+)\)\s*,\s*(\w+)\s*\[\s*'\w+'\s*\]\s*/)[1];
        const consts = clean_script.match(/\w+\s*\[\s*'\w+'\s*\]\s*\)\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*\+\w+\s*\[\s*'\w+'\s*\]\s*\*(\w+)/)[1];
        const me = clean_script.match(/\s*\(\s*\w+\s*,\s*\w*1\)\)\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*(?:true\s*&&\s*)?!\s*(\w+)\s*\[\s*'\w+'\s*\]\s*&&\s*\w+\s*\[\s*'\w+'\s*\]\s*\[\s*'push'\s*\]\s*\(\s*(\w+)\)\s*,\s*(\w+)\s*\[\s*'\w+'\s*\]\s*/)[3];
        const math = clean_script.match(/\\x20\-50\%\)\\x20rotate\s*\(\s*'\+\s*\(\s*(\w+)\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*\[\w+\]\s*\[\s*'\w+'\s*\]\s*/)[1];

        const code_to_overwrite = script.match_with_comments(/\w+\s*\[\s*'\w+'\s*\]\s*&&\s*\(\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w+\s*\[\s*'\w+'\s*\]\s*,\s*!\s*\w+\s*\[\s*'\w+'\s*\]\s*&&\s*\w+\s*\[\s*'\w+'\s*\]\s*\(\s*\w+\s*,\s*\w*1\)\)\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w*0\s*,\s*\w+\s*\[\s*'\w+'\s*\]\s*=\s*\w*0/);
        const ttapParams = [me, inputs, world, consts, math].toString();
        let call_hrt = `top['` + master_key + `'].get('hrt')(` + ttapParams + `)`;

        if (call_hrt.length + 4 > code_to_overwrite[0].length) {
            throw 'WHEELCHAIR: target function too small ' + [call_hrt.length, code_to_overwrite[0].length];
        }
        let whitespaces = code_to_overwrite[0].match(/\s/g);
        for (let i = 0; i < whitespaces && whitespaces.length; i++) {
            call_hrt += whitespaces[i];
        }
        call_hrt += '/*';
        while (call_hrt.length < code_to_overwrite[0].length - 2) {
            call_hrt += '*';
        }
        call_hrt += '*/';

        script = script.replace(code_to_overwrite[0], call_hrt);
        script = script.slice(0, code_to_overwrite.index) + call_hrt + script.slice(code_to_overwrite.index + code_to_overwrite[0].length);
        conceal_string(code_to_overwrite[0], call_hrt);

        /***********************************************************************************************************/
        /* Below are some misc features which I wouldn't consider bannable                                         */
        // all weapons trails on
        // script = script.replace(/\w+\['weapon'\]&&\w+\['weapon'\]\['trail'\]/g, "true")

        // color blind mode
        // script = script.replace(/#9eeb56/g, '#00FFFF');

        // no zoom
        // script = script.replace(/,'zoom':.+?(?=,)/g, ",'zoom':1");
        /***********************************************************************************************************/
        return script;
    }

    let handler = {
        apply: function(target, _this, _arguments) {
            try {
                var original_fn = Function.prototype.apply.apply(target, [_this, _arguments]);
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply.*/, '');
                throw e;
            }

            if (_arguments.length == 2 && typeof _arguments[1] === "string") {
                let script = patch_game_js(String(_arguments[1]));
                if (script === null) {
                    return original_fn;
                }
                const original_script = _arguments[1];
                _arguments[1] = script;
                let mod_fn = Function.prototype.apply.apply(target, [_this, _arguments]);
                _arguments[1] = original_script;
                conceal_function(original_fn, mod_fn);
                return mod_fn;
            }
            return original_fn;
        },
        
        construct: function(target, _arguments) {
            try {
                var original_fn = new target(..._arguments);
            } catch (e) {
                e.stack = e.stack.replace(/\n.*Object\.apply.*/, '');
                throw e;
            }
            if (_arguments.length == 2 && typeof _arguments[1] === "string") {
                let script = patch_game_js(String(_arguments[1]));
                if (script === null) {
                    return original_fn;
                }
                const original_script = _arguments[1];
                _arguments[1] = script;
                let mod_fn = new target(..._arguments);
                _arguments[1] = original_script;
                conceal_function(original_fn, mod_fn);
                return mod_fn;
            }
            return original_fn;
        }
    };

    const original_Function = _window.Function;
    let hook_Function = new Proxy(original_Function, handler);
    _window.Function = hook_Function;
    conceal_function(original_Function, hook_Function);
}
