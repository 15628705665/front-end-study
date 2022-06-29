# 9.27

## 1.改Table中浮上和选中表格时的背景色

tr:hover:not(.ant-table-expanded-row,.ant-table-placeholder) > td,.ant-table-row-hover,.ant-table-row-hover>td{
        background: #EEDDDE !important;
        // background: rgba(143,29,34,0.15) !important;
    }



.ant-table-row-selected,.ant-table-row-selected>td{

​        background: #1F3E75  !important;

​        // background: rgba(143,29,34,0.15) !important;

​    }

2.

# 10.8

1.入会流程

![image-20211008142503960](/Users/changyoucheng/Library/Application Support/typora-user-images/image-20211008142503960.png)

入会后，Rtcbus调用joinroom,实例化本地房间，添加监听后，与远端流媒体的房间建立连接，并根据通过websocket长链接返回的信息更新本地房间，如实例化不同的用户等

一个屏幕最多25个宫格，4个以内为大流，4个以上均为小流。

演讲视图时，大屏为大流，小屏为小流，根据电脑性能，大流可能会降p。

设备端和移动端均只有一路流，可以控制profile来决定拉什么流

RTCBUS是在操作本地实例化出来的房间

SDK是接收流媒体的信息并将信息转发给流媒体

# 10.9

mqtt的连接，不可同时进行，不然会造成双监听甚至多监听的情况。

# 10.11

word-break: break-all; 设置文字的强制自动换行

# 10.13

设置div的border时，如果需要限制宽度,可以为这个div的class设置after伪元素,并设置伪元素的border,并设置宽度即可

.ant-tree-node-content-wrapper{

​        font-size: 16px;

​    }

​    .ant-tree-node-content-wrapper::after{

​        content: '';

​        width: 88%;

​        display: block;

​        margin-top: 17px;

​        border-bottom: 0.5px solid #eee;

​    }

# HB项目总结

至2021.10.13终于解决了所有禅道的bug,对所涉及到的技术进行一个小的总结。

过程：项目初期做了pc端的发起会议，之后就开始了设备端的控制器

## pc端发起会议

![image-20211013181600688](/Users/changyoucheng/Library/Application Support/typora-user-images/image-20211013181600688.png)

### 难点1：左侧

在做发起会议时,难点在于如何让部门进行树状展示

![image-20211013180507470](/Users/changyoucheng/Library/Application Support/typora-user-images/image-20211013180507470.png)

这里依托的是antd中的Tree组件：

​						<Tree

​                                blockNode="true" <!--节点是否占据一行-->

​                                className="tree"

​                                onSelect={   <!--选中后触发的事件-->

​                                    (selectedNodes) => {

​                                        this.selectTreeNode(selectedNodes)

​                                    }

​                                }

​                                style={{ fontSize: 17 }}

​                                treeData={treeLeftlist}  <!--树的数据源-->

​                            />

这里的难点主要在于处理数据源。因为Tree的数据需要有Key和title两个属性，才可以正常显示，所以在展示之前需要先处理数据源，将数据进行递归，为部门节点添加key和title属性,并把所有人员清除，只留下部门作为展示

ergodicData(tree, userlist = [], department) {

​        return tree.map(item => {

​            if (item.nodeType == 2) { 	<!--nodeType=2为人员-->

​                userlist.push({ ...item, department })

​                return {}

​            } else if (item.nodes.length > 0) {  

​                return { ...item, children: this.ergodicData(item.nodes, userlist, item.name), title: item.name, key: item.id }

​            } else {

​                // return {...item,nodes: this.ergodicData(item.nodes,userlist,item.name),children: this.ergodicData(item.nodes,userlist),title:item.name,key:item.id}

​                return { ...item, children: this.ergodicData(item.nodes, userlist, item.name), title: item.name, key: item.id }

​            }

​        })

​    }

处理后的数组 是一个只有部门，部门下的成员全成了null，那么为了展示还要把null清除掉

removenull(treedata) {

​        return treedata.map(item => {

​            if (!item.children || item.children.length === 0) {

​                return item

​            } else if (item.children.length > 0) {

​                let newtree = item.children.filter(m => {

​                    if (JSON.stringify(m) == '{}') return false

​                    else return true

​                })

​                return { ...item, children: this.removenull(newtree) }

​            }

​        })

​    }

### 难点2：右侧

左侧列表形成后,便是对右侧的表格进行展示，此处相对前者来说较易，只要左侧展示的形成好了，右侧的表格只要能拿到当下部门的id进行遍历出该部门下所有成员和子部门的成员即可。

findPersonList(id, tree) {

​        let rightlist = []

​        tree.map(item => {

​            if (item.id === id) {

​                this.ergodicData(item.nodes, rightlist, item.name)

​                //列表排序，在线状态置顶

​                rightlist.sort((a, b) => {

​                    return a.status - b.status

​                })

​                //列表去重

​                rightlist = rightlist.filter(item => item.mid !== 0)

​                this.setState({

​                    rightList: rightlist

​                })

​            } else if (item.nodes.length > 0) {

​                return this.findPersonList(id, item.nodes)

​            }

​        })

​    }



# 11.1

## 多媒体教室项目

### 1.WOL技术：

原理就是源主机广播一个特殊的数据包给目的主机，前提是目的主机的主板支持wake on lan并在BIOS里已经设置好，设置好后关机后网卡还处于通电状态，可以处理网络上发来的一些特殊的包，还要知道目的主机的MAC地址。这个特殊的数据包叫做magic packet 幻数据包，它由102个字节组成，最前面六个字节为0xFF，其他字节为目的主机的MAC地址（6个字节为一组，共16组）

![img](http://images.cnitblog.com/blog/247269/201301/12173353-01c0587c307d484c86c88c85e0bcbd0f.jpg)

通过socket向目标的机器发送魔术包，魔术包的格式，包含有连续6个字节的“FF”和连续重复16次的MAC地址。程序中我们可以采用UDP方式广播发送，不需要端口号，只要知道对方机器的MAC地址即可

#### 已实现wake on lan 局域网内唤醒

被唤醒机器操作步骤：

1.被唤醒机器，进入bois开启网络唤醒功能，pc机器常有笔记本较少

2.被唤醒机器接上网线，设置上网网卡的配置，电源管理中允许此设备唤醒计算机，高级中允许魔术包唤醒

唤醒机器操作步骤：

1.接入网线，要求双方均在一个局域网下

2.获取被唤醒机器的mac地址，执行代码即可 （ipconfig  -all可以看到mac地址与ip地址）

### 2.PeerConnection

WebRTC 中数据传输都是通过被称为 PeerConnection 的对象来完成

![image-20211101110436887](/Users/changyoucheng/Library/Application Support/typora-user-images/image-20211101110436887.png)

![webrtc_p2p_squence](https://img-blog.csdnimg.cn/20200618134458727.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FnZ3Jlc3Nz,size_16,color_FFFFFF,t_70)

这个图虽然没看懂，但我大受震撼

1. peerConnnection 建立之前必须交换两个信息：SDP 和 iceCandidate；
2. Answer 端接收到 Offer 后才会创建 PeerConnection 对象；
3. Offer 端在创建成功本地 Offer 后才会去收集本地 iceCandidate；Answer 端在创建成功本地 Answer 后才会去收集本地 iceCandidate；
4. peerConnection 两端都收到 iceCandidate 后才完成 peerConnection 的建立

11.1号对这个的理解：一个通道，通道双方需要先交换sdp然后建立连接，然后大概就可以进行推拉流了？

# 11.5

## ELectron对于主进程的理解

![image-20211105103519592](/Users/changyoucheng/Library/Application Support/typora-user-images/image-20211105103519592.png)

# 12.3

单行超出省略号代替：

overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' 

# 12.7

情景：使用ELectron实现文件下载时，通过创建a标签的dom触发点击事件来实现下载

代码：

​		const a = document.createElement('a');

​        a.style = 'display: none';

​        a.href = url;

​        a.download = fileName;

​        document.body.appendChild(a)

​        a.click();

当需要设定特定的文件名时，download失效了

解决方法：

a标签中download属性可以更改下载文件的文件名。但是如果是跨域的话，download属性就会失效。

```dart
downloadFile(url, fileName) {
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.responseType = 'blob';
    x.onload=function(e) {
        var url = window.URL.createObjectURL(x.response)
        var a = document.createElement('a');
        a.href = url
        a.download = fileName;
        a.click()
    }
    x.send();
```

# 12.13

关闭窗口改为最小化

win.on('close', function (e) {

​        e.preventDefault();//阻止关闭

​        win.hide();

​    })

# 12.16 js下载

另一侧构建文件软连接 item为文件名

 param.path.map((item) => {

​                        var x = new XMLHttpRequest() //用来解决地址跨域download不生效问题

​                        x.open('GET', `http://${service.referer.address}:7888/${item}`, true)

​                        x.responseType = 'blob'

​                        x.onload = function (e) {

​                            let url = window.URL.createObjectURL(x.response)

​                            let a = document.createElement('a');

​                            a.href = url

​                            let arr = item.split('_')

​                            a.download = arr[0];

​                            a.click();

​                        }

​                        x.send()

​                    })

# 12.17

## 多媒体教室Mqtt启动流程

1.启动Mqtt服务  HB项目是在服务器上启动了Mqtt服务 多媒体教室是在教师端启动了Mqtt服务
2.两方需要连接Mqtt服务 
①需要获取Mqtt的服务地址  
	HB项目=》地址与域名相关 可以从URL中截取或者设置中设定  
	多媒体教室=》地址与教师端IP地址相关，教师端自己可以获得自己的IP，学生端通过bonjour服务发现同一局域网内的教师端后会返回教师端IP。
②确定连接时唯一标识 clientId
	 HB项目=》uuid+时间戳
	多媒体教室=》本机Mac地址 
③
**2.11**
构建RTCPeerConnection后,如果需要关闭管道,除了pc.close外记得将**pc=null**才可以完全释放,不然释放不完全
**2.12**
**获取媒体流后,页面标签会有红点,关闭媒体流代码:**
 navigator.mediaDevices.getUserMedia(options).then(res => {
            this.teacherAudioStream = res
            event.subscribe('endAudio', () => {
                res.getTracks()[0].stop()//关闭媒体
                endAudio.unsubscribe()//关闭监听
            })
        }).catch(err => {
            console.log('生成音频流err:', err);
        })
**事件发射器**
class EventEmitter {

    constructor(events) {
        this.events = events || {};
    }

    subscribe(name, cb) {
        (this.events[name] || (this.events[name] = [])).push(cb);

        return {
            unsubscribe: () =>
                this.events[name] && this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
        };
    }
    unsubscribe(name, cb) {
        this.events[name] && this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
    }
    emit(name, ...args) {
        (this.events[name] || []).forEach(fn => fn(...args));
    }
}
export default EventEmitter
**多画面监考**
1.连接Mqtt,通过Mqtt监听学生登录|推流|离线消息
2.初始化页面,九宫格排列
3.调接口获取学生列表,根据拿到的学生列表,进行区分web与app,并进行宫格渲染
4.渲染后,当前页面的宫格内学生如果有视频流地址,则进行拉流.
拉流逻辑:
    ①学生端登录后推流,并把流地址通过RTCS平台透传给老师
    (透传解析:学生端调用RTCS接口,把流地址等学生信息/topic/type传上去.RTCS拿到后,发送Mqtt消息topic和type用的就是之前传的,内容就是学生信息,这个topic老师会监听并会做出拉流处理,当老师离线未能监听时,还有一体化后台会监听全局,并把消息汇总,这也就是一开始调接口拿的学生数据)
    ②教师端拿到流地址后,进行拉流
    ③let pc = new window.RTCPeerConnection({}) 创建管道用于拉流
    ④pc.onaddstream = (e) => {  用于监听管道内流信息
        //业务逻辑
    })
    ⑤
**canvas drawImage()**
截取图片为特定尺寸
let size = {width:'',height:''}
let canvas = document.getElementById('myCanvas')
canvas.width = size.width;
canvas.height = size.height;
let ctx = canvas.getContext('2d');
ctx.drawImage(this.localVideo, 0, 0, size.width, size.height);
**ELectron初始化安装问题**
Q: Error: EACCES: permission denied, mkdir '******'
A: 权限不够，不知道是不是因为Electron是开发客户端的原因啊，解决方法： 
sudo npm install --registry=https://registry.npm.taobao.org --unsafe-perm=true --allow-root
**微信开发**
1.taro
**学习自动化脚本打包**
**刷新window10图标**
 app.exe -show
 **3.27图书馆小记**
 1.indexOf() 替换为:
 includes()：返回布尔值，表示是否找到了参数字符串。

##js 原型问题
在JS里，万物皆对象，对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法
方法(Function)
　　方法这个特殊的对象，除了和其他对象一样有上述_proto_属性之外，还有自己特有的属性——原型属性（prototype），这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。
###使用new命令时，在构造函数内部依次执行下面的步骤。

•第一步：创建一个空对象，作为将要返回的对象。•第二步：将这个空对象的隐式原型（_proto_）指向构造函数的显式原型(prototype)属性。这一步的作用是让这个对象能沿着原型链去使用构造函数中prototype上的方法。•第三步：将这个空对象赋值给构造函数内部的this关键字，执行构造函数。这一步的作用是让构造器中设置在this上的属性最终设置在这个对象上。•第四步：返回这个对象。
