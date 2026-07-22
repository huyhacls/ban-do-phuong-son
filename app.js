const wards = [
  {id:"TDP01",name:"Phượng Sơn",old:["Trại 1","Đầm","Cầu Đất","Mào Gà"],secretary:"Thân Văn Yên",secretaryPhone:"0916 459 170",leader:"Đỗ Đức Hảo",leaderPhone:"0962 168 226",front:"Trần Huy Hoan",x:58.3,y:52.4,tone:"red"},
  {id:"TDP02",name:"Kim",old:["Kim 1","Kim 2","Kim 3","Phượng Khanh"],secretary:"Nguyễn Quốc Khánh",secretaryPhone:"0975 446 210",leader:"Đoàn Anh Đức",leaderPhone:"0967 726 999",front:"Đỗ Văn Khắc",x:38.3,y:54.8,tone:"cyan"},
  {id:"TDP03",name:"Chể",old:["Chể"],secretary:"Đặng Thế Hùng",secretaryPhone:"0386 779 186",leader:"Phạm Văn Trường",leaderPhone:"0388 258 368",front:"Lê Xuân Huyến",x:44.4,y:60.9,tone:"green"},
  {id:"TDP04",name:"Cầu Từ",old:["Hạ Mã","Cầu Từ","Phú Bòng"],secretary:"Trần Danh Tuyên",secretaryPhone:"0972 837 826",leader:"Nguyễn Văn Định",leaderPhone:"0378 261 328",front:"Nguyễn Đức Quyền",x:23.5,y:64.5,tone:"yellow"},
  {id:"TDP05",name:"Ải",old:["Từ Xuyên","Ải","Phượng Khê"],secretary:"Ngô Minh Lộng",secretaryPhone:"0977 148 214",leader:"Chu Đức Phượng",leaderPhone:"0978 427 356",front:"Đinh Văn Nhất",x:23.2,y:56.8,tone:"green"},
  {id:"TDP06",name:"An Phú",old:["An Phú 1","An Phú 2","An Phú 3"],secretary:"Nguyễn Thị Thơm",secretaryPhone:"0977 389 318",leader:"Đinh Văn Thành",leaderPhone:"0369 023 596",front:"Nguyễn Văn Nghiêm",x:51.2,y:57.5,tone:"blue"},
  {id:"TDP07",name:"Xuân An",old:["Xuân An","Tân Giang","Đồng Trắng"],secretary:"Phạm Ngọc Mạnh",secretaryPhone:"0385 181 115",leader:"Trương Văn Dựng",leaderPhone:"0978 434 262",front:"Nguyễn Tiến Toàn",x:58.4,y:65.7,tone:"cyan"},
  {id:"TDP08",name:"Mỹ An",old:["Hòa Mục","Đông Mai","Ngọc Nương"],secretary:"Lê Văn Mừng",secretaryPhone:"0916 459 175",leader:"Trần Văn Dương",leaderPhone:"0359 559 958",front:"Phạm Văn Vượng",x:67.5,y:60.9,tone:"yellow"},
  {id:"TDP09",name:"Tư Một",old:["Tư Một","Cầu Cao","Trại Ba","Tư Hai"],secretary:"Phạm Văn Long",secretaryPhone:"0975 325 969",leader:"Trần Văn Dự",leaderPhone:"0338 129 222",front:"Nguyễn Thị Vân",x:75.4,y:40.5,tone:"green"},
  {id:"TDP10",name:"Thống Nhất",old:["Phúc Thành","Số Tư","Hai Cũ","Tân Thành"],secretary:"Lưu Văn Chiến",secretaryPhone:"0962 080 820",leader:"Trần Văn Vụ",leaderPhone:"0973 963 940",front:"Đỗ Triệu Hải",x:66.2,y:37.8,tone:"blue"},
  {id:"TDP11",name:"Đồng Giao",old:["Đồng Giao","Thượng Vũ"],secretary:"Lê Thành Đồng",secretaryPhone:"0912 436 708",leader:"Hoàng Đức Duy",leaderPhone:"0981 114 497",front:"Nguyễn Văn Khởi",x:65.7,y:27.7,tone:"green"},
  {id:"TDP12",name:"Quý Sơn",old:["Số Ba","Đoàn Kết","Hai Mới","Lai Hòa"],secretary:"Trần Văn Bản",secretaryPhone:"0912 831 052",leader:"Đào Công Tùng",leaderPhone:"0983 099 324",front:"Ngô Văn Định",x:57.8,y:33.2,tone:"yellow"},
  {id:"TDP13",name:"Đồng Dành",old:["Giành Cũ","Tam Tầng","Quý Thịnh","Giành Mới"],secretary:"Hoàng Văn Quyền",secretaryPhone:"0976 111 744",leader:"Nguyễn Khắc Hưng",leaderPhone:"0357 930 331",front:"Bằng Thị Hồng",x:48.8,y:33.9,tone:"cyan"},
  {id:"TDP14",name:"Trại Cháy",old:["Thum Mới","Trại Cháy","Nhất Thành"],secretary:"Vi Văn Dương",secretaryPhone:"0568 353 888",leader:"Nguyễn Văn Ngọc",leaderPhone:"0357 922 878",front:"Nông Thị Hoan",x:46,y:48.1,tone:"yellow"},
  {id:"TDP15",name:"Thum Bắc",old:["Thum Cũ","Bắc Một"],secretary:"Nguyễn Văn Thanh",secretaryPhone:"0365 909 304",leader:"Tạ Văn Tư",leaderPhone:"0984 069 296",front:"Viên Thị Bé",x:45.6,y:41.2,tone:"blue"},
  {id:"TDP16",name:"Phi Lễ",old:["Bắc Hai","Phi Lễ"],secretary:"Leo Văn Vượng",secretaryPhone:"0365 980 226",leader:"Chu Văn Đức",leaderPhone:"0394 585 658",front:"Lưu Thị Liên",x:38.2,y:35.4,tone:"red"}
];

let selectedId = wards[0].id;
const wardList = document.querySelector("#ward-list");
const mapLabels = document.querySelector("#map-labels");
const detailCard = document.querySelector("#detail-card");
const sidebar = document.querySelector("#sidebar");

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
const phoneHref = (phone) => phone.replace(/\s/g, "");

function person(role, name, phone = "") {
  const phoneLink = phone ? `<a href="tel:${phoneHref(phone)}">☎ ${escapeHtml(phone)}</a>` : "";
  const initial = escapeHtml(name.trim().slice(-1));
  return `<div class="person"><div class="avatar">${initial}</div><div><small>${escapeHtml(role)}</small><b>${escapeHtml(name)}</b>${phoneLink}</div></div>`;
}

function renderList(filter = "") {
  const query = filter.trim().toLocaleLowerCase("vi");
  const filtered = wards.filter((ward) => `${ward.name} ${ward.old.join(" ")}`.toLocaleLowerCase("vi").includes(query));
  wardList.innerHTML = filtered.map((ward) => {
    const index = wards.indexOf(ward) + 1;
    const description = ward.old.length === 1 ? "Giữ nguyên" : `${ward.old.length} TDP cũ`;
    return `<button type="button" data-id="${ward.id}" class="${selectedId === ward.id ? "active" : ""}"><span class="index ${ward.tone}">${String(index).padStart(2,"0")}</span><span><b>${escapeHtml(ward.name)}</b><small>${description}</small></span><i>›</i></button>`;
  }).join("");
}

function renderMap() {
  mapLabels.innerHTML = wards.map((ward) => `<button type="button" data-id="${ward.id}" style="left:${ward.x}%;top:${ward.y}%" class="map-label ${ward.tone} ${selectedId === ward.id ? "selected" : ""}" aria-label="Xem TDP ${escapeHtml(ward.name)}">${escapeHtml(ward.name)}</button>`).join("");
}

function renderDetail(ward) {
  const summary = ward.old.length === 1 ? "Giữ nguyên địa giới TDP cũ" : `Thành lập từ ${ward.old.length} TDP cũ`;
  detailCard.innerHTML = `<div class="detail-head ${ward.tone}"><span>${ward.id}</span><h2>TDP ${escapeHtml(ward.name)}</h2><p>${summary}</p></div><div class="detail-body"><h3>Nhân sự chủ chốt</h3>${person("Bí thư Chi bộ",ward.secretary,ward.secretaryPhone)}${person("Tổ trưởng TDP",ward.leader,ward.leaderPhone)}${person("Trưởng Ban CTMT",ward.front)}<h3 class="old-title">Các TDP cũ cấu thành</h3><div class="chips">${ward.old.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}</div><p class="notice">Thông tin được tổng hợp phục vụ tra cứu. Nội dung sẽ tiếp tục được rà soát, cập nhật.</p></div>`;
}

function choose(id, scroll = true) {
  const ward = wards.find((item) => item.id === id);
  if (!ward) return;
  selectedId = ward.id;
  renderList(document.querySelector("#search").value);
  renderMap();
  renderDetail(ward);
  sidebar.classList.remove("open");
  if (scroll && window.innerWidth <= 860) detailCard.scrollIntoView({behavior:"smooth",block:"nearest"});
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (button) choose(button.dataset.id);
});
document.querySelector("#search").addEventListener("input", (event) => renderList(event.target.value));
document.querySelector("#open-list").addEventListener("click", () => sidebar.classList.add("open"));
document.querySelector("#close-list").addEventListener("click", () => sidebar.classList.remove("open"));

renderList();
renderMap();
renderDetail(wards[0]);
