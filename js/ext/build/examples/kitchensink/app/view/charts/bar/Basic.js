Ext.define('KitchenSink.view.charts.bar.Basic', {
    extend: 'Ext.Panel',
    xtype: 'basic-bar',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    },

    exampleDescription: [
        'A basic bar chart is a chart with horizontal bars of lengths proportional to the magnitudes of the data it represents. Basic bars can be used in the same manner as the column charts. Categories are typically organized along the vertical axis and values along the horizontal axis.',
        '<p>Tapping or hovering a bar will highlight it.</p>'
    ],

    themes: {
        classic: {
            percentChangeColumn: {
                width: 75
            }
        },
        neptune: {
            percentChangeColumn: {
                width: 100
            }
        }
    },
    // </example>

    initComponent: function() {
        var me = this;

        this.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['month', 'data1' ],
            data: [
                { month: 'Jan', data1: 20 },
                { month: 'Feb', data1: 20 },
                { month: 'Mar', data1: 19 },
                { month: 'Apr', data1: 18 },
                { month: 'May', data1: 18 },
                { month: 'Jun', data1: 17 },
                { month: 'Jul', data1: 16 },
                { month: 'Aug', data1: 16 },
                { month: 'Sep', data1: 16 },
                { month: 'Oct', data1: 16 },
                { month: 'Nov', data1: 15 },
                { month: 'Dec', data1: 15 }
            ]
        });

        //<example>
        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                '->',
            {
                text: 'Preview',
                handler: function() {
                    me.down('cartesian').preview();
                }
            }]
        }];
        //</example>

        me.items = [{
            xtype: 'cartesian',
            width: '100%',
            height: 510,
            animation: {
                easing: 'easeOut',
                duration: 500
            },
            flipXY: true,
            store: this.myDataStore,
            insetPadding: 40,
            theme: 'Sky',
            interactions: 'itemhighlight',
            items: [{
                type: 'text',
                text: 'Bar Charts - Basic Bar',
                font: '22px Helvetica',
                width: 100,
                height: 30,
                x: 40, // the sprite x position
                y: 20  // the sprite y position
            }, {
                type: 'text',
                text: 'Data: Browser Stats 2012 - Internet Explorer',
                font: '10px Helvetica',
                x: 12,
                y: 480
            }, {
                type: 'text',
                text: 'Source: http://www.w3schools.com/',
                font: '10px Helvetica',
                x: 12,
                y: 490
            }],
            axes: [{
                type: 'numeric',
                position: 'bottom',
                fields: 'data1',
                renderer: function (v) { return v.toFixed(0) + '%'; },
                grid: true
            }, {
                type: 'category',
                position: 'left',
                fields: 'month',
                grid: true
            }],
            series: [{
                type: 'bar',
                xField: 'month',
                yField: 'data1',
                style: {
                    opacity: 0.80,
                    minGapWidth: 10
                },
                highlightCfg: {
                    strokeStyle: 'black',
                    fillStyle: '#57cbd1',
                    radius: 10
                },
                label: {
                    field: 'data1',
                    display: 'insideEnd'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('month') + ': ' + storeItem.get('data1') + '%');
                    }
                }
            }]
        //<example>
        }, {
            style: 'padding-top: 10px;',
            xtype: 'gridpanel',
            columns : {
                defaults: {
                    sortable: false,
                    menuDisabled: true
                },
                items: [
                    { text: '2012', dataIndex: 'month' },
                    { text: 'IE', dataIndex: 'data1', renderer: function(v) { return v + '%'; } }
                ]
            },
            store: this.myDataStore,
            width: '100%'
        //</example>
        }];

        this.callParent();
    }
});
