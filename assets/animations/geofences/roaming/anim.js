(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];


    // symbols:


    (lib.RoamingRed = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#A42222").s().de(-7.2, -7.2, 14.5, 14.5);
        this.shape.setTransform(-0.0084, 0.0244, 0.2759, 0.2759);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(164,34,34,0.2)").s("#A42222").ss(2, 1, 1).de(-29.7, -29.7, 59.5, 59.5);
        this.shape_1.setTransform(-0.0009, 0.0407, 0.9748, 0.9748);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30, -30, 60, 60);


    (lib.RoamingGreen = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#A2D321").s().de(-7.2, -7.2, 14.5, 14.5);
        this.shape.setTransform(-0.0084, 0.0244, 0.2759, 0.2759);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(162,211,33,0.2)").s("#A2D321").ss(2, 1, 1).de(-29.7, -29.7, 59.5, 59.5);
        this.shape_1.setTransform(-0.0009, 0.0407, 0.9748, 0.9748);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30, -30, 60, 60);


    (lib.Scene_1_Roaming_2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Roaming_2
        this.instance = new lib.RoamingRed("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(133, -33.25);

        this.instance_1 = new lib.RoamingGreen("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(86.3, 140.65);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 52,
            y: 123.75
        }, 47, cjs.Ease.quadInOut).wait(1).to({
            x: 52.2382,
            y: 123.8674
        }, 0).wait(1).to({
            x: 52.6535,
            y: 124.072
        }, 0).wait(1).to({
            x: 53.2562,
            y: 124.369
        }, 0).wait(1).to({
            x: 54.0573,
            y: 124.7636
        }, 0).wait(1).to({
            x: 55.0676,
            y: 125.2615
        }, 0).wait(1).to({
            x: 56.2985,
            y: 125.8679
        }, 0).wait(1).to({
            x: 57.7611,
            y: 126.5885
        }, 0).wait(1).to({
            x: 59.4658,
            y: 127.4285
        }, 0).wait(1).to({
            x: 61.4223,
            y: 128.3925
        }, 0).wait(1).to({
            x: 63.6385,
            y: 129.4844
        }, 0).wait(1).to({
            x: 66.1199,
            y: 130.707
        }, 0).wait(1).to({
            x: 68.8684,
            y: 132.0613
        }, 0).wait(1).to({
            x: 71.8815,
            y: 133.5458
        }, 0).wait(1).to({
            x: 75.1506,
            y: 135.1566
        }, 0).wait(1).to({
            x: 78.6603,
            y: 136.8859
        }, 0).wait(1).to({
            x: 82.3873,
            y: 138.7222
        }, 0).to({
            _off: true
        }, 1).wait(21).to({
            _off: false,
            x: 107.75,
            y: 167.2
        }, 0).wait(1).to({
            x: 106.8505,
            y: 168.7292
        }, 0).wait(1).to({
            x: 105.8861,
            y: 170.3686
        }, 0).wait(1).to({
            x: 104.8538,
            y: 172.1236
        }, 0).wait(1).to({
            x: 103.75,
            y: 174
        }, 0).wait(1).to({
            x: 101.6617,
            y: 175.5238
        }, 0).wait(1).to({
            x: 99.4348,
            y: 177.1487
        }, 0).wait(1).to({
            x: 97.0632,
            y: 178.8791
        }, 0).wait(1).to({
            x: 94.5412,
            y: 180.7193
        }, 0).wait(1).to({
            x: 91.8634,
            y: 182.6733
        }, 0).wait(1).to({
            x: 89.0248,
            y: 184.7445
        }, 0).wait(1).to({
            x: 86.0213,
            y: 186.936
        }, 0).wait(1).to({
            x: 82.85,
            y: 189.25
        }, 0).wait(1).to({
            x: 81.1121,
            y: 192.8579
        }, 0).wait(1).to({
            x: 79.286,
            y: 196.6488
        }, 0).wait(1).to({
            x: 77.3728,
            y: 200.6206
        }, 0).wait(1).to({
            x: 75.3748,
            y: 204.7685
        }, 0).wait(1).to({
            x: 73.2955,
            y: 209.0851
        }, 0).wait(1).to({
            x: 71.1399,
            y: 213.56
        }, 0).wait(1).to({
            x: 68.9145,
            y: 218.1798
        }, 0).wait(1).to({
            x: 66.6271,
            y: 222.9285
        }, 0).wait(1).to({
            x: 64.2866,
            y: 227.7874
        }, 0).wait(1).to({
            x: 61.9029,
            y: 232.736
        }, 0).wait(1).to({
            x: 59.4866,
            y: 237.7522
        }, 0).wait(1).to({
            x: 57.0485,
            y: 242.8135
        }, 0).wait(1).to({
            x: 54.5996,
            y: 247.8974
        }, 0).wait(1).to({
            x: 52.1503,
            y: 252.9823
        }, 0).wait(1).to({
            x: 49.7102,
            y: 258.0478
        }, 0).wait(1).to({
            x: 47.2883,
            y: 263.0756
        }, 0).wait(1).to({
            x: 44.8925,
            y: 268.0493
        }, 0).wait(1).to({
            x: 42.5294,
            y: 272.9552
        }, 0).wait(1).to({
            x: 40.2045,
            y: 277.7815
        }, 0).wait(1).to({
            x: 37.9225,
            y: 282.5189
        }, 0).wait(1).to({
            x: 35.6868,
            y: 287.1602
        }, 0).wait(1).to({
            x: 33.5,
            y: 291.7
        }, 0).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({
            _off: false
        }, 0).wait(1).to({
            x: 90.3582,
            y: 142.6437
        }, 0).wait(1).to({
            x: 94.516,
            y: 144.6864
        }, 0).wait(1).to({
            x: 98.7222,
            y: 146.7529
        }, 0).wait(1).to({
            x: 102.9238,
            y: 148.8171
        }, 0).wait(1).to({
            x: 107.0685,
            y: 150.8534
        }, 0).wait(1).to({
            x: 111.108,
            y: 152.8379
        }, 0).wait(1).to({
            x: 115,
            y: 154.75
        }, 0).wait(1).to({
            x: 114.7396,
            y: 155.1972
        }, 0).wait(1).to({
            x: 114.4468,
            y: 155.6999
        }, 0).wait(1).to({
            x: 114.1202,
            y: 156.2608
        }, 0).wait(1).to({
            x: 113.7581,
            y: 156.8826
        }, 0).wait(1).to({
            x: 113.3588,
            y: 157.5683
        }, 0).wait(1).to({
            x: 112.9205,
            y: 158.321
        }, 0).wait(1).to({
            x: 112.4412,
            y: 159.1441
        }, 0).wait(1).to({
            x: 111.9189,
            y: 160.041
        }, 0).wait(1).to({
            x: 111.3514,
            y: 161.0156
        }, 0).wait(1).to({
            x: 110.7363,
            y: 162.0718
        }, 0).wait(1).to({
            x: 110.0713,
            y: 163.2137
        }, 0).wait(1).to({
            x: 109.3538,
            y: 164.4459
        }, 0).wait(1).to({
            x: 108.581,
            y: 165.7731
        }, 0).to({
            _off: true
        }, 1).wait(35));

    }).prototype = p = new cjs.MovieClip();


    (lib.Scene_1_Roaming_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Roaming_1
        this.instance = new lib.RoamingRed("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(103.5, 296.4);
        this.instance._off = true;

        this.instance_1 = new lib.RoamingGreen("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(137.55, 167.05);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({
            _off: false
        }, 0).to({
            x: 157.5,
            y: 177.25
        }, 35, cjs.Ease.quadInOut).wait(1).to({
            x: 157.1764,
            y: 177.0846
        }, 0).wait(1).to({
            x: 156.7559,
            y: 176.8696
        }, 0).wait(1).to({
            x: 156.2367,
            y: 176.6041
        }, 0).wait(1).to({
            x: 155.6169,
            y: 176.2872
        }, 0).wait(1).to({
            x: 154.8949,
            y: 175.9181
        }, 0).wait(1).to({
            x: 154.0686,
            y: 175.4956
        }, 0).wait(1).to({
            x: 153.1363,
            y: 175.0189
        }, 0).wait(1).to({
            x: 152.096,
            y: 174.4871
        }, 0).wait(1).to({
            x: 150.9458,
            y: 173.899
        }, 0).wait(1).to({
            x: 149.6838,
            y: 173.2537
        }, 0).wait(1).to({
            x: 148.3079,
            y: 172.5503
        }, 0).wait(1).to({
            x: 146.8162,
            y: 171.7876
        }, 0).wait(1).to({
            x: 145.2066,
            y: 170.9647
        }, 0).wait(1).to({
            x: 143.4773,
            y: 170.0805
        }, 0).wait(1).to({
            x: 141.6261,
            y: 169.134
        }, 0).wait(1).to({
            x: 139.651,
            y: 168.1242
        }, 0).to({
            _off: true
        }, 1).wait(21).to({
            _off: false,
            x: 61.1,
            y: 127.9
        }, 0).wait(1).to({
            x: 59.4663,
            y: 127.0652
        }, 0).wait(1).to({
            x: 58.0117,
            y: 126.3219
        }, 0).wait(1).to({
            x: 56.7293,
            y: 125.6666
        }, 0).wait(1).to({
            x: 55.6121,
            y: 125.0958
        }, 0).wait(1).to({
            x: 54.6533,
            y: 124.6058
        }, 0).wait(1).to({
            x: 53.846,
            y: 124.1933
        }, 0).wait(1).to({
            x: 53.1834,
            y: 123.8547
        }, 0).wait(1).to({
            x: 52.6589,
            y: 123.5867
        }, 0).wait(1).to({
            x: 52.2665,
            y: 123.3862
        }, 0).wait(1).to({
            x: 52,
            y: 123.25
        }, 0).to({
            x: 133,
            y: -33.25
        }, 48, cjs.Ease.quadIn).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({
            _off: false
        }, 0).wait(1).to({
            x: 135.318,
            y: 165.907
        }, 0).wait(1).to({
            x: 132.9558,
            y: 164.6973
        }, 0).wait(1).to({
            x: 130.4617,
            y: 163.4201
        }, 0).wait(1).to({
            x: 127.8335,
            y: 162.0742
        }, 0).wait(1).to({
            x: 125.0693,
            y: 160.6587
        }, 0).wait(1).to({
            x: 122.1674,
            y: 159.1726
        }, 0).wait(1).to({
            x: 119.1259,
            y: 157.615
        }, 0).wait(1).to({
            x: 115.9429,
            y: 155.985
        }, 0).wait(1).to({
            x: 112.6169,
            y: 154.2818
        }, 0).wait(1).to({
            x: 109.1463,
            y: 152.5045
        }, 0).wait(1).to({
            x: 105.5295,
            y: 150.6523
        }, 0).wait(1).to({
            x: 101.7652,
            y: 148.7246
        }, 0).wait(1).to({
            x: 97.8521,
            y: 146.7207
        }, 0).wait(1).to({
            x: 93.7892,
            y: 144.6401
        }, 0).wait(1).to({
            x: 89.5754,
            y: 142.4823
        }, 0).wait(1).to({
            x: 85.2102,
            y: 140.2468
        }, 0).wait(1).to({
            x: 80.6928,
            y: 137.9335
        }, 0).wait(1).to({
            x: 76.0231,
            y: 135.5421
        }, 0).wait(1).to({
            x: 71.2009,
            y: 133.0727
        }, 0).wait(1).to({
            x: 66.2263,
            y: 130.5252
        }, 0).to({
            _off: true
        }, 1).wait(59));

    }).prototype = p = new cjs.MovieClip();


    // stage content:
    (lib.RoamingGeofence = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        this.___GetDepth___ = function (obj) {
            var depth = obj.depth;
            var cameraObj = this.___camera___instance;
            if (cameraObj && cameraObj.depth && obj.isAttachedToCamera) {
                depth += depth + cameraObj.depth;
            }
            return depth;
        }
        this.___needSorting___ = function () {
            for (var i = 0; i < this.getNumChildren() - 1; i++) {
                var prevDepth = this.___GetDepth___(this.getChildAt(i));
                var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
                if (prevDepth < nextDepth)
                    return true;
            }
            return false;
        }
        this.___sortFunction___ = function (obj1, obj2) {
            return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
        }
        this.on('tick', function (event) {
            var curTimeline = event.currentTarget;
            if (curTimeline.___needSorting___()) {
                this.sortChildren(curTimeline.___sortFunction___);
            }
        });

        // timeline functions:
        this.frame_143 = function () {
            this.___loopingOver___ = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(143).call(this.frame_143).wait(1));

        // Roaming_1_obj_
        this.Roaming_1 = new lib.Scene_1_Roaming_1();
        this.Roaming_1.name = "Roaming_1";
        this.Roaming_1.parent = this;
        this.Roaming_1.depth = 0;
        this.Roaming_1.isAttachedToCamera = 0
        this.Roaming_1.isAttachedToMask = 0
        this.Roaming_1.layerDepth = 0
        this.Roaming_1.layerIndex = 0
        this.Roaming_1.maskLayerName = 0

        this.timeline.addTween(cjs.Tween.get(this.Roaming_1).wait(48).to({
            regX: 104.7,
            regY: 131.6,
            x: 104.7,
            y: 131.6
        }, 0).wait(16).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: 104.7,
            regY: 131.6,
            x: 104.7,
            y: 131.6
        }, 0).wait(20).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: 104.7,
            regY: 131.6,
            x: 104.7,
            y: 131.6
        }, 0).wait(9).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(49));

        // Roaming_2_obj_
        this.Roaming_2 = new lib.Scene_1_Roaming_2();
        this.Roaming_2.name = "Roaming_2";
        this.Roaming_2.parent = this;
        this.Roaming_2.setTransform(133, -33.2, 1, 1, 0, 0, 0, 133, -33.2);
        this.Roaming_2.depth = 0;
        this.Roaming_2.isAttachedToCamera = 0
        this.Roaming_2.isAttachedToMask = 0
        this.Roaming_2.layerDepth = 0
        this.Roaming_2.layerIndex = 1
        this.Roaming_2.maskLayerName = 0

        this.timeline.addTween(cjs.Tween.get(this.Roaming_2).wait(48).to({
            regX: 83.2,
            regY: 129.3,
            x: 83.2,
            y: 129.3
        }, 0).wait(16).to({
            regX: 133,
            regY: -33.2,
            x: 133,
            y: -33.2
        }, 0).wait(1).to({
            regX: 83.2,
            regY: 129.3,
            x: 83.2,
            y: 129.3
        }, 0).wait(6).to({
            regX: 133,
            regY: -33.2,
            x: 133,
            y: -33.2
        }, 0).wait(1).to({
            regX: 83.2,
            regY: 129.3,
            x: 83.2,
            y: 129.3
        }, 0).wait(13).to({
            regX: 133,
            regY: -33.2,
            x: 133,
            y: -33.2
        }, 0).wait(1).to({
            regX: 83.2,
            regY: 129.3,
            x: 83.2,
            y: 129.3
        }, 0).wait(3).to({
            regX: 133,
            regY: -33.2,
            x: 133,
            y: -33.2
        }, 0).wait(1).to({
            regX: 83.2,
            regY: 129.3,
            x: 83.2,
            y: 129.3
        }, 0).wait(7).to({
            regX: 133,
            regY: -33.2,
            x: 133,
            y: -33.2
        }, 0).wait(1).to({
            regX: 83.2,
            regY: 129.3,
            x: 83.2,
            y: 129.3
        }, 0).wait(21).to({
            regX: 133,
            regY: -33.2,
            x: 133,
            y: -33.2
        }, 0).to({
            _off: true
        }, 1).wait(24));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(107.5, 66.8, 80, 259.59999999999997);
    // library properties:
    lib.properties = {
        id: '13A00F0498EF4B45A93ACA7D2C496291',
        width: 208,
        height: 260,
        fps: 24,
        color: "#FFFFFF",
        opacity: 0.00,
        manifest: [],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function () {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function () {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['13A00F0498EF4B45A93ACA7D2C496291'] = {
        getStage: function () {
            return exportRoot.getStage();
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


    // Layer depth API : 

    AdobeAn.Layer = new function () {
        this.getLayerZDepth = function (timeline, layerName) {
            if (layerName === "Camera")
                layerName = "___camera___instance";
            var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
            return eval(script);
        }
        this.setLayerZDepth = function (timeline, layerName, zDepth) {
            const MAX_zDepth = 10000;
            const MIN_zDepth = -5000;
            if (zDepth > MAX_zDepth)
                zDepth = MAX_zDepth;
            else if (zDepth < MIN_zDepth)
                zDepth = MIN_zDepth;
            if (layerName === "Camera")
                layerName = "___camera___instance";
            var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
            eval(script);
        }
        this.removeLayer = function (timeline, layerName) {
            if (layerName === "Camera")
                layerName = "___camera___instance";
            var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
            eval(script);
        }
        this.addNewLayer = function (timeline, layerName, zDepth) {
            if (layerName === "Camera")
                layerName = "___camera___instance";
            zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
            var layer = new createjs.MovieClip();
            layer.name = layerName;
            layer.depth = zDepth;
            layer.layerIndex = 0;
            timeline.addChild(layer);
        }
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;