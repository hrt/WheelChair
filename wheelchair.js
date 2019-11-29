// ==UserScript==
// @name         Krunker WheelChair
// @namespace    https://github.com/hrt
// @version      1.9.0
// @description  WheelChair
// @author       hrt x ttap
// @match        https://krunker.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

// note:    this script gets injected into its own isolated context/iframe
//          to console.log we would have to call window.top.console.log

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

                      
