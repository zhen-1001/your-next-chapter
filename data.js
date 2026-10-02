/* Seed data for YOUR NEXT CHAPTER. All records are editable. */
(function(){
const id=(p)=>p+"_"+Math.random().toString(36).slice(2,10);
const members=[{id:"mA",name:"A"},{id:"mB",name:"B"},{id:"mC",name:"C"},{id:"mD",name:"D"}];
const tripId="trip_south_2027";
const days=[
{ id:"d1",date:"2027-02-26",region:"Christchurch",theme:"Arrival & settle in",items:[
{id:"i1",time:"19:30",title:"Pick up rental car",category:"交通",note:"Check vehicle condition and take photos.",transport:"Rental car",duration:"45 min",map:"https://maps.google.com/?q=Christchurch+Airport",status:"已確認"}]},
{ id:"d2",date:"2027-02-27",region:"Tekapo",theme:"Into the wide blue",items:[
{id:"i2",time:"09:00",title:"Drive to Lake Tekapo",category:"交通",note:"Allow time for scenic stops.",transport:"Self-drive",duration:"3 hr",map:"https://maps.google.com/?q=Lake+Tekapo",status:"待確認"},
{id:"i3",time:"14:00",title:"Church of the Good Shepherd",category:"景點",note:"Lakefront walk; check weather.",transport:"Walk",duration:"1 hr",map:"https://maps.google.com/?q=Church+of+the+Good+Shepherd",status:"待確認"}]},
{ id:"d3",date:"2027-02-28",region:"Mt Cook",theme:"Glacier country",items:[
{id:"i4",time:"09:00",title:"Tasman Glacier activity",category:"活動",note:"Demo idea — confirm tour and weather before travel.",transport:"Drive",duration:"Half day",map:"https://maps.google.com/?q=Mount+Cook",status:"待確認"}]},
{ id:"d4",date:"2027-03-01",region:"Fox Glacier",theme:"West coast",items:[
{id:"i5",time:"10:00",title:"Scenic drive to Fox Glacier",category:"交通",note:"Check road conditions.",transport:"Self-drive",duration:"4 hr",map:"https://maps.google.com/?q=Fox+Glacier",status:"待確認"}]},
{ id:"d5",date:"2027-03-02",region:"Wanaka",theme:"Lakeside pause",items:[
{id:"i6",time:"10:00",title:"Drive to Wanaka",category:"交通",note:"Allow photo stops.",transport:"Self-drive",duration:"3 hr",map:"https://maps.google.com/?q=Wanaka",status:"待確認"},
{id:"i7",time:"15:00",title:"Lake Wanaka waterfront",category:"景點",note:"Slow afternoon by the lake.",transport:"Walk",duration:"1 hr",map:"https://maps.google.com/?q=Lake+Wanaka",status:"待確認"}]},
{ id:"d6",date:"2027-03-03",region:"Queenstown",theme:"Adventure begins",items:[
{id:"i8",time:"12:00",title:"Arrive in Queenstown",category:"交通",note:"Check-in and explore town.",transport:"Self-drive",duration:"1 hr",map:"https://maps.google.com/?q=Queenstown",status:"待確認"}]}
];
const trip={
id:tripId,title:"THIRTY, SOMEWHERE SOUTH",subtitle:"四個女孩的南島出走",destination:"NEW ZEALAND · SOUTH ISLAND",startDate:"2027-02-26",endDate:"2027-03-07",description:"A little further, a little freer. Four friends, one island, and a new chapter.",coverUrl:"",archived:false,createdAt:new Date().toISOString(),
members,
flights:[],accommodations:[],days,restaurants:[
{id:"r1",name:"Fergbaker / dinner idea",region:"Queenstown",type:"Cafe / casual",booking:"未訂位",hours:"",map:"https://maps.google.com/?q=Queenstown+restaurants",website:"",note:"Demo restaurant — replace with your own choice."}
],
travelInfo:[
{id:"t1",title:"護照與入境文件",category:"證件",details:"確認護照效期、紐西蘭入境與 NZeTA 要求。",done:false},
{id:"t2",title:"租車資料",category:"交通",details:"確認駕照翻譯／國際駕照、保險與取車時間。",done:false},
{id:"t3",title:"冰川健行",category:"活動",details:"確認活動日期、集合地點、天氣與取消政策。",done:false},
{id:"t4",title:"緊急聯絡資訊",category:"緊急",details:"加入住宿、租車公司與旅遊保險聯絡方式。",done:false}
],
expenses:[
{id:"e1",name:"住宿訂金（示範）",amount:400,currency:"NZD",rate:19.2,date:"2027-02-26",category:"住宿",payers:[{memberId:"mA",paidAmount:250},{memberId:"mB",paidAmount:150}],participants:["mA","mB","mC","mD"],splitMethod:"equal",splits:[],settled:false,note:"Demo expense — edit or delete."},
{id:"e2",name:"租車（示範）",amount:600,currency:"NZD",rate:19.2,date:"2027-02-27",category:"交通",payers:[{memberId:"mC",paidAmount:600}],participants:["mA","mB","mC","mD"],splitMethod:"equal",splits:[],settled:false,note:"Demo expense — edit or delete."},
{id:"e3",name:"晚餐（示範）",amount:160,currency:"NZD",rate:19.2,date:"2027-03-02",category:"餐廳",payers:[{memberId:"mD",paidAmount:160}],participants:["mA","mB","mC","mD"],splitMethod:"equal",splits:[],settled:false,note:"Demo expense — edit or delete."},
{id:"e4",name:"冰川健行（示範）",amount:800,currency:"NZD",rate:19.2,date:"2027-02-28",category:"活動",payers:[{memberId:"mA",paidAmount:400},{memberId:"mB",paidAmount:400}],participants:["mA","mB","mC","mD"],splitMethod:"equal",splits:[],settled:false,note:"Demo expense — edit or delete."}
],settings:{currency:"TWD",viewerMode:false,tripMode:false}
};
window.TRIP_SEED={trips:[trip],activeTripId:tripId,version:1};
})();