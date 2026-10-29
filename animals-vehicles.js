// All dimensions are in stud pitches and standard brick heights.
// Wheel bases are schematic modules, conditional on a matching real top footprint.
const collection=[];
const lessonNew=(id,category,en,zh,se,sz,le,lz,pe,pz,steps,chassis=false)=>collection.push({id,category,level:'builder',name:pair(en,zh),skill:pair(se,sz),look:pair(le,lz),prompt:pair(pe,pz),note:pair(chassis?'Requires a wheeled base with a usable 8 × 4 stud deck. The base drawing is schematic, not a confirmed part from your photo. Check your base and adapt the body if its dimensions differ.':'Uses standard-height 2 × 2 and 2 × 4 bricks. Eyes are optional printed decoration. Keep the main body colors consistent to make the silhouette clear.',chassis?'需要可用顶面为 8 × 4 凸点的轮式底盘。图中底盘是尺寸示意，并非已从照片确认的零件；请先核对实物，尺寸不同需调整车身。':'使用普通高度的 2 × 2 和 2 × 4 积木，眼睛为可选印花。主体颜色尽量统一，让轮廓更清楚。'),steps});
const NS=stepMore;
lessonNew('penguin','动物','Little penguin','小企鹅','White belly · flippers · orange beak','浅色肚皮 · 双鳍 · 橙色嘴','A dark upright body frames a pale belly. Two side flippers and broad orange feet complete the penguin.','深色直立身体包着浅色肚皮，两侧伸出鳍，下面是宽宽的橙色脚。','Give the penguin an ice island and a small fishing pool.','给企鹅搭一座冰岛和一个捕鱼的小水池。',[
NS('Big orange feet','橙色大脚','Place two long bricks front to back, side by side.','两块长砖朝前后方向并排摆放。',grid([0,2],[-1],0,'orange',2,4)),
NS('Round lower body','搭下半身','Cover the feet with two blue long bricks, shifted one stud row back.','两块蓝长砖盖住脚，向后错一排凸点。',grid([0,2],[0],1,'blue',2,4)),
NS('Show the pale belly','露出浅色肚皮','Place a cream long brick across the front and a blue one across the back.','前方横放浅色长砖，后方横放蓝长砖。',[B(0,0,2,4,2,'cream'),B(0,2,2,4,2,'blue')]),
NS('Spread the flippers','伸出双鳍','Place a cream long brick down the middle. Add a blue square on either side, extending outward by one stud.','正中纵放浅色长砖，左右各加蓝方砖，向外各伸一列凸点。',[B(1,0,3,2,4,'cream'),sq(-1,1,3,'blue'),sq(3,1,3,'blue')]),
NS('Make a broad head','搭宽脑袋','Place two blue long bricks front to back across the top.','顶端并排放两块朝前后的蓝长砖。',grid([0,2],[0],4,'blue',2,4)),
NS('Face and beak','加脸和嘴','Center a blue long brick across the head. Put an orange square in front, overlapping the lower head by one stud row.','蓝长砖横放在头部中间；前方放橙方砖，与下方头部重叠一排凸点。',[{...B(0,1,5,4,2,'blue'),eye:'pair'},sq(1,-1,5,'orange')])]);

lessonNew('turtle','动物','Garden turtle','花园乌龟','Low shell · four feet · small head','低龟壳 · 四脚 · 小脑袋','A broad stepped shell sits over four low feet, with a small head and tail at opposite ends.','宽宽的阶梯龟壳压在四只短脚上，小脑袋和尾巴分别伸出两端。','Make a pond with a low ramp the turtle can climb.','搭一个池塘，再搭一道乌龟能爬上的缓坡。',[
NS('Space four feet','摆四只脚','Place four squares at the corners of an 8 × 6 footprint.','四块方砖放在 8 × 6 范围的四角。',grid([0,6],[0,4],0,'green',2,2)),
NS('Bridge the feet','连接四脚','Lay four long bricks in two rows, each overlapping the feet by one stud row.','四块长砖分两排放，每排与脚重叠一排凸点。',grid([0,4],[1,3],1,'green')),
NS('Lock the shell base','连接龟壳底座','Turn three long bricks front to back and center them across the body.','三块长砖转成前后方向，在身体中间并排铺放。',grid([1,3,5],[1],2,'orange',2,4)),
NS('Add the head and tail','加头和尾巴','Put a square at each end, extending one stud beyond the body.','两端各加一块方砖，向身体外伸一列凸点。',[{...sq(7,2,2,'green'),eye:'front'},sq(-1,2,2,'green')]),
NS('Round the shell','收拢龟壳','Center two green long bricks over the orange layer, then one orange long brick on top.','橙色层上居中放两块绿长砖，顶端再居中放一块橙长砖。',[B(2,1,3,2,4,'green'),B(4,1,3,2,4,'green'),B(3,1,4,2,4,'orange')])]);

lessonNew('elephant-walk','动物','Walking elephant','散步的大象','Four legs · large ears · hanging trunk','四腿 · 大耳朵 · 下垂长鼻','The trunk reaches down in front of the head. Broad ears and a heavy body distinguish it from a long-necked animal.','长鼻子从头前方一直垂到地面；宽耳朵和厚身体让它有大象的比例。','Build a water trough at trunk height and a shady tree.','在象鼻旁搭饮水槽，再搭一棵遮阳树。',[
NS('Legs and trunk tip','摆腿和鼻尖','Place four feet at the corners of an 8 × 6 footprint. Place a separate trunk-tip square two studs ahead of the front feet.','四只脚摆在 8 × 6 的四角；前脚前方隔两列凸点另放鼻尖方砖。',[...grid([0,6],[0,4],0,'blue',2,2),sq(10,2,0,'blue')]),
NS('Sturdy legs','搭结实的腿','Add one square on each foot. Raise the trunk separately by five squares.','每只脚加一块方砖，独立的象鼻继续叠五块方砖。',[...grid([0,6],[0,4],1,'blue',2,2),...[1,2,3,4,5].map(z=>sq(10,2,z,'blue'))],'Keep the trunk on the table; it joins the head later.','象鼻暂时独立放在桌上，稍后与头连接。'),
NS('Bridge front and back legs','跨接前后腿','Lay four long bricks across the leg tops, in two rows.','四块长砖分两排跨在腿上。',grid([0,4],[0,4],2,'blue')),
NS('Broaden the body','搭宽身体','Center four long bricks front to back across the lower body.','四块长砖朝前后方向，居中并排铺在下层身体上。',grid([0,2,4,6],[1],3,'blue',2,4)),
NS('Lock the back','连接背部','Cross the central seam with two long bricks; close each end with a crosswise long brick.','两块长砖跨住中缝，左右端各用一块转向长砖补齐。',[B(2,1,4,4,2,'blue'),B(2,3,4,4,2,'blue'),B(0,1,4,2,4,'blue'),B(6,1,4,2,4,'blue')]),
NS('Head and broad ears','搭头和大耳朵','Place a long brick at the front of the back for the head. Stack two squares for each ear, extending out to either side.','背部前端放长砖作为头，两侧各叠两块方砖形成伸出的耳朵。',[B(7,1,5,2,4,'blue'),sq(5,0,5,'cream'),sq(5,4,5,'cream'),sq(5,0,6,'cream'),sq(5,4,6,'cream')]),
NS('Join the hanging trunk','连接下垂象鼻','Place a square behind the trunk bridge, then span the head and the separate trunk with one long brick.','象鼻横梁后方放一块方砖，再用长砖跨住头部和独立的象鼻。',[sq(6,2,6,'blue'),B(8,2,6,4,2,'blue')],'Hold the trunk upright while clipping the beam onto both supports.','一手扶住象鼻，另一手将横梁扣住两端。'),
NS('Finish the forehead','完成额头','Place one crosswise long brick above the head and trunk join.','头和象鼻接头上方横放长砖。',[{...B(7,1,7,2,4,'blue'),eye:'front'}])]);

const baseWheels=()=>({...B(0,0,0,8,4,'dark'),kind:'chassis'});
lessonNew('city-bus','物品','City bus','城市巴士','Four wheels · long windows · roof','四轮 · 长排车窗 · 车顶','A long yellow body, blue window band and four round wheels make a city bus.','长黄色车身、蓝色车窗带和四个圆轮组成城市巴士。','Build a bus stop and a road linking the house to the harbor.','搭一个公交站，再修一条连接小屋和港口的路。',[
NS('Check the wheeled base','核对轮式底盘','Use a wheeled base with an 8 × 4 stud top, as shown schematically.','使用顶面 8 × 4 凸点的轮式底盘，图中为尺寸示意。',[baseWheels()],'Compare the actual top stud grid first. Wheels and axle details vary by part.','先核对实物顶面的凸点阵列，轮子和车轴细节因零件而异。'),
NS('Extend the floor','延长车厢地板','Lay six yellow long bricks in three pairs. Overhang the front and rear of the base by two studs.','六块黄长砖分三对铺放，向底盘前后各伸出两列凸点。',grid([-2,2,6],[0,2],1,'yellow')),
NS('Cross the floor seams','跨接地板接缝','Turn six yellow long bricks across the body.','六块黄长砖转向横铺在车身上。',grid([-2,0,2,4,6,8],[0],2,'yellow',2,4)),
NS('Make a blue window band','搭蓝色车窗带','Add three pairs of blue long bricks along the body.','沿车身加三对蓝长砖。',grid([-2,2,6],[0,2],3,'blue')),
NS('Raise the windows','加高车窗','Add a second blue layer across the first.','第二层蓝砖转向，与第一层交错。',grid([-2,0,2,4,6,8],[0],4,'blue',2,4)),
NS('Cap the roof','盖车顶','Cover the window band with six yellow long bricks. Add a red roof marker at the rear.','六块黄长砖盖住窗带，车顶后方加一个红色标记。',[...grid([-2,2,6],[0,2],5,'yellow'),sq(-1,1,6,'red')])],true);

lessonNew('steam-engine','物品','Steam locomotive','蒸汽火车头','Cab · long boiler · chimney','驾驶室 · 长锅炉 · 烟囱','A tall rear cab and a high front chimney rise above a low boiler and four wheels.','高高的后驾驶室、前方烟囱、低长锅炉与四个车轮形成火车头轮廓。','Add a station platform and a wagon behind the engine.','搭一座站台，再在火车头后设计一节车厢。',[
NS('Choose the wheeled base','选轮式底盘','Use a wheeled base with an 8 × 4 stud deck.','使用可用顶面为 8 × 4 凸点的轮式底盘。',[baseWheels()],'Check the real stud grid before starting; this is a schematic base.','先核对实物凸点阵列，图中为底盘示意。'),
NS('Lay the red platform','铺红车台','Place six red long bricks along the base, overhanging both ends.','六块红长砖铺在底盘上，前后挑出。',grid([-1,3,7],[0,2],1,'red')),
NS('Cab and boiler foot','搭驾驶室与锅炉底','At the rear use two crosswise green bricks. Ahead of them, center two green long bricks end to end.','后部横放两块绿砖；前方居中首尾放两块绿长砖。',[B(0,0,2,2,4,'green'),B(2,0,2,2,4,'green'),B(4,1,2,4,2,'green'),B(8,1,2,4,2,'green')]),
NS('Boiler and cab windows','搭锅炉和驾驶窗','Place two blue long bricks across the rear cab. Add a green long brick across the boiler joint.','后驾驶室横放两块蓝长砖；锅炉接缝上跨放绿长砖。',[B(0,0,3,4,2,'blue'),B(0,2,3,4,2,'blue'),B(6,1,3,4,2,'green')]),
NS('Raise the cab','加高驾驶室','Raise the blue cab by one layer. Start a dark chimney on the front of the boiler.','蓝驾驶室再加一层，锅炉前方加深色烟囱底。',[B(0,0,4,2,4,'blue'),B(2,0,4,2,4,'blue'),sq(8,1,4,'dark')]),
NS('Roof and chimney','搭车顶和烟囱','Overhang the cab with three red long bricks. Add two dark squares to the chimney.','三块红长砖盖驾驶室并向两侧挑出，烟囱再叠两块深色方砖。',[...grid([-1,1,3],[0],5,'red',2,4),sq(8,1,5,'dark'),sq(8,1,6,'dark')]),
NS('Flared chimney top','展开烟囱顶','Center a dark long brick across the chimney top.','烟囱顶部居中横放深色长砖。',[B(8,0,7,2,4,'dark')])],true);

lessonNew('rescue-helicopter','物品','Rescue helicopter','救援直升机','Landing skids · tail boom · rotor','起落滑橇 · 长尾梁 · 旋翼','A blue cockpit sits between two skids, under a broad cross-shaped rotor. A long tail reaches behind it.','蓝驾驶舱架在两条滑橇之间，上方是十字旋翼，后方伸出长尾梁。','Build a hospital helipad with a clear landing area.','搭医院停机坪，留出一块完整降落区域。',[
NS('Lay landing skids','摆起落滑橇','Make two rows of three blue long bricks, two stud columns apart.','每排三块蓝长砖，共两排，排间留两列凸点。',grid([0,4,8],[0,4],0,'blue')),
NS('Lock the skids','连接滑橇各段','Cross each skid’s seams with two long bricks.','每条滑橇各用两块长砖跨住接缝。',grid([2,6],[0,4],1,'blue')),
NS('Span the landing gear','跨接起落架','Bridge the gap with two crosswise yellow long bricks.','两块黄长砖横向跨住中间间隙。',[B(3,1,2,2,4,'yellow'),B(7,1,2,2,4,'yellow')]),
NS('Cockpit and long tail','搭机舱和长尾','Use three long bricks along the center for the tail, body and blue nose.','三块长砖沿中间搭尾梁、机身和蓝色机头。',[B(0,2,3,4,2,'yellow'),B(4,2,3,4,2,'yellow'),B(8,2,3,4,2,'blue')]),
NS('Round the cockpit','加厚机舱','Add two blue crosswise bricks over the front body. Place a yellow long brick across the tail joint.','前机身上横放两块蓝长砖，尾梁接缝上跨放黄长砖。',[B(6,1,4,2,4,'blue'),B(8,1,4,2,4,'blue'),B(2,2,4,4,2,'yellow')]),
NS('Roof and tail fin','搭机舱顶和尾翼','Cover the cockpit with a yellow long brick. Raise two squares at the far tail end.','黄长砖盖机舱顶，尾端叠两块方砖作尾翼。',[B(6,2,5,4,2,'yellow'),sq(0,2,4,'red'),sq(0,2,5,'red')]),
NS('Rotor mast','搭旋翼轴','Stack two centered squares on the cockpit roof.','机舱顶中间叠两块方砖。',[sq(7,2,6,'dark'),sq(7,2,7,'dark')]),
NS('Cross-shaped rotor','搭十字旋翼','Join two long bricks end to end on the mast, then lay two more crosswise above them.','轴顶两块长砖首尾接，再在上方横向放两块长砖组成十字。',[B(4,2,8,4,2,'dark'),B(8,2,8,4,2,'dark'),B(7,-1,9,2,4,'dark'),B(7,3,9,2,4,'dark')],'This rotor is a fixed brick cross; it does not spin.','这是固定的积木十字旋翼，不能旋转。')]);

lessonNew('bulldozer','物品','Construction bulldozer','工地推土机','Dark tracks · high cab · wide blade','深色履带 · 高驾驶室 · 宽铲板','Two dark tracks carry a yellow cab. A wide front blade extends beyond both sides.','两条深色履带托着黄驾驶室，前方宽铲板向两侧展开。','Build a construction site with a pile of loose bricks to move.','搭一片工地，摆一堆待搬运的积木。',[
NS('Lay two tracks','铺两条履带','Place two rows of three dark long bricks, leaving two stud columns between them.','两排深色长砖，每排三块，中间隔两列凸点。',grid([0,4,8],[0,4],0,'dark')),
NS('Join the track sections','连接履带各段','Cross each track’s seams with two dark long bricks.','每条履带用两块深色长砖跨住接缝。',grid([2,6],[0,4],1,'dark')),
NS('Bridge the chassis','跨接车架','Place two crosswise yellow long bricks between the tracks.','两块黄长砖横向跨在履带之间。',[B(3,1,2,2,4,'yellow'),B(7,1,2,2,4,'yellow')]),
NS('Body and engine hood','搭车身和引擎盖','Place two yellow long bricks along the center, then two blue bricks crosswise over the rear cab.','两块黄长砖沿正中首尾连接，后部横放两块蓝长砖搭驾驶室。',[B(2,2,3,4,2,'yellow'),B(6,2,3,4,2,'yellow'),B(2,1,4,2,4,'blue'),B(4,1,4,2,4,'blue')]),
NS('Cab roof','搭驾驶室顶','Cover the cab with two crosswise yellow long bricks.','两块横向黄长砖盖驾驶室顶。',[B(2,1,5,2,4,'yellow'),B(4,1,5,2,4,'yellow')]),
NS('Attach the blade arms','搭铲板支臂','From the front of each track, extend a yellow long brick ahead of the machine.','两条履带前端各伸出一块黄长砖，作为铲板支臂。',[B(9,0,2,4,2,'yellow'),B(9,4,2,4,2,'yellow')]),
NS('Spread the wide blade','展开宽铲板','Lay two orange crosswise long bricks at the front, reaching one stud beyond either side.','前方横放两块橙色长砖，两侧各向外挑一列凸点。',[B(11,-1,3,2,4,'orange'),B(11,3,3,2,4,'orange')]),
NS('Raise and lock the blade','加高并连接铲板','Center one long brick across the blade seam and add a square at each end.','长砖居中跨铲板中缝，两端各补方砖。',[B(11,1,4,2,4,'orange'),sq(11,-1,4,'orange'),sq(11,5,4,'orange')],'The brick-built tracks and blade are stationary.','积木搭出的履带和铲板均为固定结构。')]);

C.dark='#344851';
// Refine the silhouettes before applying the common camera convention.
{
 const penguin=collection.find(l=>l.id==='penguin');
 for(const s of penguin.steps)for(const b of s.bricks)if(b.c==='blue')b.c='dark';
 for(const s of penguin.steps){s.text.en=s.text.en.replaceAll('blue','dark');s.text.zh=s.text.zh.replaceAll('蓝','深色');}
 const bus=collection.find(l=>l.id==='city-bus');
 bus.steps[3].bricks=grid([-2,0,2,4,6,8],[0,2],3,'blue',2,2).map(b=>({...b,c:[0,4].includes(b.x)?'yellow':'blue'}));
 bus.steps[4].bricks=grid([-2,0,2,4,6,8],[0],4,'blue',2,4).map(b=>({...b,c:[0,4].includes(b.x)?'yellow':'blue'}));
 bus.steps[3].text=pair('Make a row of square bricks on each side. Alternate blue windows with yellow pillars as numbered in the diagram.','左右各铺一排方砖，按编号图用蓝色车窗与黄色立柱间隔排列。');
 bus.steps[4].text=pair('Turn long bricks across the body above the first window layer, keeping the yellow pillars aligned.','长砖转向横放在第一层车窗上，黄色立柱保持上下对齐。');
}
for(const model of collection)for(const stage of model.steps)for(const b of stage.bricks)b.y=-b.y-b.d;
advanced.unshift(...collection);
