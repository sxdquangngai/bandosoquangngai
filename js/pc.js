if ( !CONFIG.UI ) CONFIG.UI = {};

CONFIG.UI.MENU = [
  {
    id : "reset",
    title : "Hiển thị ban đầu",
    buttonWidth : "120px",
    icon : "./image/system/tool-icon-reload.png",
    description : "Bạn có thể quay lại màn hình ban đầu"
  },
  /*
  {
    title : "国土地理院ホームページ",
    icon : "./image/system/tool-icon-gsi.png",
    description : "国土地理院HPへリンク",
    url : "https://www.gsi.go.jp/",
    target : "_blank"
  },
  */
  {
    id: 'print',
    title : "in",
    icon : "./image/system/tool-icon-print.png",
    description : "in"
  },
  {
    id : "share",
    title : "Chia sẻ",
    icon : "./image/system/tool-icon-share.png",
    description : "Chia sẻ/Lưu"
  },
  {
    title : "Cài đặt",
    icon : "./image/system/tool-icon-setting.png",
    description : "Hiển thị/cài đặt lưới",
    childrenWidth: 290,
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
        description : "",
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
        defaultCheck: true,
        description : "Hiển thị hình chữ thập ở giữa bản đồ"
      },
      {
        id: CONFIG.PARAMETERNAMES.ZOOMGUIDE,
        title: 'Hiển thị hướng dẫn thu phóng',
        typeA: 'check',
        defaultCheck: true
      },
      /*
      {
        id: CONFIG.PARAMETERNAMES.JIHOKULINE,
        title: 'đường phía bắc nam châm' + '<span class="mini_comment">(Zoom 11 trở lên)</span>',
        typeA: 'check',
        defaultCheck: false
      },
      {
        id: CONFIG.PARAMETERNAMES.TOUKYOKEN,
        title: 'đường tròn đẳng phương',
        typeA: 'check',
        defaultCheck: false
      },
      {
        id: CONFIG.PARAMETERNAMES.HOUILINE,
        title: '方位線',
        typeA: 'check',
        defaultCheck: false
      },
      */
      {
        id: CONFIG.PARAMETERNAMES.MINIMAP,
        title: 'Bản đồ diện rộng',
        typeA: 'check',
        defaultCheck: false,
        description : "Hiển thị bản đồ diện rộng trong cửa sổ riêng"
      },
      {
        id: CONFIG.PARAMETERNAMES.CLICKMOVE,
        title: 'bấm để di chuyển',
        typeA: 'check',
        defaultCheck: false,
        description : "Nhấp chuột trái để di chuyển bản đồ"
      },
      {
        id: CONFIG.PARAMETERNAMES.MULTIPOPUP,
        title: 'Hiển thị nhiều cửa sổ bật lên',
        typeA: 'check',
        defaultCheck: false,
        description : "Nhiều cửa sổ bật lên có thể được hiển thị cùng một lúc"
      },/*
      {
        id: CONFIG.PARAMETERNAMES.PANELOVERLAP,
        title: 'Lựa chọn bản đồ lớp phủ',
        typeA: 'check',
        defaultCheck: false,
        description : ""
      },*/
      {
        id: CONFIG.PARAMETERNAMES.SAVESTATE,
        title: 'Tái tạo trạng thái kết thúc tiếp theo',
        typeA: 'check',
        defaultCheck: false,
        description : "Lần tới, bản đồ được hiển thị từ vị trí kết thúc trước đó sẽ được hiển thị. (chúng tôi sử dụng cookie)"
      },
      {
        id: "to-mobile",
        title: 'Xem trên di động',
        description : ""
      }
    ]
  },
  {
    title : "dụng cụ",
    icon : "./image/system/tool-icon-tool.png",
    description : "dụng cụ",
    childViewStyle : "panel",
    buttonWidth : "64px",
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
        description : "Tạo mặt cắt giữa các điểm tùy ý",
        icon : "./image/system/tool/tool-danmen.png"
      },
      {
        id : "splitwindow",
        title : "so sánh cạnh nhau",
        description:"So sánh hai bản đồ cạnh nhau",
        icon : "./image/system/tool/tool-narabete.png"
      },
      {
        id : "comparisonmap",
        title : "so sánh chồng chéo",
        description : "Bạn có thể trượt đường viền của hai bản đồ sang trái và phải để so sánh chúng",
        icon : "./image/system/tool/tool-kasanete.png"
      },
      {
        id : "3d",
        title : "３D",
        childViewStyle : "popuppanel",
        icon : "./image/system/tool/tool-3d.png",
        description : "Bất kỳ phạm vi nhấp nhô nào cũng có thể được hiển thị ở dạng 3D",
        popupDirection: "left",
        children : [
          {
            id: 'gsi3d_l',
            title: '<span style="font-size:13pt;">To lớn</span><br><span style="font-size:9px;">Dọc và ngang 2048px</span>',
            description : "Tạo mô hình 3D 2048×2048 pixel"
          },
  
          {
            id: 'gsi3d_s',
            title: '<span style="font-size:13pt;">bé nhỏ</span><br><span style="font-size:9px;">Dọc và ngang 1024px</span>',
            description : "Tạo mô hình 3D 1024x1024 pixel"
          },
          {
            id: 'gsi3d_custom',
            title: 'phong tục',
            description : "có thể là bất kỳ phạm vi"
          }
        ]
      },
      {
        id : "gsiglobe",
        title : "Globe",
        icon : "./image/system/tool/tool-globe.png",
        description : "Độ nhấp nhô của đất có thể được hiển thị ở dạng 3D với quả địa cầu."
      },
      {
        id : "other",
        title : "người khác",
        icon : "./image/system/tool/tool-sonota.png",
        description : "Các công cụ khác",
        childViewStyle : "popuppanel",
        popupDirection: "left",
        children : [
          {
            id : CONFIG.PARAMETERNAMES.JIHOKULINE,
            typeA: 'check',
            title : "đường phía bắc nam châm",
            showTitle : true,
            icon : "./image/system/tool/tool-jihoku.png",
            description : "hiển thị từ phía bắc",
            keepPanel: true
          },
          {
            id : CONFIG.PARAMETERNAMES.TOUKYOKEN,
            typeA: 'check',
            title : "đường tròn đẳng phương",
            showTitle : true,
            icon : "./image/system/tool/tool-toukyo.png",
            description : "Vẽ các đường cách đều điểm cho trước"
          },
          {
            id : CONFIG.PARAMETERNAMES.HOUILINE,
            typeA: 'check',
            title : "đường phương vị",
            showTitle : true,
            icon : "./image/system/tool/tool-houi.png",
            description : "Hiển thị các đường mang từ một điểm được chỉ định"
          },
          {
            id : "othermap",
            title : "bản đồ khác",
            description : "bản đồ khác",
            childViewStyle : "popuppanel",
            popupDirection: "left",
            children : [
              {
                id : "link",
                url : "itsumonavi",
                title : "Luôn NAVI",
                icon : "./image/system/tool/tool-itsumo.png",
                description:"Hiển thị vị trí hiện tại với Always NAVI"
              },
              {
                id : "link",
                url : "mapion",
                title : "Mapion",
                icon : "./image/system/tool/tool-mapion.png",
                description:"Hiển thị vị trí hiện tại trong Bản đồ"
              }
            ]
          },
          {
            id : "placecode",
            title : "Thông tin vị trí<br>mã",
            icon : "./image/system/tool/tool-uplace.png",
            description:"Có thể hiển thị mã thông tin vị trí của vị trí trung tâm"
          },
          {
            id : "loadoutsidetile",
            title : "Gạch bên ngoài",
            showTitle : true,
            icon : "./image/system/tool/tool-gaibu.png",
            description:"Có thể hiển thị dữ liệu ô xếp khác với ô xếp"
          }
        ]
      }
    ]
  },
  {
    id: 'help',
    title : "trợ giúp",
    text : "?",
    icon : "",
    class : "gsi-header-tool-help-icon",
    description : "trợ giúp",
    target : "_blank",
    url : "https://sxdqwuangngai/help/"
  },

  {
    id : "gsivector",
    title : "",
    icon : "",
    class : "gsi-header-tool-vectorlogo-icon",
    description : "Sở Xây dựng tỉnh Quảng Ngãi"
  }

];
