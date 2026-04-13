
---

# 可直接喂给 Figma 的完整优化提示词

请为产品 **VibeHub** 设计一套完整、专业、可开发落地的 Web 前端 UI 重构方案。
本次设计不是单纯做视觉升级，而是要以 **“所有前端功能必须完整落地”** 为第一原则，在此基础上再进一步提升交互体验、界面质感和品牌辨识度。

---

## 一、产品定位

VibeHub 不是 GitHub 的复制品。
GitHub 的核心是代码仓库与协作管理。
**VibeHub 的核心定位是：为 Vibe Coding 开发者提供一个“线上协作 + 产品曝光 + 社交连接”的平台。**

它要服务的是：

* AI-native builders
* vibe coding 开发者
* 开源项目创作者
* 独立开发者
* 线上协作团队
* 想要曝光产品、招募协作者、寻找团队、建立个人影响力的人

### 与 GitHub 的本质差异

请在整体设计语言中明确体现以下差异：

1. **VibeHub 更社交**

   * 不只是代码托管
   * 更强调项目曝光、开发者互动、内容讨论、协作招募、创作者影响力

2. **VibeHub 更产品化**

   * 项目不只是 repo，而是可展示、可传播、可被发现的产品实体
   * 项目页要像“产品主页 + 协作入口 + 开发者资产中心”

3. **VibeHub 更强调协作关系**

   * 团队、项目、讨论、创作者之间要构成可感知的生态
   * 让人感觉这是一个“线上协作网络”，而不是单纯的代码平台

4. **VibeHub 更适合 AI 与 Vibe Coding 时代**

   * 要体现 agent、MCP、workflow、开放 API、在线协作的未来感
   * 但避免赛博朋克和过度技术炫技

---

## 二、设计总原则

### 第一优先级：功能必须完整落地

本次设计请以 **“所有前端功能真实可落地”** 为最高标准。

不允许出现以下问题：

* 看起来像能点，但没有对应界面状态
* 只有静态视觉，没有真实交互闭环
* 只有入口，没有创建 / 编辑 / 删除 / 审批 / 空状态 / 错误状态
* 只有概览页，没有详情页、表单页、状态页
* 只有 desktop 样式，没有移动端方案
* 只有漂亮卡片，没有真实信息结构

### 设计要求

请确保：

1. 每一个入口都有后续界面
2. 每一个交互都有状态变化
3. 每一个功能都有完整 flow
4. 每一个页面都有 empty / loading / error / permission state
5. 所有设计都要能被前端开发稳定实现

---

## 三、产品体验目标

请把 VibeHub 设计成一个兼具以下特征的产品：

* 像高端开发者社区
* 像 AI-native 协作平台
* 像现代 SaaS 工作台
* 像创作者展示网络
* 像产品曝光平台
* 但绝不能像传统论坛，也不能像普通暗黑后台

### 设计关键词

* premium dark
* calm and intelligent
* social for builders
* product showcase driven
* collaborative
* dev-friendly
* AI-native
* expressive but restrained
* eye-friendly
* credible and scalable

---

## 四、视觉风格要求

### 基础风格

请采用：

* 高端 dark theme
* 克制、护眼、专业
* 开发者友好
* 现代 SaaS + dev-tool 融合风格
* 允许轻度玻璃拟态，但不要泛滥
* 卡片层次明确，信息结构清晰

### 禁止方向

不要做成：

* 纯黑背景 + 高饱和霓虹线条的赛博朋克
* 过于娱乐化的 Web3 风格
* 过度暖奶油风
* 传统 B2B 后台那种沉闷暗灰
* 只有科技感，没有社交感和产品感

---

## 五、背景与材质设计要求

### 当前问题

当前原型界面的背景层次偏简单，缺少质感和品牌记忆点。

### 新要求

请在整体 dark 视觉基础上，为背景加入一种 **“轻微电路板 / 芯片板 / 粗粒电子纹理感”** 的高级材质语言。

### 具体要求

这种背景纹理必须满足：

1. **只能作为低频隐性纹理**

   * 不能喧宾夺主
   * 不能影响文字可读性
   * 不能像科幻海报背景

2. **更像高级电子工业材料感**

   * 类似电路板、芯片走线、工业板纹理、细微网格、粗粒噪点、导线拓扑
   * 可以加入非常淡的线路节点、回路、网格纹理、微发光断续线

3. **表现形式建议**

   * 大面积深色基底 + 局部低透明纹理
   * hero 背景可有轻微 radial glow
   * 局部区域可有 circuit-routing 感线条
   * 卡片内背景可带极低透明度细颗粒噪点
   * 工作台 / Admin / Project Hero 可用更科技一点的变体
   * 公共页面则更柔和

4. **必须保持高级感**

   * 不要廉价
   * 不要花
   * 不要密集装饰
   * 不要像主视觉插画

### 目标效果

让背景看上去像一块“被精密打磨过的智能电子基板”，
让产品在深色下更有 **科技质感、开发者属性和品牌辨识度**。

---

## 六、色彩系统要求

请建立完整的深色品牌色板。

### 色彩方向

整体偏：

* slate blue
* graphite
* midnight gray
* cold blue accent
* subtle cyan accent
* optional enterprise emerald / premium violet as secondary accents

### 配色目标

* 护眼
* 高级
* 可长期使用
* 冷静但不冷漠
* 有科技感但不高饱和刺眼

### 必须输出完整语义色系统

请提供：

* background
* surface
* elevated surface
* border
* foreground
* muted foreground
* primary
* secondary accent
* success
* warning
* error
* info
* featured
* enterprise
* premium

每种语义色请至少考虑：

* text
* subtle background
* subtle border
* solid background

---

## 七、动效与交互设计要求

在功能完整落地的基础上，请进一步提升微交互和界面动效。

### 动效原则

* 轻盈
* 高级
* 精准
* 不花哨
* 不影响效率
* 不用大幅度夸张动画

### 建议动效

请在以下场景加入专业化动效：

1. 页面进入

   * section reveal
   * staggered fade-up
   * 数据卡轻微延迟入场

2. Hover 动效

   * 卡片轻微提升
   * border / glow 微增强
   * CTA 按钮强调
   * 列表项 hover 背景变化

3. 交互反馈

   * tabs 切换
   * filter panel 展开/收起
   * modal / drawer 动画
   * language switch 过渡
   * notification badge 更新
   * charts hover tooltip
   * table row focus state

4. 背景动态

   * hero 可加入极轻的 gradient drift
   * 电路纹理区域可有弱动态扫描感
   * enterprise / admin 区域可有微弱电子流动感
   * 但必须极轻，不抢内容

5. 重点强调动效

   * approval success
   * create new project
   * invite accepted
   * collaboration intent submitted
   * MCP / API key created
   * featured project hover

### 绝对禁止

* 大面积粒子动画
* 花哨 3D 翻转
* 强闪烁
* 过重的视差
* 炫技式赛博扫描条

---

## 八、功能完整落地要求

请把所有核心功能都真正设计完整，而不是只做几个门面页。

---

# A. 公共站点（Public）

## 1. 首页 `/`

页面目标：品牌首页 + 社区入口 + 协作平台价值表达

必须包含：

* 顶部导航
* Hero 区
* 平台定位表达
* 搜索入口
* 平台数据概览
* Featured Projects
* Community Feed
* Active Teams
* 创作者或项目曝光模块
* Footer

请强化：

* 这是 builder 的线上协作网络
* 不只是 code hosting
* 是产品曝光和社交协作平台

---

## 2. Discover `/discover`

页面目标：项目发现与产品曝光主场

必须包含：

* 搜索
* 分类
* 排序
* 筛选器
* Tech Stack
* Stage / Status
* Team
* 是否招募中
* 结果列表
* Project Card
* 分页
* 空状态

请强调：

* 这是“产品发现页”，不是 repo 列表页
* 卡片要有更强产品属性和可信元数据

---

## 3. Discussions `/discussions`

页面目标：开发者讨论与内容流

必须包含：

* 分类
* 排序
* 帖子卡片流
* 标签
* 回复数 / 热度 / 最新活动
* 详情跳转
* 空状态
* 发布入口

请避免传统论坛感，
更接近高质量 builder 社区内容流。

---

## 4. Teams `/teams`

页面目标：寻找团队、加入协作、线上组织关系

必须包含：

* Hero
* 团队筛选
* 团队卡片
* 团队状态
* 成员规模
* 所需角色
* 时区 / 远程状态
* 是否开放加入
* Create Team 入口
* Load more / pagination

重点表达：

* 这是线上协作组织网络
* 团队是平台核心资产之一

---

## 5. Leaderboards `/leaderboards`

页面目标：影响力、趋势、贡献度展示

必须包含：

* 周榜
* 项目榜
* 讨论榜
* 创作者贡献榜
* 时间切换
* 可视化表现
* 说明文字
* 空状态

设计上要有“社区势能中心”的感觉。

---

# B. 详情页（Detail）

## 6. Project Detail `/projects/[slug]`

这是最关键页面之一。

请把它设计成：
**产品主页 + 协作入口 + 开发者资产页 + 曝光页**

必须包含：

* 项目 Hero
* Logo / Cover
* 项目标题与一句话介绍
* 状态标签
* GitHub / Website / Demo / Docs
* 关键指标（stars, forks, contributors, activity）
* About
* Screenshot Gallery
* Tech Stack
* Installation / Usage / Docs
* MCP Configuration
* Collaboration Intent
* Team 归属
* Contributors / Maintainers
* Discussion summary
* Related projects
* Report / share / save

请避免只像代码仓库页，
一定要更像“产品曝光页”。

---

## 7. Discussion Detail

必须包含：

* 标题
* 标签
* 作者信息
* 发布时间
* 正文
* 评论区
* 评论层级
* 回复输入框
* 相关讨论
* 互动指标

重点是：阅读体验要好，长文不累，评论结构清晰。

---

## 8. Team Detail

必须包含：

* 团队头部
* mission
* external links
* GitHub org / repo
* 成员
* 活跃项目
* 任务板
* milestone
* join request
* invite / review flow
* 团队文化与招募说明

请让它更像线上团队协作空间，而不是静态资料卡。

---

## 9. Creator Detail

必须包含：

* 个人 Hero
* headline
* bio
* skills
* collaboration preference
* reputation / contribution
* portfolio
* active projects
* discussions
* social proof

这是开发者的公开个人品牌主页。

---

# C. 登录后用户区（Workspace）

## 10. Notifications

必须包含：

* 未登录态
* 通知列表
* 未读态
* 跳转动作
* 批量已读
* 空状态
* error state

---

## 11. API Keys / Developer Settings

必须包含：

* API key list
* create key
* scopes
* copy
* revoke
* OpenAPI
* MCP
* usage info
* security notice
* empty state

---

## 12. Enterprise Workspace

必须包含：

* 顶部概览
* collaboration funnel
* project radar
* talent radar
* pending approvals
* team overview
* API/MCP 管理
* date range
* metric cards
* charts
* table/list panels

重点表达：

* 这是组织级工作台
* 更偏决策、管理、洞察
* 不能只像普通 dashboard

---

# D. Admin

## 13. Admin Dashboard

必须包含：

* overview
* moderation
* user management
* audit logs
* MCP/API audit
* infrastructure
* content risk
* system settings
* filters
* table states
* row actions
* responsive admin shell

必须与公共站点 UI 明显区分，但仍属于同一品牌体系。

---

## 九、必须补齐的功能页面与流程

请不要只设计主页面，必须把所有关键流程完整设计出来：

### 创建 / 编辑

* 创建项目
* 编辑项目
* 创建讨论
* 编辑讨论
* 创建团队
* 编辑团队资料

### 协作流程

* 申请加入团队
* 审批申请
* 邀请成员
* 创建任务
* 编辑任务
* 创建 milestone
* 编辑 milestone
* 绑定团队
* 设置协作意向

### 系统页面

* 登录页
* 注册 / onboarding
* 404
* 无权限
* 无结果
* error
* loading skeleton
* success feedback
* destructive confirmation modal

---

## 十、功能闭环与状态设计要求

每个页面、组件、流程必须输出以下状态：

* default
* hover
* active
* focused
* selected
* disabled
* loading
* empty
* error
* success
* permission denied

特别要求：

1. 不要出现伪 tab
2. 不要出现伪 filter
3. 不要出现假按钮
4. 不要出现只有列表页、没有详情页
5. 不要出现只有入口、没有提交成功反馈
6. 不要出现点击后用户不知道发生了什么的情况

---

## 十一、中英文切换要求

必须支持中英文双语。

### 语言切换要求

* 顶部导航中有语言切换器
* 支持 EN / 中文
* 切换逻辑要自然
* 适配 desktop / mobile
* 所有关键页面都要考虑双语长度差异

### 设计要求

请至少展示：

* 英文版关键页
* 中文版关键页
* 语言切换器组件
* 中英文下 nav / tabs / buttons / forms 的长度适配方案

---

## 十二、组件系统要求

请建立完整设计系统，并确保所有页面优先复用组件。

### 基础组件

* Button
* Input
* Search
* Textarea
* Select
* Checkbox
* Radio
* Tabs
* Pagination
* Badge
* Avatar
* Tooltip
* Dropdown
* Modal
* Drawer
* Toast
* Language Switch
* Search Bar
* Status Tag

### 业务组件

* Project Card
* Team Card
* Discussion Card
* Creator Card
* Metric Card
* Radar Card
* Chart Card
* Audit Row
* Notification Item
* Filter Sidebar
* Hero Section
* Empty State Block
* Skeleton
* Code Block Card
* Collaboration Form
* Task Card
* Milestone Block

### 每个组件要求

* Auto Layout
* Variants
* Dark theme support
* Bilingual text support
* State completeness
* Ready for frontend handoff

---

## 十三、布局与响应式要求

请输出：

### Desktop

* 1440px
* 12-column grid

### Tablet

* 1024px
* 8-column grid

### Mobile

* 390px
* 4-column grid

至少以下页面必须做三端适配：

* Navbar
* Home
* Discover
* Project Detail
* Teams
* Enterprise Workspace
* Admin shell

---

## 十四、前端可实现性要求

请确保所有设计都适合前端真实实现，不要只做静态美术稿。

### 需要特别考虑：

* React/Tailwind 组件化实现
* dark theme token 化
* 双语切换适配
* 卡片 hover 与链接热区冲突
* filter / tab / modal 真实逻辑
* dashboard 图表可用性
* mobile 交互可落地
* 动效不依赖重型特效库

---

## 十五、最终设计气质总结

请把 VibeHub 设计成这样一个产品：

> 一个面向 Vibe Coding 时代开发者的高端线上协作与产品曝光平台。
> 它既有开发者工具的专业感，也有社交平台的活跃感；
> 既像产品展示网络，也像协作工作台；
> 它区别于 GitHub 的地方，在于它更强调“人、产品、协作关系和曝光传播”，
> 而不只是代码仓库本身。

整体要做到：

* 功能完整
* 交互真实
* 视觉高级
* 背景有电子电路板般的精致纹理质感
* 暗色护眼
* 中英文一致
* 可直接交付前端开发

---

、
