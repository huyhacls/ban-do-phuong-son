const wards = [
  {id:"TDP01",name:"Phượng Sơn",old:["Trại 1","Đầm","Cầu Đất","Mào Gà"],secretary:"Thân Văn Yên",secretaryPhone:"0916 459 170",leader:"Đỗ Đức Hảo",leaderPhone:"0962 168 226",front:"Trần Huy Hoan",x:58.3,y:52.4,color:"#efc7c7",halo:[132,92]},
  {id:"TDP02",name:"Kim",old:["Kim 1","Kim 2","Kim 3","Phượng Khanh"],secretary:"Nguyễn Quốc Khánh",secretaryPhone:"0975 446 210",leader:"Đoàn Anh Đức",leaderPhone:"0967 726 999",front:"Đỗ Văn Khắc",x:38.3,y:54.8,color:"#c5e7e7",halo:[86,62]},
  {id:"TDP03",name:"Chể",old:["Chể"],secretary:"Đặng Thế Hùng",secretaryPhone:"0386 779 186",leader:"Phạm Văn Trường",leaderPhone:"0388 258 368",front:"Lê Xuân Huyến",x:44.4,y:60.9,color:"#c8efbd",halo:[86,78]},
  {id:"TDP04",name:"Cầu Từ",old:["Hạ Mã","Cầu Từ","Phú Bòng"],secretary:"Trần Danh Tuyên",secretaryPhone:"0972 837 826",leader:"Nguyễn Văn Định",leaderPhone:"0378 261 328",front:"Nguyễn Đức Quyền",x:23.5,y:64.5,color:"#f5e7aa",halo:[104,72]},
  {id:"TDP05",name:"Ải",old:["Từ Xuyên","Ải","Phượng Khê"],secretary:"Ngô Minh Lộng",secretaryPhone:"0977 148 214",leader:"Chu Đức Phượng",leaderPhone:"0978 427 356",front:"Đinh Văn Nhất",x:23.2,y:56.8,color:"#c4efbf",halo:[115,86]},
  {id:"TDP06",name:"An Phú",old:["An Phú 1","An Phú 2","An Phú 3"],secretary:"Nguyễn Thị Thơm",secretaryPhone:"0977 389 318",leader:"Đinh Văn Thành",leaderPhone:"0369 023 596",front:"Nguyễn Văn Nghiêm",x:51.2,y:57.5,color:"#cdd6f2",halo:[94,82]},
  {id:"TDP07",name:"Xuân An",old:["Xuân An","Tân Giang","Đồng Trắng"],secretary:"Phạm Ngọc Mạnh",secretaryPhone:"0385 181 115",leader:"Trương Văn Dựng",leaderPhone:"0978 434 262",front:"Nguyễn Tiến Toàn",x:58.4,y:65.7,color:"#c5eeee",halo:[105,104]},
  {id:"TDP08",name:"Mỹ An",old:["Hòa Mục","Đông Mai","Ngọc Nương"],secretary:"Lê Văn Mừng",secretaryPhone:"0916 459 175",leader:"Trần Văn Dương",leaderPhone:"0359 559 958",front:"Phạm Văn Vượng",x:67.5,y:60.9,color:"#f7efb5",halo:[92,112]},
  {id:"TDP09",name:"Tư Một",old:["Tư Một","Cầu Cao","Trại Ba","Tư Hai"],secretary:"Phạm Văn Long",secretaryPhone:"0975 325 969",leader:"Trần Văn Dự",leaderPhone:"0338 129 222",front:"Nguyễn Thị Vân",x:75.4,y:40.5,color:"#c9efc0",halo:[112,82]},
  {id:"TDP10",name:"Thống Nhất",old:["Phúc Thành","Số Tư","Hai Cũ","Tân Thành"],secretary:"Lưu Văn Chiến",secretaryPhone:"0962 080 820",leader:"Trần Văn Vụ",leaderPhone:"0973 963 940",front:"Đỗ Triệu Hải",x:66.2,y:37.8,color:"#d5d9ef",halo:[88,110]},
  {id:"TDP11",name:"Đồng Giao",old:["Đồng Giao","Thượng Vũ"],secretary:"Lê Thành Đồng",secretaryPhone:"0912 436 708",leader:"Hoàng Đức Duy",leaderPhone:"0981 114 497",front:"Nguyễn Văn Khởi",x:65.7,y:27.7,color:"#c7efbd",halo:[95,104]},
  {id:"TDP12",name:"Quý Sơn",old:["Số Ba","Đoàn Kết","Hai Mới","Lai Hòa"],secretary:"Trần Văn Bản",secretaryPhone:"0912 831 052",leader:"Đào Công Tùng",leaderPhone:"0983 099 324",front:"Ngô Văn Định",x:57.8,y:33.2,color:"#f5e7ac",halo:[94,134]},
  {id:"TDP13",name:"Đồng Dành",old:["Giành Cũ","Tam Tầng","Quý Thịnh","Giành Mới"],secretary:"Hoàng Văn Quyền",secretaryPhone:"0976 111 744",leader:"Nguyễn Khắc Hưng",leaderPhone:"0357 930 331",front:"Bằng Thị Hồng",x:48.8,y:33.9,color:"#c5ebea",halo:[82,114]},
  {id:"TDP14",name:"Trại Cháy",old:["Thum Mới","Trại Cháy","Nhất Thành"],secretary:"Vi Văn Dương",secretaryPhone:"0568 353 888",leader:"Nguyễn Văn Ngọc",leaderPhone:"0357 922 878",front:"Nông Thị Hoan",x:46,y:48.1,color:"#f6e8ad",halo:[115,92]},
  {id:"TDP15",name:"Thum Bắc",old:["Thum Cũ","Bắc Một"],secretary:"Nguyễn Văn Thanh",secretaryPhone:"0365 909 304",leader:"Tạ Văn Tư",leaderPhone:"0984 069 296",front:"Viên Thị Bé",x:45.6,y:41.2,color:"#cfd8ef",halo:[82,108]},
  {id:"TDP16",name:"Phi Lễ",old:["Bắc Hai","Phi Lễ"],secretary:"Leo Văn Vượng",secretaryPhone:"0365 980 226",leader:"Chu Văn Đức",leaderPhone:"0394 585 658",front:"Lưu Thị Liên",x:38.2,y:35.4,color:"#f0c7c7",halo:[124,125]}
];

const app = document.querySelector("#map-app");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#mobile-overlay");
const list = document.querySelector("#ward-list");
const labels = document.querySelector("#map-labels");
const search = document.querySelector("#search-input");
const panel = document.querySelector("#detail-panel");
const detailTitle = document.querySelector("#detail-title");
const detailContent = document.querySelector("#detail-content");
const halo = document.querySelector("#selection-halo");
const viewport = document.querySelector("#map-viewport");
const world = document.querySelector("#map-world");
let selectedId = null;
let mapState = {scale:1,x:0,y:0};
let drag = null;

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g,(char)=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
const phoneHref = (value) => value.replace(/\s/g,"");
const isMobile = () => window.innerWidth <= 768;

function renderList(query=""){
  const needle=query.trim().toLocaleLowerCase("vi");
  const items=wards.filter((ward)=>`${ward.name} ${ward.old.join(" ")}`.toLocaleLowerCase("vi").includes(needle));
  list.innerHTML=items.map((ward)=>`<button class="ward-item ${selectedId===ward.id?"selected":""}" type="button" data-ward="${ward.id}"><span class="ward-dot" style="background:${ward.color}"></span><span class="ward-copy"><strong>TDP ${escapeHtml(ward.name)}</strong><small>${ward.old.length===1?"Giữ nguyên":"Gồm "+ward.old.length+" TDP cũ"}</small></span></button>`).join("");
}

function renderLabels(){
  labels.innerHTML=wards.map((ward)=>`<button class="map-label ${selectedId===ward.id?"selected":""}" type="button" data-ward="${ward.id}" style="left:${ward.x}%;top:${ward.y}%" aria-label="Xem TDP ${escapeHtml(ward.name)}">TDP ${escapeHtml(ward.name)}</button>`).join("");
}

function leaderRow(label,name,phone=""){
  const contact=phone?` <a href="tel:${phoneHref(phone)}">${escapeHtml(phone)}</a>`:"";
  return `<div class="detail-row">${escapeHtml(label)}: <strong>${escapeHtml(name)}</strong>${contact}</div>`;
}

function showDetail(ward){
  detailTitle.textContent=`TDP ${ward.name}`;
  detailContent.innerHTML=`
    <div class="info-grid">
      <div class="info-card population"><span>♙ Dân số</span><strong class="pending">Đề nghị TDP bổ sung</strong></div>
      <div class="info-card area"><span>▦ Diện tích (km²)</span><strong class="pending">Đề nghị TDP bổ sung</strong></div>
    </div>
    <section class="detail-section">
      <h3 class="detail-section-title"><span class="section-icon">📍</span>Thông tin tổ dân phố</h3>
      <div class="detail-box"><strong>TDP ${escapeHtml(ward.name)}, phường Phượng Sơn, tỉnh Bắc Ninh</strong></div>
    </section>
    <section class="detail-section">
      <h3 class="detail-section-title"><span class="section-icon">👥</span>Nhân sự chủ chốt</h3>
      <div class="detail-box">
        ${leaderRow("Bí thư Chi bộ",ward.secretary)}
        ${leaderRow("Tổ trưởng TDP",ward.leader)}
        ${leaderRow("Trưởng Ban Công tác Mặt trận",ward.front)}
      </div>
    </section>
    <section class="detail-section">
      <h3 class="detail-section-title"><span class="section-icon">📱</span>Thông tin liên hệ</h3>
      <div class="detail-box">
        ${leaderRow("Bí thư Chi bộ",ward.secretary,ward.secretaryPhone)}
        ${leaderRow("Tổ trưởng TDP",ward.leader,ward.leaderPhone)}
        <div class="detail-row">Trưởng Ban CTMT: <strong>${escapeHtml(ward.front)}</strong> — đề nghị bổ sung số điện thoại</div>
      </div>
    </section>
    <section class="detail-section">
      <h3 class="detail-section-title"><span class="section-icon">ℹ️</span>Thông tin khác</h3>
      <div class="detail-box">${ward.old.length===1?"Giữ nguyên từ TDP cũ:":"Sáp nhập từ:"}<div class="old-chips">${ward.old.map((name)=>`<span>${escapeHtml(name)}</span>`).join("")}</div></div>
      <p class="pending-note">Dân số, diện tích và các dữ liệu chuyên ngành đang được tiếp tục thu thập, rà soát.</p>
    </section>`;
  panel.classList.add("show");
}

function focusWard(ward){
  if(!isMobile()) return;
  const rect=world.getBoundingClientRect();
  const baseWidth=world.offsetWidth;
  const baseHeight=world.offsetHeight;
  const targetScale=Math.max(mapState.scale,1.12);
  mapState.scale=targetScale;
  mapState.x=-(ward.x-50)/100*baseWidth*targetScale;
  mapState.y=-(ward.y-50)/100*baseHeight*targetScale-75;
  applyMapTransform();
}

function chooseWard(id){
  const ward=wards.find((item)=>item.id===id);
  if(!ward) return;
  selectedId=ward.id;
  renderList(search.value);
  renderLabels();
  halo.style.left=`${ward.x}%`;
  halo.style.top=`${ward.y}%`;
  halo.style.width=`${ward.halo[0]}px`;
  halo.style.height=`${ward.halo[1]}px`;
  halo.classList.add("show");
  showDetail(ward);
  focusWard(ward);
  closeSidebar();
}

function closeDetail(){panel.classList.remove("show");selectedId=null;halo.classList.remove("show");renderList(search.value);renderLabels()}
function openSidebar(){sidebar.classList.remove("collapsed");sidebar.classList.add("active");overlay.classList.add("active")}
function closeSidebar(){if(isMobile()){sidebar.classList.remove("active");overlay.classList.remove("active")}}
function collapseSidebar(){if(isMobile()){closeSidebar()}else{sidebar.classList.add("collapsed")}}
function expandSidebar(){sidebar.classList.remove("collapsed");if(isMobile()){sidebar.classList.add("active");overlay.classList.add("active")}}
function applyMapTransform(){world.style.transform=`translate(calc(-50% + ${mapState.x}px),calc(-50% + ${mapState.y}px)) scale(${mapState.scale})`}
function clampScale(value){return Math.min(2.6,Math.max(.82,value))}

document.addEventListener("click",(event)=>{const target=event.target.closest("[data-ward]");if(target) chooseWard(target.dataset.ward)});
search.addEventListener("input",()=>renderList(search.value));
document.querySelector("#mobile-menu").addEventListener("click",openSidebar);
document.querySelector("#collapse-sidebar").addEventListener("click",collapseSidebar);
document.querySelector("#expand-sidebar").addEventListener("click",expandSidebar);
overlay.addEventListener("click",closeSidebar);
document.querySelector("#close-detail").addEventListener("click",closeDetail);
document.querySelector("#boundary-toggle").addEventListener("click",(event)=>{const button=event.currentTarget;app.classList.toggle("boundary-off");const active=!app.classList.contains("boundary-off");button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active))});
document.querySelector("#labels-toggle").addEventListener("click",(event)=>{const button=event.currentTarget;app.classList.toggle("labels-hidden");const active=!app.classList.contains("labels-hidden");button.classList.toggle("labels-on",active);button.setAttribute("aria-pressed",String(active))});

viewport.addEventListener("wheel",(event)=>{event.preventDefault();mapState.scale=clampScale(mapState.scale*(event.deltaY<0?1.12:.89));applyMapTransform();document.querySelector("#map-hint").classList.add("hidden")},{passive:false});
viewport.addEventListener("dblclick",()=>{mapState.scale=clampScale(mapState.scale*1.25);applyMapTransform()});
viewport.addEventListener("pointerdown",(event)=>{if(event.target.closest("button")) return;drag={id:event.pointerId,x:event.clientX,y:event.clientY,startX:mapState.x,startY:mapState.y};viewport.setPointerCapture(event.pointerId);viewport.classList.add("dragging");document.querySelector("#map-hint").classList.add("hidden")});
viewport.addEventListener("pointermove",(event)=>{if(!drag||drag.id!==event.pointerId)return;mapState.x=drag.startX+event.clientX-drag.x;mapState.y=drag.startY+event.clientY-drag.y;applyMapTransform()});
function endDrag(event){if(!drag||drag.id!==event.pointerId)return;drag=null;viewport.classList.remove("dragging")}
viewport.addEventListener("pointerup",endDrag);viewport.addEventListener("pointercancel",endDrag);
window.addEventListener("resize",()=>{if(!isMobile()){sidebar.classList.remove("active");overlay.classList.remove("active")}else{sidebar.classList.remove("collapsed")}mapState={scale:1,x:0,y:0};applyMapTransform()});
document.addEventListener("keydown",(event)=>{if(event.key==="Escape"){closeDetail();closeSidebar()}});
window.setTimeout(()=>document.querySelector("#map-hint").classList.add("hidden"),4200);

renderList();
renderLabels();
