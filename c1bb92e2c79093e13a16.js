(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{142:function(n,e,t){"use strict";t.d(e,"a",function(){return w}),t.d(e,"b",function(){return j}),t.d(e,"d",function(){return C}),t.d(e,"c",function(){return O});var r=t(12),o=(t(45),t(61),t(144),t(90),t(23)),c=(t(24),t(145)),l=t.n(c),f=t(146),d=t.n(f),h=t(143),m=t.n(h),y=t(147),v=t.n(y);function w(){return l.a.get("/2020/data/timetable.json").then(function(n){return{days:n.data.days}})}function j(){return l.a.get("/2020/data/event_info.json").then(function(n){return{conference:n.data.conference}})}function C(){return w().then(function(n){var e=n.days,t=new Map;return v()(e,function(n){return v()(n.timeslots,function(n){return n.events})}).filter(function(n){return!(!n||!n.topic)&&(!t.has(n.internal)&&(t.set(n.internal,!0),!0))}).sort(function(n,e){return n.display.localeCompare(e.display)})})}function O(n){return w().then(function(e){var t=e.days,map=new Map;return t.forEach(function(n){var e=n.day,t=n.date;n.timeslots.forEach(function(n){var c=n.startTime,l=n.endTime;n.events.forEach(function(n){n.topic&&map.set(function(n){if("object"!==Object(o.a)(n))return"";if("string"!=typeof n.internal)return n.replace(/[^_\W]+/g,"","").replace(" ","-").toLowerCase();var u=m.a.parse(n.internal);return d.a.basename(u.pathname)}(n),Object(r.a)({day:e,date:t,startTime:c,endTime:l},n))})})}),map.get(n)})}},222:function(n,e,t){"use strict";t.r(e);var r=t(142),o={name:"TimetablePage",head:{title:"Schedule | Hong Kong Open Source Confernce 2020",meta:[{hid:"og:title",property:"og:title",content:"Schedule | Hong Kong Open Source Conference 2020"},{hid:"description",name:"description",content:"The timetable for the Hong Kong Open Source Conference 2020."}]},components:{ScheduleTable:function(){return t.e(21).then(t.bind(null,231))},PageBanner:function(){return t.e(0).then(t.bind(null,230))}},asyncData:function(){return Object(r.a)()},data:function(){return{days:[]}}},c=t(17),component=Object(c.a)(o,function(){var n=this.$createElement,e=this._self._c||n;return e("main",{staticClass:"timetablePage"},[e("page-banner",{attrs:{title:"Schedule"}}),this._v(" "),e("div",{staticClass:"container"},[this.days.length>0?e("schedule-table",{attrs:{days:this.days}}):this._e()],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=c1bb92e2c79093e13a16.js.map