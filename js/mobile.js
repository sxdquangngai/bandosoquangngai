CONFIG.USEMINIZOOMCONTROL = true; // 小さいズームコントロールを使用
CONFIG.USEGPS = true; // GPS機能を使用
CONFIG.OVERLAPLEFTPANEL = true; // パネルを地図に重ねて表示
CONFIG.MOBILE = true; // モバイル用

if ( !CONFIG.UI ) CONFIG.UI = {};

CONFIG.UI.MENU = [
  /*
  {
    title : "国土地理院ホームページ",
    icon : "./image/system/tool-icon-gsi.png",
    description : "",
    url : "https://www.gsi.go.jp/",
    target : "_blank"
  },
  */
  {
    id : "reset",
    icon : "./image/system/tool-icon-reload.png",
    description : "Bạn có thể quay lại màn hình ban đầu"
  },
  {
    id: 'menu',
    icon : "./image/system/tool-icon-menu.png",
    description : "",
    childViewStyle : "popupmenu",
    popupDirection: "bottom",
    children: [      
      {
        id : "share",
        title : "chia sẻ",
        keepPanel : true,
        icon : "./image/system/tool-icon-share.png",
        description : ""
      },    
      {
        title : "cài đặt",
        icon : "./image/system/tool-icon-setting.png",
        description : "",
        childrenWidth: 240,
        childViewStyle : "popuplist",
        popupDirection: "bottom",
        children: [
          {
            title: 'hiển thị lưới',
            arrow: true,
            textAlign: "left",
            childrenWidth: 230,
            childViewStyle : "popuplist",
            popupDirection: "left",
            children: [
              {
                id: CONFIG.PARAMETERNAMES.LATLNGGRID,
                title: 'lưới vĩ độ và kinh độ',
                typeA: 'check',
                defaultCheck: false
              },
              {
                id: CONFIG.PARAMETERNAMES.UTMGRID,
                title: 'lưới UTM',
                typeA: 'check',
                defaultCheck: false
              },
              {
                id: CONFIG.PARAMETERNAMES.TILEGRID,
                title: 'tọa độ gạch',
                typeA: 'check',
                defaultCheck: false
              },
              {
                id: CONFIG.PARAMETERNAMES.CHIIKIMESH,
                title: 'lưới vùng',
                typeA: 'check',
                defaultCheck: false
              },
              {
                id: CONFIG.PARAMETERNAMES.T25000GRID,
                title: 'đề cương',
                typeA: 'check',
                defaultCheck: false
              }/*,
              
              {
                id: CONFIG.PARAMETERNAMES.KOKUDOKIHONZUKAKU,
                title: '国土基本図図郭',
                typeA: 'check',
                defaultCheck: false,
                hidden : CONFIG.DISABLE_KOKUDOKIHONZUZUKAKU
              }
              */
            ]
          },
          {
            id: CONFIG.PARAMETERNAMES.CENTERCROSS,
            title: 'chữ thập trung tâm',
            typeA: 'check',
            defaultCheck: true
          },
          {
            id: CONFIG.PARAMETERNAMES.ZOOMGUIDE,
            title: 'Hiển thị hướng dẫn thu phóng',
            typeA: 'check',
            defaultCheck: true
          },
          {
            id: CONFIG.PARAMETERNAMES.MINIMAP,
            title: 'Bản đồ diện rộng',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.CLICKMOVE,
            title: 'bấm để di chuyển',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.MULTIPOPUP,
            title: 'Hiển thị nhiều cửa sổ bật lên',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.SAVESTATE,
            title: 'Tái tạo trạng thái kết thúc tiếp theo',
            typeA: 'check',
            defaultCheck: false,
            description : "Lần tới, bản đồ được hiển thị từ vị trí kết thúc trước đó sẽ được hiển thị. (chúng tôi sử dụng cookie)"
          },
          {
            id: "to-pc",
            title: 'Xem trong phiên bản PC'
          }
        ]
      },
      {
        title : "dụng cụ",
        icon : "./image/system/tool-icon-tool.png",
        description : "",
        childViewStyle : "panel",
        panelClass: "gsi-menu-rightpanel mobile",
        children : [
          {
            id : "sakuzu",
            title : "Bản vẽ/Tập tin",
            description : "Bạn có thể vẽ điểm, đường thẳng, mặt phẳng, v.v.",
            icon : "./image/system/tool/tool-sakuzu.png"
          },
          {
            id : "measure",
            title : "đo đạc",
            description : "Bạn có thể đo khoảng cách và diện tích",
            icon : "./image/system/tool/tool-keisoku.png"
          },
          {
            id : "danmen",
            title : "mặt cắt ngang",
            icon : "./image/system/tool/tool-danmen.png"
          },
          {
            id : "splitwindow",
            title : "so sánh cạnh nhau",
            icon : "./image/system/tool/tool-narabete.png"
          },
          {
            id : "comparisonmap",
            title : "so sánh chồng chéo",
            icon : "./image/system/tool/tool-kasanete.png"
          },
          {
            id : "3d",
            title : "３D",
            childViewStyle : "popuppanel",
            popupDirection: "left",
            icon : "./image/system/tool/tool-3d.png",
            panelClass: "gsi-menu-popuppanel mobile",
            children : [
              {
                id: 'gsi3d_l',
                title: '<span style="font-size:13pt;">大</span><br><span style="font-size:9px;">Dọc và ngang 2048px</span>',
                description : "Tạo mô hình 3D 2048 x 2048 pixel."
              },
              {
                id: 'gsi3d_s',
                title: '<span style="font-size:13pt;">小</span><br><span style="font-size:9px;">Dọc và ngang 1024px</span>',
                description : "Tạo mô hình 3D có kích thước 024×1024 pixel"
              },
              {
                id: 'gsi3d_custom',
                title: 'phong tục'
              }
            ]
          },
          {
            id : "gsiglobe",
            title : "Globe",
            icon : "./image/system/tool/tool-globe.png",
          },
          {
            id : CONFIG.PARAMETERNAMES.JIHOKULINE,
            typeA: 'check',
            title : "đường phía bắc nam châm",
            keepPanel: true,
            icon : "./image/system/tool/tool-jihoku.png",
          },
          {
            id : CONFIG.PARAMETERNAMES.TOUKYOKEN,
            typeA: 'check',
            title : "đường tròn đẳng phương",
            icon : "./image/system/tool/tool-toukyo.png"
          },
          {
            id : CONFIG.PARAMETERNAMES.HOUILINE,
            typeA: 'check',
            title : "đường phương vị",
            icon : "./image/system/tool/tool-houi.png"
          }
        ]
      }
    ]
  },
  
  {
    id: 'help',
    title : "Liên hệ",
    text : "?",
    icon : "",
    class : "gsi-header-tool-help-icon",
    description : "",
    target : "_blank",
    url : "https://sxdquangngai/help/"
  }
];