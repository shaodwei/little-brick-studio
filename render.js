const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shade=(hex,f)=>'#'+hex.slice(1).match(/../g).map(v=>Math.min(255,Math.round(parseInt(v,16)*f)).toString(16).padStart(2,'0')).join('');
function brickSVG(bricks,{rotation=0,top=false,newFrom=-1,explode=false,all=bricks,label='积木结构示意图'}={}){
 const turn=(x,y)=>{for(let i=0;i<(rotation%4+4)%4;i++) [x,y]=[-y,x];return [x,y]};
 const project=(x,y,z)=>{[x,y]=turn(x,y);return top?[x*32,y*32-z*.01]:[(x-y)*27,(x+y)*14-z*40]};
 const corners=(b,z)=>[[b.x,b.y],[b.x+b.w,b.y],[b.x+b.w,b.y+b.d],[b.x,b.y+b.d]].map(([x,y])=>project(x,y,z));
 const points=all.flatMap(b=>[...corners(b,b.z),...corners(b,b.z+(b.h||1)+.4)]);
 let minX=Math.min(...points.map(p=>p[0])),maxX=Math.max(...points.map(p=>p[0])),minY=Math.min(...points.map(p=>p[1])),maxY=Math.max(...points.map(p=>p[1]));
 const pad=36;minY-=explode?36:0; let vb=[minX-pad,minY-pad,maxX-minX+pad*2,maxY-minY+pad*2];
 const poly=(p,fill,stroke='#00000018',extra='')=>`<polygon points="${p.map(v=>v.join(',')).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="1" stroke-linejoin="round" ${extra}/>`;
 let items=bricks.map((b,i)=>({...b,index:i})).sort((a,b)=>a.z-b.z||(turn(a.x+a.w/2,a.y+a.d/2).reduce((a,b)=>a+b)-turn(b.x+b.w/2,b.y+b.d/2).reduce((a,b)=>a+b)));
 let html=items.map(b=>{
 let fresh=b.index>=newFrom&&newFrom>=0;let h=b.flat?.22:(b.h||1); let z=b.z+(explode&&fresh?.9:0),t=corners(b,z+h),d=corners(b,z),color=C[b.c]||b.c||C.yellow;
 let out='';
 if(explode&&fresh&&!top){let a=project(b.x+b.w/2,b.y+b.d/2,b.z+1),e=project(b.x+b.w/2,b.y+b.d/2,z);out+=`<path d="M ${a} L ${e}" stroke="#c65e27" stroke-width="2" stroke-dasharray="4 3"/>`;}
 if(!top){for(let i=0;i<4;i++){let j=(i+1)%4,edge=[t[j][0]-t[i][0],t[j][1]-t[i][1]];if(edge[0]<0){
 const face=[t[i],t[j],d[j],d[i]];
 if(b.kind==='frame'&&(i===0||i===2)){
 const fy=i===0?b.y:b.y+b.d,fp=(x,zv)=>project(x,fy,zv);
 const hole=[fp(b.x+.35,z+.35),fp(b.x+b.w-.35,z+.35),fp(b.x+b.w-.35,z+h-.35),fp(b.x+.35,z+h-.35)];
 const path=p=>'M'+p.map(v=>v.join(',')).join(' L')+' Z';
 out+=`<path d="${path(face)} ${path(hole)}" fill="${shade(color,.9)}" fill-rule="evenodd" stroke="${shade(color,.72)}" stroke-width="1"/>`;
 out+=poly([fp(b.x+b.w/2-.09,z+.35),fp(b.x+b.w/2+.09,z+.35),fp(b.x+b.w/2+.09,z+h-.35),fp(b.x+b.w/2-.09,z+h-.35)],shade(color,1.12));
 out+=poly([fp(b.x+.35,z+h/2-.08),fp(b.x+b.w-.35,z+h/2-.08),fp(b.x+b.w-.35,z+h/2+.08),fp(b.x+.35,z+h/2+.08)],shade(color,1.12));
 }else out+=poly(face,shade(color,i%2?.8:.9));
 if(b.eye&&((b.eye==='front'&&i===1)||(['side','pair'].includes(b.eye)&&(i===0||i===2)))){
 for(const ex of b.eye==='pair'?[b.w*.23,b.w*.77]:[1]){
 const q=b.eye==='front'?project(b.x+b.w,b.y+b.d/2,z+h*.58):project(b.x+ex,i===0?b.y:b.y+b.d,z+h*.58);
 const along=b.eye==='front'?project(b.x+b.w,b.y+b.d/2+1,z+h*.58):project(b.x+ex+1,i===0?b.y:b.y+b.d,z+h*.58);
 const up=b.eye==='front'?project(b.x+b.w,b.y+b.d/2,z+h*.58+1):project(b.x+ex,i===0?b.y:b.y+b.d,z+h*.58+1);
 out+=`<g transform="matrix(${along[0]-q[0]} ${along[1]-q[1]} ${up[0]-q[0]} ${up[1]-q[1]} ${q[0]} ${q[1]})"><ellipse rx=".42" ry=".34" fill="#fff7df"/><ellipse cx=".05" rx=".2" ry=".23" fill="#183b32"/><ellipse cx=".09" cy=".08" rx=".06" ry=".07" fill="white"/></g>`;
 }
 }
 if(b.kind==='chassis'&&(i===0||i===2)){
 for(const wx of [1.5,b.w-1.5]){
 const wy=i===0?b.y-.25:b.y+b.d+.25,q=project(b.x+wx,wy,z+.35),a=project(b.x+wx+1,wy,z+.35),v=project(b.x+wx,wy,z+1.35);
 out+=`<g transform="matrix(${a[0]-q[0]} ${a[1]-q[1]} ${v[0]-q[0]} ${v[1]-q[1]} ${q[0]} ${q[1]})"><ellipse rx="1.05" ry=".86" fill="#1b252b" stroke="#10191e" stroke-width=".08"/><ellipse rx=".56" ry=".46" fill="#a4b1b4"/><ellipse rx=".18" ry=".15" fill="#53656d"/></g>`;
 }
 }
 }}}
 out+=poly(t,shade(color,1.06),fresh?'#bb501b':'#00000022');
 for(let x=0;x<b.w;x++)for(let y=0;y<b.d;y++){let [px,py]=project(b.x+x+.5,b.y+y+.5,z+h),ry=top?8:5;
 if(!top)out+=`<path d="M${px-10},${py-3} v5 a10,5 0 0 0 20,0 v-5" fill="${shade(color,.88)}"/>`;
 out+=`<ellipse cx="${px}" cy="${py-3}" rx="${top?8:10}" ry="${ry}" fill="${shade(color,1.12)}" stroke="${shade(color,.91)}" stroke-width=".8"/><ellipse cx="${px}" cy="${py-3}" rx="${top?4:5.6}" ry="${top?4:2.7}" fill="${shade(color,.91)}"/>`;}
 if(fresh){let a=t[0];out+=`<circle cx="${a[0]}" cy="${a[1]-9}" r="11" fill="#b54b17" stroke="#fff" stroke-width="2"/><text x="${a[0]}" y="${a[1]-5}" text-anchor="middle" font-size="11" font-weight="700" fill="white">${b.index-newFrom+1}</text>`;}
 return `<g>${out}</g>`;
 }).join('');
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}" role="img" aria-label="${esc(label)}">${html}</svg>`;
}
function specialSVG(type,label='Brick type diagram'){const shapes={window:'<rect x="50" y="25" width="100" height="130" rx="5" fill="#4788b4"/><rect x="66" y="45" width="68" height="88" rx="2" fill="#faf8f1"/><path d="M100 45v88M66 88h68" stroke="#4788b4" stroke-width="9"/>',slope:'<path d="M40 130L70 70H130L160 130V155H40Z" fill="#7baa7b"/><path d="M70 70V100L40 155V130Z" fill="#5f9060"/>',wheel:'<path d="M35 90h125v35H35Z" fill="#ef975c"/><circle cx="65" cy="130" r="23" fill="#334a42"/><circle cx="140" cy="130" r="23" fill="#334a42"/><circle cx="65" cy="130" r="9" fill="#ddd7c7"/><circle cx="140" cy="130" r="9" fill="#ddd7c7"/>'};return `<svg viewBox="0 0 200 180" role="img" aria-label="${esc(label)}">${shapes[type]}</svg>`;}
const icons={left:'<path d="M9 5 2 12l7 7M2 12h19"/>',right:'<path d="m15 5 7 7-7 7M22 12H3"/>',rotate:'<path d="M4 10a8 8 0 1 1 1 8M4 10V3M4 10h7"/>',cube:'<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5M12 12 3 7m9 5v10"/>',bulb:'<path d="M8 17c0-4-3-4-3-8a7 7 0 0 1 14 0c0 4-3 4-3 8Zm0 4h8M12 2V0M2 4l2 2m16 0 2-2"/>'};
const icon=k=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[k]}</svg>`;

