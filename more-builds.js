// New lessons use the same stud grid as the original three studies.
const additions=[];
const stepMore=(en,zh,te,tz,bricks,ce='Follow the numbered positions. Support overhangs from below while pressing.',cz='按编号图定位，按压悬伸的积木时从下方托住。')=>AS([en,zh],[en,zh],[te,tz],bricks,[ce,cz]);
const addBuild=(id,category,en,zh,skillEn,skillZh,lookEn,lookZh,promptEn,promptZh,steps)=>additions.push({id,category,level:'builder',name:pair(en,zh),skill:pair(skillEn,skillZh),look:pair(lookEn,lookZh),prompt:pair(promptEn,promptZh),note:pair('Uses ordinary 2 × 2 and 2 × 4 bricks. Colors may be substituted. Any eyes shown are optional print illustrations.','使用普通高度的 2 × 2 和 2 × 4 积木，颜色可替换。图中眼睛为可选印花示意。'),steps});
addBuild('sailboat','物品','Sunny sailboat','阳光帆船','Long hull · stepped sail','长船身 · 阶梯船帆','A low blue hull and a tall cream sail give the boat its silhouette.','低矮的蓝船身与高高的浅色船帆形成轮廓。','Make a harbor with a pier. Can two boats dock side by side?','搭一个带码头的港口，两艘船能并排停下吗？',[
stepMore('Lay the hull','铺船底','Arrange six blue long bricks in a 12 × 4 rectangle.','六块蓝长砖铺成 12 × 4 长方形。',grid([0,4,8],[0,2],0,'blue')),
stepMore('Stagger the deck','错缝铺甲板','Use four long bricks across the lower seams. Center a square at each end.','四块长砖跨住底层接缝，两端各居中放一块方砖。',[...grid([2,6],[0,2],1,'blue'),sq(0,1,1,'blue'),sq(10,1,1,'blue')]),
stepMore('Add the cabin deck','搭中间甲板','Center two yellow long bricks end to end along the boat.','两块黄色长砖居中首尾相接。',[B(2,1,2,4,2,'yellow'),B(6,1,2,4,2,'yellow')]),
stepMore('Start the broad sail','搭宽帆底','Place an orange square at the left and a cream long brick beside it.','左侧放橙色方砖，旁边放浅色长砖。',[sq(1,1,3,'orange'),B(3,1,3,4,2,'cream')]),
stepMore('Narrow the sail','收窄船帆','Place a cream long brick above the mast and sail, aligned with their left edge.','浅色长砖放在桅杆与船帆上方，左边对齐。',[B(1,1,4,4,2,'cream')]),
stepMore('Finish the sail and stern','完成帆尖和船尾','Add a cream square at the sail tip and a red square at the right end of the deck.','帆尖加浅色方砖，甲板右端加红色方砖。',[sq(1,1,5,'cream'),sq(8,1,3,'red')])]);

addBuild('seaplane','物品','Island seaplane','海岛水上飞机','Two floats · broad wings · tail','双浮筒 · 宽机翼 · 尾翼','Two blue floats support a slim fuselage; wide orange wings cross it.','两条蓝浮筒托住细长机身，橙色宽机翼横向展开。','Build an island landing dock, then change the wingspan.','搭一座海岛停靠码头，再试着改变翼展。',[
stepMore('Make two floats','搭两条浮筒','Place two rows of three long bricks, with a two-stud gap between the rows.','每排三块长砖，共两排，排间留两列凸点。',grid([0,4,8],[0,4],0,'blue')),
stepMore('Tie the floats','连接浮筒','First lay four long bricks across the seams of the two floats. Then center two crosswise long bricks above them, spanning the gap.','先用四块长砖连接两条浮筒的各段，再在上方前后各用一块横向长砖居中跨住两条浮筒。',[B(3,1,1,2,4,'cream'),B(7,1,1,2,4,'cream'),...grid([2,6],[0,4],1,'blue')]),
stepMore('Lay a slender fuselage','铺细长机身','Place three yellow long bricks along the center, end to end.','三块黄色长砖沿中间首尾连接。',row([0,4,8],2,2,'yellow')),
stepMore('Spread the wings','展开机翼','Place four orange long bricks crosswise, reaching out from both sides of the fuselage.','四块橙色长砖横向铺放，向机身两侧伸出。',grid([4,6],[-1,3],3,'orange',2,4)),
stepMore('Lock wings and body','连接机翼和机身','Center a yellow long brick over the wing roots. Add a blue cockpit ahead of the wings and a rear stabilizer.','机翼根部居中扣黄色长砖，翼前加蓝色驾驶舱，后端加横向尾翼。',[B(4,2,4,4,2,'yellow'),B(8,2,3,4,2,'blue'),B(0,1,3,2,4,'orange')]),
stepMore('Raise the tail fin','竖起尾翼','Center two stacked squares on the rear stabilizer.','尾部横翼上居中叠两块方砖。',[sq(0,2,4,'yellow'),sq(0,2,5,'orange')])]);

addBuild('rocket','物品','Launch-day rocket','发射日火箭','Wide fins · striped body · nose','宽尾翼 · 条纹箭身 · 箭头','Two low fins flank a tall narrow rocket with a red nose.','两片低矮尾翼夹着细高箭身，顶端是红色箭头。','Build a launch pad and a control tower beside the rocket.','给火箭搭发射台，再在旁边搭控制塔。',[
stepMore('Make a launch base','搭发射底座','Lay four long bricks in an 8 × 4 rectangle.','四块长砖铺成 8 × 4 长方形。',grid([0,4],[0,2],0,'blue')),
stepMore('Cross the base seams','跨接底座接缝','Center two orange long bricks across the middle seam.','两块橙色长砖居中跨住中缝。',grid([2],[0,2],1,'orange')),
stepMore('Spread the fins','展开尾翼','Place two red crosswise long bricks on the base, leaving a two-stud gap between them.','底座上横放两块红色长砖，中间留两列凸点宽。',[B(1,0,2,2,4,'red'),B(5,0,2,2,4,'red')]),
stepMore('Join the rocket body','连接箭身','Center two cream long bricks across the fins, then add two squares in the middle.','两块浅色长砖跨住两侧尾翼，正中再加两块方砖。',[B(2,0,3,4,2,'cream'),B(2,2,3,4,2,'cream'),sq(3,0,4,'cream'),sq(3,2,4,'cream')]),
stepMore('Build the striped barrel','搭条纹箭身','Alternate crosswise long bricks and paired squares for four more layers.','横向长砖与成对方砖交替搭四层。',[B(3,0,5,2,4,'blue'),sq(3,0,6,'cream'),sq(3,2,6,'cream'),B(3,0,7,2,4,'red'),sq(3,0,8,'cream'),sq(3,2,8,'cream')]),
stepMore('Taper the nose','收拢箭头','Join the two sides with a red long brick, then center two red squares above it.','红色长砖连接两侧，上方居中叠两块红方砖。',[B(3,0,9,2,4,'red'),sq(3,1,10,'red'),sq(3,1,11,'red')])]);

addBuild('lighthouse','建筑','Harbor lighthouse','港口灯塔','Striped tower · lookout · lantern','条纹塔身 · 瞭望台 · 灯室','A red-and-cream tower widens into a lookout balcony, with a yellow lantern at the top.','红白相间的塔身，上方伸出瞭望台，顶部有黄色灯室。','Put the lighthouse beside the sailboat harbor and add a winding path.','把灯塔放在帆船港口旁，搭一条弯弯的小路。',[
stepMore('Lay the island','铺小岛','Lay four green long bricks in an 8 × 4 rectangle.','四块绿长砖铺成 8 × 4 小岛。',grid([0,4],[0,2],0,'green')),
stepMore('Build the broad foot','搭宽塔脚','Center two blue long bricks across the base seam.','两块蓝长砖居中跨住底板接缝。',grid([2],[0,2],1,'blue')),
stepMore('Start red and cream bands','搭红白条纹','Make a 4 × 4 tower with alternating brick directions and colors for four layers.','搭 4 × 4 的塔身，砖的方向和颜色交替，共四层。',[...grid([2,4],[0],2,'red',2,4),...grid([2],[0,2],3,'cream'),...grid([2,4],[0],4,'red',2,4),...grid([2],[0,2],5,'cream')]),
stepMore('Raise the tower','加高塔身','Repeat another red layer and another cream layer.','再搭一层红色和一层浅色。',[...grid([2,4],[0],6,'red',2,4),...grid([2],[0,2],7,'cream')]),
stepMore('Project the balcony','伸出瞭望台','Lay three blue long bricks crosswise, overhanging both sides of the tower.','三块蓝长砖横向铺放，向塔身两侧挑出。',grid([1,3,5],[0],8,'blue',2,4)),
stepMore('Light the lantern','搭亮灯室','Center a cream long brick over the balcony. Stack two yellow squares in its middle for the lantern.','瞭望台上居中放浅色长砖，中间叠两块黄方砖作为灯室。',[B(2,1,9,4,2,'cream'),sq(3,1,10,'yellow'),sq(3,1,11,'yellow')]),
stepMore('Cap the lantern','盖灯室屋顶','Add a red long brick across the lantern and a red square centered above it.','灯室上横放红长砖，顶端居中加红方砖。',[B(2,1,12,4,2,'red'),sq(3,1,13,'red')])]);

addBuild('river-bridge','建筑','Twin-tower bridge','双塔跨河桥','Paired piers · joined deck · towers','双桥墩 · 连接桥面 · 桥塔','Two broad towers frame a raised bridge deck, leaving a passage underneath.','两座宽桥塔夹着抬高的桥面，下方留出通道。','Make a river underneath. Can your crocodile pass between the piers?','在桥下搭一条河，鳄鱼能穿过桥墩吗？',[
stepMore('Place four pier feet','摆桥墩底脚','Set two pairs of squares eight stud columns apart, with each pair forming a 2 × 4 base.','两对方砖相隔八列凸点摆放，每对形成 2 × 4 底脚。',grid([0,10],[0,2],0,'cream',2,2)),
stepMore('Raise the piers','加高桥墩','Join each pair with a crosswise long brick. Add another long brick above each.','每对脚上横放长砖连接，再各加一块长砖。',[...grid([0,10],[0],1,'cream',2,4),...grid([0,10],[0],2,'cream',2,4)]),
stepMore('Reach toward the center','向中间伸桥面','Extend two long bricks inward from each pier, side by side.','每个桥墩上并排放两块朝中间伸出的长砖。',grid([0,8],[0,2],3,'blue')),
stepMore('Close the span','连接跨河桥面','Add another pair of long bricks above each side, shifted two stud columns toward the center.','两侧各再加一对长砖，向中间错两列凸点。',grid([2,6],[0,2],4,'blue')),
stepMore('Lock the center joint','扣住桥面中缝','Place two long bricks across the center seam.','两块长砖跨住桥面中缝。',grid([4],[0,2],5,'blue')),
stepMore('Raise the towers','搭两座桥塔','On each pier end of the lower deck, stack three crosswise long bricks.','最低层桥面两端各叠三块横向长砖作为桥塔。',[...grid([0,10],[0],4,'orange',2,4),...grid([0,10],[0],5,'cream',2,4),...grid([0,10],[0],6,'cream',2,4)]),
stepMore('Cap the towers','封桥塔顶部','Center one red square on each tower.','每座桥塔顶居中放一块红方砖。',[sq(0,1,7,'red'),sq(10,1,7,'red')])]);

addBuild('garden-rabbit','动物','Garden rabbit','花园小兔','Long ears · big feet · little tail','长耳朵 · 大脚 · 小尾巴','Two tall separated ears rise above a small face, with a round-looking stepped body and a little tail behind.','两只分开的长耳朵竖在小脸上方，身体用阶梯收拢，后方留一小截尾巴。','Build a vegetable patch and a low fence for the rabbit.','给兔子搭一片菜园和矮篱笆。',[
stepMore('Lay the big feet','摆大脚','Place four orange long bricks in an 8 × 4 rectangle.','四块橙色长砖铺成 8 × 4 长方形。',grid([0,4],[0,2],0,'orange')),
stepMore('Cross the foot seams','跨接脚部接缝','Place four cream long bricks crosswise over the feet.','四块浅色长砖转向横放在脚上。',grid([0,2,4,6],[0],1,'cream',2,4)),
stepMore('Shape a seated body','搭坐着的身体','Center two long bricks toward the back and a square at the front.','后方居中放两块长砖，前方居中补一块方砖。',[B(1,0,2,4,2,'cream'),B(1,2,2,4,2,'cream'),sq(5,1,2,'cream')]),
stepMore('Make the face and tail','搭脸和尾巴','Put two long bricks at the front for the head. Add a small square projecting behind the body for the tail.','前方放两块长砖作头部，身体后方加一块稍微伸出的方砖作尾巴。',[{...B(4,0,3,4,2,'cream'),eye:'side'},{...B(4,2,3,4,2,'cream'),eye:'side'},sq(0,1,3,'cream')]),
stepMore('Join the forehead','连接额头','Use a crosswise long brick to join both head bricks. Add a small orange muzzle in front.','横放长砖连接两块头部砖，前方加橙色小嘴。',[{...B(4,0,4,2,4,'cream'),eye:'front'},sq(6,1,4,'orange')]),
stepMore('Space the ears','分开两只耳朵','Place two cream squares across the forehead, each overhanging one side by a stud row.','额头两侧各放浅色方砖，每侧向外挑一排凸点，中间留两列凸点。',[sq(4,-1,5,'cream'),sq(4,3,5,'cream')]),
stepMore('Grow long ears','搭长耳朵','Stack two more squares on each ear; use orange for the middle layer.','每只耳朵再叠两块方砖，中间一层用橙色。',[sq(4,-1,6,'orange'),sq(4,3,6,'orange'),sq(4,-1,7,'cream'),sq(4,3,7,'cream')])]);

// New models are authored front-to-back, then face the existing reset camera.
for(const model of additions){
 if(model.id==='sailboat'){
  const s=model.steps;
  s[3].bricks.push(...s[3].bricks.map(b=>({...b,z:4})));
  s[4].bricks[0].z=5;s[4].bricks.push({...s[4].bricks[0],z:6});
  s[5].bricks[0].z=7;s[5].bricks.push({...s[5].bricks[0],z:8});
  for(const i of [3,4]){s[i].text.en+=' Repeat this layer once.';s[i].text.zh+=' 这一层再重复一次。';}
  s[5].text.en+=' Stack a second cream square on the sail tip.';s[5].text.zh+=' 帆尖再叠一块浅色方砖。';
 }
 if(model.id==='seaplane')for(const s of model.steps)for(const b of s.bricks){
  if(b.z>=2)b.z++;
  else if(b.z===1&&b.w===2&&b.d===4)b.z=2;
 }
 if(model.id==='seaplane')model.steps[1].bricks.sort((a,b)=>a.z-b.z);
 for(const s of model.steps)for(const b of s.bricks)b.y=-b.y-b.d;
}
advanced.push(...additions);
