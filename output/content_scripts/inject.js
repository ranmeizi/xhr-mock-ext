(()=>{"use strict";window.addEventListener("message",(function(e){return t=this,n=void 0,o=function(){var t;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(n){switch(n.label){case 0:return"inject_get_matching"!==e.data.event?[3,2]:(console.log("contentjs"),[4,(r="MATCHING_GET",o={enabled:!0},a="".concat(r,"_RES"),chrome.runtime.sendMessage({type:r,data:o,async:!0}),new Promise((function(e){chrome.runtime.onMessage.addListener((function t(n,r,o){if(console.log(n,"看我一下res"),n.type===a)return chrome.runtime.onMessage.removeListener(t),e(n.data),Promise.resolve(n.data)}))})))]);case 1:t=n.sent(),window.postMessage({event:"inject_get_matching_res",data:t}),n.label=2;case 2:return[2]}var r,o,a}))},new((r=void 0)||(r=Promise))((function(e,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,c)}s((o=o.apply(t,n||[])).next())}));var t,n,r,o}));var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.src=chrome.extension.getURL("./inject_scripts/xhr.js"),e.onload=function(){this.parentNode.removeChild(this)},document.head.appendChild(e)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHRzL2luamVjdC5qcyIsIm1hcHBpbmdzIjoibUJBR0FBLE9BQU9DLGlCQUFpQixXQUFXLFNBQWdCQyxHLHFvQ0FHNUIsd0JBRkZBLEVBQUMsS0FFVEMsTUFBTCxPQUNBQyxRQUFRQyxJQUFJLGFBRUEsSUNUZ0JDLEVEU0MsZUNUYUMsRURTRyxDQUFFQyxTQUFTLEdDUnREQyxFQUFlLFVBQUdILEVBQUksUUFFNUJJLE9BQU9DLFFBQVFDLFlBQVksQ0FDdkJOLEtBQUksRUFDSkMsS0FBSSxFQUNKTSxPQUFPLElBR0osSUFBSUMsU0FBUSxTQUFBQyxHQUNmTCxPQUFPQyxRQUFRSyxVQUFVQyxhQUFZLFNBQVNDLEVBQVNDLEVBQWtCQyxFQUFzQ0MsR0FFM0csR0FEQWpCLFFBQVFDLElBQUljLEVBQVMsV0FDakJBLEVBQVFiLE9BQVNHLEVBSWpCLE9BSEFDLE9BQU9DLFFBQVFLLFVBQVVNLGVBQWVKLEdBRXhDSCxFQUFRSSxFQUFRWixNQUNUTyxRQUFRQyxRQUFRSSxFQUFRWixlLE9EUGpDZ0IsRUFBTSxTQUVadkIsT0FBT3dCLFlBQVksQ0FDZnJCLE1BQU8sMEJBQ1BJLEtBQU1nQixJLDJCQ2JYLElBQTZCakIsRUFBY0MsRUFDeENFLE0sa1NEa0JWLElBQUlnQixFQUFPQyxTQUFTQyxjQUFjLFVBQ2xDRixFQUFLRyxhQUFhLE9BQVEsbUJBQzFCSCxFQUFLSSxJQUFNbkIsT0FBT29CLFVBQVVDLE9BQU8sMkJBQ25DTixFQUFLTyxPQUFTLFdBQ1ZDLEtBQUtDLFdBQVdDLFlBQVlGLE9BRWhDUCxTQUFTVSxLQUFLQyxZQUFZWixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veGhyLW1vY2stZXh0Ly4vc3JjL2VudHJpZXMvY29udGVudF9zY3JpcHRzL2luamVjdC50cyIsIndlYnBhY2s6Ly94aHItbW9jay1leHQvLi9zcmMvZW50cmllcy9iYWNrZ3JvdW5kL3JlcXVlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFiUmVxdWVzdCB9IGZyb20gJy4uL2JhY2tncm91bmQvcmVxdWVzdCdcblxuLy8gaW5qZWN0c2NyaXB05Yid5aeL5YyW5raI5oGvXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBlXG5cbiAgICBpZiAoZGF0YS5ldmVudCA9PT0gJ2luamVjdF9nZXRfbWF0Y2hpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb250ZW50anMnKVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRhYlJlcXVlc3QoJ01BVENISU5HX0dFVCcsIHsgZW5hYmxlZDogdHJ1ZSB9KVxuXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBldmVudDogJ2luamVjdF9nZXRfbWF0Y2hpbmdfcmVzJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc1xuICAgICAgICB9KVxuICAgIH1cbn0pXG5cblxudmFyIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbnRlbXAuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xudGVtcC5zcmMgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgnLi9pbmplY3Rfc2NyaXB0cy94aHIuanMnKTtcbnRlbXAub25sb2FkID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxTY3JpcHRFbGVtZW50KSB7XG4gICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xufTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcCk7XG5cbiIsImV4cG9ydCBmdW5jdGlvbiB0YWJSZXF1ZXN0PFQgPSBhbnk+KHR5cGU6IHN0cmluZywgZGF0YTogVCkge1xuICAgIGNvbnN0IHJlc0V2ZW50TmFtZSA9IGAke3R5cGV9X1JFU2BcblxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgYXN5bmM6IHRydWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gbGlzdGVuZXIobWVzc2FnZTogTWVzc2FnZSwgc2VuZGVyOiBjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyLCBzZW5kUmVzcG9uc2U6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSwgJ+eci+aIkeS4gOS4i3JlcycpXG4gICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSByZXNFdmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpXG4gICAgICAgICAgICAgICAgLy8g5ZON5bqUXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtZXNzYWdlLmRhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtZXNzYWdlLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0iXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiZGF0YSIsImVuYWJsZWQiLCJyZXNFdmVudE5hbWUiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJhc3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJyZW1vdmVMaXN0ZW5lciIsInJlcyIsInBvc3RNZXNzYWdlIiwidGVtcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInNyYyIsImV4dGVuc2lvbiIsImdldFVSTCIsIm9ubG9hZCIsInRoaXMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9